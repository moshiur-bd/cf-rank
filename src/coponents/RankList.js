import Row from "./Row"
import React from 'react'

const BE_HOST = "https://codeforces.com/api"

 class RankList extends React.Component{

     constructor(props) {
         super(props);
         // Don't call this.setState() here!
         this.state = { data: null };
     }

     async actionFetchRanks(){
         var errored = false
         const url = BE_HOST + `/contest.standings?contestId=1537&handles=weak_coder;Bisnu`
         const resp = await fetch(url).
             catch(err => {
                 alert("server down")
                 console.log(err);
                 errored = true
                 return
             });

         if (errored) {
             return
         }

         if (resp.status === 200) {
             this.state.data = (await resp.json()).result.rows[0]
             console.log(this.state.data)
             this.forceUpdate()
         } else {
             const body = await resp.json()
             alert(body.message)
         }
     }
     render(){
        return <div>
            <table>
                <tbody>
                    <Row key ="Bishnu" data={this.state.data}/>
                </tbody>
            </table>
        </div>
     }
     componentDidMount() {
         this.actionFetchRanks()
         this.interval = setInterval(() => {this.actionFetchRanks()}, 10000);
     }
     componentWillUnmount() {
         clearInterval(this.interval);
     }
}

export default RankList;

