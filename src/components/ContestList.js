import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import ContestRow from "./ContestRow"
import Navigation from "./Navigation"
import React, { useDebugValue } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContestList.css';
import logo from '../logo.svg';
import { ParseCFOrgs, ParseCFOrgsCached } from '../lib/CF'

import { Link } from 'react-router-dom'
import { BuildUrl } from "../lib/UrlInfo"



const CF_API = "https://codeforces.com/api"
const CF_CONTESTS_URL = (gym) =>  `/contest.list?gym=`+gym



class ContestList extends React.Component{
    selectRef = []
    refID = {}

     constructor(props) {
        super(props);
        this.state = { data: null, loading: true, needRetry: true, failed: false, searchStr:"", renderCount:0 };
        this.onFilter = this.onFilter.bind(this);

     }

     async actionFetchContests(gym){
         var errored = false
         const url = CF_API + CF_CONTESTS_URL(gym)
         console.log("Fetching Contests", url)
         const resp = await fetch(url).
             catch(err => {
                 console.log(err);
                 errored = true
                 return
             });

         if (errored) {
             return
         }

         if (resp.status === 200) {
             this.state.data = (await resp.json()).result
         } else {

        }
         this.state.loading = false
         this.forceUpdate()
     }

    onFilter(e){
        debugger
        if (this.state.searchStr == undefined) {
            this.state.searchStr = ""
        }
        this.state.data.map((contest) => {
            debugger
            let rID = this.refID[contest.id]
            if (rID === undefined) {
                return
            }
            let r = this.selectRef[rID].current
            if (contest.name.toLowerCase().includes(this.state.searchStr.toLowerCase())) {
                r.hidden = false
            } else {
                r.hidden = true
            }
        })
        
    }

     renderContests(){
         var cf = this.state.data


         return <div className="contests content-div" key="contests-div">
             <Table key='contests-table' variant="dark" size="sm" responsive="sm" striped="true">
                 <thead>
                     <tr>
                         <th colSpan="20">
                             <div className="filter-container">
                                 <div>
                                     <FormControl
                                         className="sm"
                                         placeholder="Filter by Tittle" defaultValue={this.state.searchStr}
                                         onChange={e => {
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
                         <th>Contest Tittle</th>
                         <th>ID</th>
                         <th>Codeforces</th>
                     </tr>


                 </thead>
                 <tbody>
                         {cf.map((r, i) => {
                             if (r.phase === "BEFORE") {
                                 return
                             }

                             if (!(r.id in this.refID)) {
                                 this.selectRef.push(React.createRef())
                                 this.refID[r.id] = this.selectRef.length - 1
                             }


                             var elm = <ContestRow className="hidden-row" ref={this.selectRef[this.refID[r.id]]} key={i} data={r} url={this.props.url} handles={this.props.handles} parsedHandles={this.props.parsedHandles} unofficial={this.props.unofficial} selected={r.id == this.props.contestID} />
                             return elm
                         })}
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
                        <p>Parsing Contests...</p>
                    </div>
                </div>
            }
        }

         return <div key="content-list-div" className="content-list-div" >
            {this.renderContests()}            
        </div>
     }


    async fetchContests() {
        this.state.loading = true
        return this.actionFetchContests(false)
        .then(
            (data) => {
                console.log("contests-data", data)
            })
        .catch(e => alert(e))
    }

    async setRefreshIfNecessary(){
        await this.fetchContests()
    }

     componentDidMount() {
        this.setRefreshIfNecessary().then()
     }
     
     componentWillUnmount() {
         //clearInterval(this.interval);
     }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps != null && ( nextProps.url != this.props.url || nextProps.contestID != this.props.contestID)){
            try {
                let oldRef = this.selectRef[this.refID[Number(this.props.contestID)]].current
                let newRef = this.selectRef[this.refID[Number(nextProps.contestID)]].current
                debugger
                //oldRef.hidden = true

                // newRef.innerHTML = `<input type="checkbox" checked="true">`
                
                oldRef.children[0].children[0].children[0].children[0].checked = false
                newRef.children[0].children[0].children[0].innerHTML = `<input type="checkbox" checked="true">`
                //oldRef.innerHTML = `<input type="checkbox">`
            } catch(e){ // may fail due to filter 

            }
            return false
        }
        if(nextState && nextState.searchStr != this.state.searchStr || this.state.renderCount != nextState.renderCount){
            return true
        }
        return false
    }
}

export default ContestList;

