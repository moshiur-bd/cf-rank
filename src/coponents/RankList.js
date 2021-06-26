import Row from "./Row"
import React from 'react'
import ParseCFUsersFromURL from "../lib/ParseUser"
import {Spinner, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './RankList.css';
import logo from '../logo.svg';



const CF_API = "https://codeforces.com/api"
const CF_STANDING_URL = `/contest.standings?contestId=1541&handles=`

const BSMRSTU_ORG_URL = `https://codeforces.com/ratings/organization/3403`

 class RankList extends React.Component{

     constructor(props) {
        super(props);
        this.state = { data: null };
     }

     async actionFetchRanks(users){
         var errored = false
         const url = CF_API + CF_STANDING_URL + users
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
             
             this.forceUpdate()
         } else {
             const body = await resp.json()
             alert(body.message)
         }
     }


     render(){
         if (this.state.data == null || this.state.data.rows.length == 0){
            return <div className="loading">
                <Spinner style={{width:"100px", height:"100px"}} animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <p>Constructing Ranklist...</p>
            </div>
        }

        var cf = this.state.data
        return <div>
            {cf.contest.phase == "FINISHED" && <img src={logo} className="App-logo" alt="logo" />}
            {cf.contest.phase != "FINISHED" && <img src={logo} className="App-logo-animate" alt="logo" />}

            <div className="con-tittle">
                {cf.contest.name}
            </div>

            <div className="ranklist">
                <Table variant="dark" size="sm" responsive="sm" striped="true">
                    <thead>
                        <tr>
                            <th style={{ "text-align": "left" }}>#</th>
                            <th style={{ "text-align": "left" }}>Rank</th>
                            <th style={{ "text-align": "left" }}>Handle</th>
                            <th >Points</th>
                            <th style={{ "text-align": "left"}}> </th>
                            {cf.problems.map(p => <th>{p.index}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {cf.rows.map((r, i) => <Row key={i} rowID={i + 1} data={r} />) }
                    </tbody>
                </Table>
            </div>
        </div>
     }
     componentDidMount() {
         this.actionFetchRanks()
         this.interval = setInterval(() => {
             ParseCFUsersFromURL(BSMRSTU_ORG_URL)
             .then(
                (users) => {
                    console.log("users", users)
                    this.actionFetchRanks(users).catch(alert)
                })
            .catch(e => alert(e))
             }, 10000);
     }
     componentWillUnmount() {
         clearInterval(this.interval);
     }
}

export default RankList;

