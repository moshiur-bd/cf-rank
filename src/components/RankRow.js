import React from 'react'

export default function RankRow({data, rowid}){
    const items = []
    //debugger;
    if(data == null) {
        return <tr><td>called with null</td></tr>
    }

    return (<tr>
        <td style={{ "text-align": "left" }}>{rowid}</td>
        <td style={{ "text-align": "left" }}>{data.rank}</td>
        <td style={{ "text-align": "left" }}>{data.party.members.map(m => m.handle + " ")}</td>
        <td >{data.points}</td>
        <td ></td>
        {data.problemResults.map(r => <td>{r.points}</td>)}
    </tr>)
}
