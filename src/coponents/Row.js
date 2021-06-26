import React from 'react'
import './Row.css'

export default function Row({data, rowID}){
    const items = []
    //debugger;
    if(data == null) {
        return <tr className='row'><td>called with null</td></tr>
    }

    return (<tr className='row'>
        <td style={{ "text-align": "left" }}>{rowID}</td>
        <td style={{ "text-align": "left" }}>{data.rank}</td>
        <td style={{ "text-align": "left" }}>{data.party.members.map(m => m.handle + " ")}</td>
        <td >{data.points}</td>
        <td ></td>
        {data.problemResults.map(r => <td>{r.points}</td>)}
    </tr>)
}
