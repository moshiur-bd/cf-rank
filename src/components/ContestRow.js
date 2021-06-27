import { Link } from 'react-router-dom'

export default function ContestRow({data, selected, url}){
    const items = []
    //debugger;
    if(data == null) {
        return <tr><td>called with null</td></tr>
    }

    return (<tr>
        {/* <td><input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} /></td> */}
        <td><Link to={'/selector/contests/'+data.id+'?url='+url}><input type="radio" defaultChecked={selected} /></Link></td>
        <td style={{ "text-align": "left" }}>{data.name}</td>
        <td style={{ "text-align": "left" }}>{data.id}</td>
    </tr>)
}
