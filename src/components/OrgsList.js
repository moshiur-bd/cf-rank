import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import React, { useDebugValue } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/OrgsList.css';
import logo from '../logo.svg';
import { ParseCFOrgs, ParseCFOrgsCached, CF_ORG_URL } from '../lib/CF'

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
        let selOrg = CF_ORG_URL(e.target.defaultValue)
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
        if (this.state.searchStr == undefined) {
            this.state.searchStr = ""
        }
        this.state.data.map((org) => {
            debugger

            let rID = this.refID[org.id]
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
            <Table className="org-table" key='orgs-table' variant="dark" size="sm" responsive="sm" striped="true">
                <thead>
                    <tr>
                        <th colSpan="20">
                            <div className="filter-container flex-input-div">
                                <div>
                                    <FormControl
                                        size="sm"
                                        placeholder="Filter by Org Name"
                                        onChange={ e => {
                                            this.state.searchStr = e.target.value
                                            this.onFilter(e)
                                        }}></FormControl>
                                </div>
                            </div>

                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Org Name</th>
                        <th>Handle Count</th>
                        <th>CF</th>
                    </tr>
                </thead>
                <tbody>
                    {orgs.map(r =>{ 
                    if (!(r.id in this.refID)) {
                        this.selectRef.push(React.createRef())
                        this.refID[r.id] = this.selectRef.length - 1
                    }
                    return <tr ref={this.selectRef[this.refID[r.id]]}>
                        <td >
                            <div className="div-checkbox-selector checkbox-org"> <input type="checkbox" onChange={this.handleCheckbox} value={r.id} defaultChecked={this.state.urlSet.has(CF_ORG_URL(r.id))}/> </div></td>
                        <td></td>
                        <td >{r.name}</td>
                        <td >{r.hc}</td>
                        <td ><a href={CF_ORG_URL(r.id)}>link</a></td>
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

