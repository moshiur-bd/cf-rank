import React from 'react'
import './RankRow.css'

export default function RankRow({data, rowid}){
    const items = []
    //debugger;
    if(data == null) {
        return <tr><td>called with null</td></tr>
    }

    return (<tr className="rank-font">
        <td style={{ "text-align": "left" }}>{rowid}</td>
        <td style={{ "text-align": "center" }}>{data.rank}</td>
        <td style={{ "text-align": "left" }}>{data.party.members.map(m => m.handle + " ")}</td>
        <td >{data.points}</td>
        <td ></td>
        {data.problemResults.map(r => {
            if(r.points == 0){
                return <td></td>
            }
            return <td>
                <span className="cell-points">{r.points}  <span className="cell-rejected">{r.rejectedAttemptCount > 0 && -r.rejectedAttemptCount}</span></span>
                
                <span className="cell-time">{new Date(r.bestSubmissionTimeSeconds * 1000).toISOString().substr(11, 8)}</span>
            </td>
            
            //<td>{r.points}</td>
        
        })}
    </tr>)
}
