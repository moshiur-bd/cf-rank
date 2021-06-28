import { Link } from 'react-router-dom'
import React from 'react';
import { ToggleButton } from 'react-bootstrap';

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
            {/* <td><input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} /></td> */}
            <td><Link to={'/selector/contests/' + data.id + '?url=' + this.props.url}><p ref={this.props.innerRef} >{this.props.selected? "SELECTED": "select"}</p></Link></td>
            <td textalign="left">{data.name}</td>
            <td textalign="left">{data.id}</td>
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