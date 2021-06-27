import React from 'react'

export default function ContestRow({data}){
    const items = []
    //debugger;
    if(data == null) {
        return <tr><td>called with null</td></tr>
    }

    return (<tr>
        <td style={{ "text-align": "left" }}>{data.name}</td>
        <td style={{ "text-align": "left" }}>{data.id}</td>
    </tr>)
}
