import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import ContestRow from "./ContestRow"
import Navigation from "./Navigation"
import React, { useDebugValue } from 'react'
import ParseCFUsersFromURL from "../lib/ParseUser"
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContestList.css';
import logo from '../logo.svg';



const CF_API = "https://codeforces.com/api"
const CF_CONTESTS_URL = (gym) =>  `/contest.list?gym=`+gym

class ContestList extends React.Component{

     constructor(props) {
        super(props);
         this.state = { data: null, contestID: 1541, filterUrl: "", loading:true, needRetry:true, failed:false };
     }

     async actionFetchContests(gym){
         var errored = false
         const url = CF_API + CF_CONTESTS_URL(gym)
         console.log("Fetching Contests", url)
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
         } else {

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
                    <Navigation contestID={this.state.contestID} url={this.state.filterUrl} />
                        <div className="stopped">
                        <p>Not Available! </p>
                    </div>
                </div>

            } else {
                return <div>
                    {/* <Navigation contestID={this.state.contestID} url={this.state.filterUrl}/> */}
                    <div className="loading">
                        <Spinner style={{ width: "100px", height: "100px" }} animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <p>Parsing Contests...</p>
                    </div>
                </div>
            }
        }


        var cf = this.state.data
        return <div>
            {/* <Navigation contestID={this.state.contestID} url={this.state.filterUrl} /> */}
            <div className="contests">
                <Table variant="dark" size="sm" responsive="sm" striped="true">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Contest Tittle</th>
                            <th>Contest ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cf.map((r, i) => <ContestRow key={r.id + this.state.contestID} data={r} url={this.state.filterUrl} selected={r.id == this.state.contestID}/>) }
                    </tbody>
                </Table>
            </div>
        </div>
     }


    async repeatedWork() {
        this.state.loading = true
        return this.actionFetchContests(false)
        .then(
            (data) => {
                console.log("data", data)
            })
        .catch(e => alert(e))
    }

    async setRefreshIfNecessary(){
        await this.repeatedWork()
    }

     componentDidMount() {
         this.setRefreshIfNecessary().then()
     }
     
     componentWillUnmount() {
         //clearInterval(this.interval);
     }
}

export default ContestList;

