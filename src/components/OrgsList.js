import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import ContestRow from "./ContestRow"
import Navigation from "./Navigation"
import React, { useDebugValue } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrgsList.css';
import logo from '../logo.svg';
import { ParseCFOrgs, ParseCFOrgsCached } from '../lib/CF'

import { Link } from 'react-router-dom'
import { BuildUrl } from "../lib/UrlInfo"



function RowConatiner({ searchStr, children}){
    return React.Children.toArray(children).filter( (child) =>{
        return !searchStr || searchStr == "" || child.props.data.name.toLowerCase().includes(searchStr.toLowerCase())
    })
}


class OrgsList extends React.Component{
    selectRef = []
    refID = {}

     constructor(props) {
        super(props);
         this.state = { data: null, loading: true, needRetry: true, failed: false, searchStr:"", renderCount:0 };
     }

     renderOrgs(){
        
         let orgs = [ "soon will be filled" ]
        if(this.state.data !== null && this.state.data !== undefined){
            debugger
            orgs = this.state.data
        }

        return <div className="orgs content-div" key="orgs-div">
            <Table key='orgs-table' variant="dark" size="sm" responsive="sm" striped="true">
                <thead>
                    <tr>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th colSpan="200">Org Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orgs.map(r => <tr>
                        <td >
                            <div className="div-checkbox-selector one-elm-flex"> <input type="checkbox" /> </div></td>
                        <td></td ><td colSpan="200">{r.name}</td>
                        
                    </tr>)}
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
        return true
    }
}

export default OrgsList;

