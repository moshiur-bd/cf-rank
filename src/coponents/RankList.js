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
         const url = BE_HOST + `/contest.standings?contestId=1541&handles=weak_coder;Bisnu;I_Am_Code_Blooded`
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
             this.state.data = (await resp.json()).result
             console.log(this.state.data)
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
        console.log("problems", cf.problems)
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
         this.interval = setInterval(() => {this.actionFetchRanks()}, 10000);
     }
     componentWillUnmount() {
         clearInterval(this.interval);
     }
}

export default RankList;

