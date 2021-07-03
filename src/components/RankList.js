import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import RankRow from "./RankRow"
import Navigation from "./Navigation"
import React from 'react'
import ParseCFUsersFromURL from "../lib/ParseUser"
import 'bootstrap/dist/css/bootstrap.min.css';
import './RankList.css';
import logo from '../logo.svg';



const CF_API = "https://codeforces.com/api"
const CF_STANDING_URL = (id) => `/contest.standings?contestId=`+id+`&handles=`


 class RankList extends React.Component{

     constructor(props) {
        super(props);
         this.state = { data: null, contestID: 1541, filterUrl: "", loading:true, needRetry:true, failed:false };
     }

     async actionFetchRanks(users){
         var errored = false
         const url = CF_API + CF_STANDING_URL(this.state.contestID) + users
         console.log("Fetching", url)
         const resp = await fetch(url).
             catch(err => {
                 console.log(err);
                 errored = true
                 return
             });

         if (errored) {
             return
         }

         if (resp.status === 200) {
             this.state.data = (await resp.json()).result
             if (this.state.data.contest.phase == "FINISHED") {
                 this.state.needRetry = false
             } else {
                 this.state.needRetry = true
             }
         } else {
            this.state.needRetry = false
        }
         this.state.loading = false
         this.forceUpdate()
     }

     render(){

        try{
            const { match: { params: { contestID } }, location:{search} } = this.props;
            var filterUrl = search.match(`url=(.+)`)[1]
            if (contestID != null && filterUrl != null) {
                this.state.contestID = contestID
                this.state.filterUrl = filterUrl
            }
            console.log("state set", this.state.contestID, this.state.filterUrl)

         }catch(e){
             console.log("couldn't read params", e)
         }

         if (this.state.data == null){

            if (this.state.loading == false){
                return <div>
                        <div className="stopped">
                        <br/><br/><br/>
                        <p>Not Available! </p>
                    </div>
                </div>

            } else {
                return <div>
                    <div className="loading">
                        <Spinner style={{ width: "100px", height: "100px" }} animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <p>Constructing Ranklist...</p>
                    </div>
                </div>
            }
        }


        var cf = this.state.data
        return <div>
            {cf.contest.phase == "FINISHED" && <img src={logo} className="App-logo" alt="logo" />}
            {cf.contest.phase != "FINISHED" && <img src={logo} className="App-logo-animate" alt="logo" />}

            <div className="con-tittle">
                {cf.contest.name}
            </div>

            <div className="ranklist">
                <Table variant="dark" size="sm" responsive="sm" striped bordered>
                    <thead>
                        <tr>
                            <th style={{ "text-align": "left" }}>#</th>
                            <th style={{ "text-align": "center" }}>Rank</th>
                            <th style={{ "text-align": "left" }}>Handle</th>
                            <th >Points</th>
                            <th style={{ "text-align": "left"}}> </th>
                            {cf.problems.map(p => <th>{p.index}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {cf.rows.map((r, i) => <RankRow key={i} rowid={i + 1} data={r} />) }
                    </tbody>
                </Table>
            </div>
        </div>
     }


    async repeatedWork() {
        this.state.loading = true
        return ParseCFUsersFromURL(this.state.filterUrl)
        .then(
            (users) => {
                console.log("users", users)
                return this.actionFetchRanks(users)
            })
        .catch(e => alert(e))
    }

    async setRefreshIfNecessary(){
        await this.repeatedWork()
        if (this.state.needRetry) {
            this.interval = setInterval(()=>{this.repeatedWork()}, 30000);
        }
    }

     componentDidMount() {
         this.setRefreshIfNecessary().then()
     }
     
     componentWillUnmount() {
         clearInterval(this.interval);
     }
//      componentDidUpdate(prevProps, prevState, snapshot) {
//     //      debugger
//     //      // Check to see if the "applied" flag got changed (NOT just "set")
//     //      if (this.props.location.state.applied && !prevProps.location.state.applied) {
//     //          this.state = { data: null, contestID: 1541, filterUrl: BSMRSTU_ORG_URL, loading: true, needRetry: true, failed: false }
//     //          this.forceUpdate()
//     //      }
//     //  }
}

export default RankList;

