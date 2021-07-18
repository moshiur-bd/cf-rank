import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import React, { useDebugValue } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrgsList.css';
import logo from '../logo.svg';
import { ParseCFOrgs, ParseCFOrgsCached } from '../lib/CF'

import { Link } from 'react-router-dom'

import { GetOrgsUrl } from "../lib/Goto"


class OrgsList extends React.Component{
    selectRef = []
    refID = {}

     constructor(props) {
        super(props);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.state = { data: null, loading: true, urlSet: new Set(props.url.split(";")), failed: false, searchStr:"", renderCount:0 };
     }

     handleCheckbox(e){
        let selOrg = e.target.defaultValue
        if(e.target.checked){
            this.state.urlSet.add(selOrg)
        } else {
            this.state.urlSet.delete(selOrg)
        }
        this.state.urlSet.delete("")
        let compiledUrl = [...this.state.urlSet].join(';')
        console.log("marked", selOrg, e.target.checked, "url", compiledUrl)
        this.props.history.push(GetOrgsUrl(this.props.contestID, compiledUrl, this.props.handles, this.props.parsedHandles, this.props.unofficial))
     }


    onFilter(e) {
        debugger
        if (this.state.searchStr == undefined) {
            this.state.searchStr = ""
        }
        this.state.data.map((org) => {
            debugger
            let rID = this.refID[org.url]
            if (rID === undefined) {
                return
            }
            let r = this.selectRef[rID].current
            if (org.name.toLowerCase().includes(this.state.searchStr.toLowerCase())) {
                r.hidden = false
            } else {
                r.hidden = true
            }
        })

    }

     renderOrgs(){
        
         let orgs = [ "soon to be filled" ]
        if(this.state.data !== null && this.state.data !== undefined){
            orgs = this.state.data
        }

        return <div className="orgs content-div" key="orgs-div">
            <Table key='orgs-table' variant="dark" size="sm" responsive="sm" striped="true">
                <thead>
                    <tr>
                        <th colSpan="20">
                            <div className="filter-container">
                                <div>
                                    <FormControl
                                        className="sm"
                                        placeholder="Filter by Org"
                                        onChange={ e => {
                                            this.state.searchStr = e.target.value
                                            this.onFilter(e)
                                        }}
                                    ></FormControl>
                                </div>
                            </div>

                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Org Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orgs.map(r =>{ 
                    if (!(r.url in this.refID)) {
                        this.selectRef.push(React.createRef())
                        this.refID[r.url] = this.selectRef.length - 1
                    }
                    return <tr ref={this.selectRef[this.refID[r.url]]}>
                        <td >
                            <div className="div-checkbox-selector one-elm-flex"> <input type="checkbox" onChange={this.handleCheckbox} value={r.url} defaultChecked={this.state.urlSet.has(r.url)}/> </div></td>
                        <td></td><td colSpan="200">{r.name}</td>
                    </tr>})}
                </tbody>
            </Table>
        </div>
     }

     render(){
         if (this.state.data === null){

            if (this.state.loading === false){
                return <div>
                        <div className="stopped">
                        <p>Not Available! </p>
                    </div>
                </div>

            } else {
                return <div>
                    <div className="loading">
                        <Spinner style={{ width: "100px", height: "100px" }} animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <p>Parsing Orgs...</p>
                    </div>
                </div>
            }
        }

         return <div key="orgs-list-div" className="content-list-div" >
            {this.renderOrgs()}
            
        </div>
     }




    async parseOrgs(){
        // let orgs = await ParseCFOrgs()
        let data = await ParseCFOrgsCached()
        // debugger
        this.setState({
            data:data,
            renderCount: this.state.renderCount + 1
        })
    }
     componentDidMount() {
        this.parseOrgs()
     }
     
     componentWillUnmount() {
         //clearInterval(this.interval);
     }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState){
            return nextState.renderCount != this.state.renderCount
        }
        return false
    }
}

export default OrgsList;

