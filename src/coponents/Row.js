import React from 'react'
import './Row.css'

export default function Row({data}){
    const items = []
    //debugger;
    if(data == null) {
        return <tr className='row'><td>called with null</td></tr>
    }

    return (<tr className='row'>
        <td>{data.party.members.map(m => m.handle + " ")}</td>
        {data.problemResults.map(r => <td>{r.points}</td>)}
    </tr>)
}
