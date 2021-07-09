import { Link } from 'react-router-dom'
import React from 'react';
import { ToggleButton } from 'react-bootstrap';
import {BuildUrl} from "../lib/UrlInfo"

class ContestRow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data: null,
        //     selected: false,
        // }
    }

    render(){
        console.log("rendering-row", this.props)
        
        if(this.props.data == null) {
            return <tr><td>called with null</td></tr>
        }

        var data = this.props.data

        return (<tr>
            <td ><Link to={BuildUrl('/selector/contests/', data.id, this.props.url, this.props.handles, this.props.parsedHandles, this.props.unofficial)}><p ref={this.props.innerRef} >{this.props.selected ? "SELECTED" : "select"}</p></Link></td>
            <td textAlign="left">{data.name}</td>
            <td textAlign="left">{data.id}</td>
            <td textAlign="center"><a href={"https://codeforces.com/contest/" + data.id} target="_blank">link</a></td>
        </tr>
        )
    }

    // componentDidMount() {
    //     this.setState({
    //         data: this.props.data,
    //         selected: selected
    //     })
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // if (nextState.data != null) {
        //     return true
        // }
        if (nextProps !== null && this.props !== null && nextProps.selected === this.props.selected) {
            return false
        }
        return true
    }
}


export default React.forwardRef((props, ref) => <ContestRow
    innerRef={ref} {...props}
/>);