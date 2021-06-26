import Row from "./Row"
import React from 'react'
import ParseCFUsersFromURL from "../lib/ParseUser";

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
        if(this.state.data == null){
            return <div>
                <p>nothing here yet</p>
            </div>
        }

        let cf = this.state.data
        return <div>
            <div className="con-tittle" style={{ "text-align": "center", "margin": "80px" }}>
                {cf.contest.name}
            </div>

            <table>
                <thead>
                    <tr>
                        <th style={{ "text-align": "left", "padding-left": "30px" }}>#</th>
                        <th style={{ "text-align": "left", "padding-left": "30px" }}>CF-Rank</th>
                        <th style={{ "text-align": "left", "padding-left":"30px" }}>Handle</th>
                        <th >Points</th>
                        <th style={{ "text-align": "left", "padding-left": "30px" }}> </th>
                        {cf.problems.map(p => <th>{p.index}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {cf.rows.map((r, i) => <Row key={i} rowID={i + 1} data={r} />) }
                </tbody>
            </table>
        </div>
     }
     componentDidMount() {
         this.actionFetchRanks()
         this.interval = setInterval(() => {
             ParseCFUsersFromURL(BSMRSTU_ORG_URL)
             .then(
                (users) => {
                    console.log("users", users)
                    this.actionFetchRanks(users)
                })
             }, 10000);
     }
     componentWillUnmount() {
         clearInterval(this.interval);
     }
}

export default RankList;

