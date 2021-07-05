import React from 'react'
import './RankRow.css'

export default function RankRow({data, localRank}){
    const items = []
    if(data == null) {
        return <tr><td>called with null</td></tr>
    }


    const mainContent = (r) => <div className="rank-main-content">
        <span className="cell-points">{r.points} </span>
        <span className="cell-time">{r.bestSubmissionTimeSeconds && new Date(r.bestSubmissionTimeSeconds * 1000).toISOString().substr(11, 8)}</span>
    </div>

    const rejectedCount = (r) => <span className="cell-rejected">{-r.rejectedAttemptCount}</span>

    return (<tr className="rank-font">
        <td style={{ "text-align": "left" }}><span className="hash-rank" >{data.rank > 0 && localRank}</span></td>
        <td style={{ "text-align": "center" }}>{data.rank > 0 && data.rank}</td>
        <td style={{ "text-align": "left" }}>{data.party.members.map(m => m.handle + " ")}</td>
        <td >{data.points}</td>
        <td ></td>
        {data.problemResults.map(r => {
            return <td>
                <div className="rank-cell-div">
                    {r.points > 0  && <div className="rank-side-content"></div>}
                    {r.points > 0 && mainContent(r)}
                    <div className="rank-side-content">{r.rejectedAttemptCount > 0 && rejectedCount(r)}</div>
                </div>
            </td>
        })}
    </tr>)
}
