import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import React, { useDebugValue } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContestList.css';
import logo from '../logo.svg';
import { ParseCFOrgs, ParseCFOrgsCached } from '../lib/CF'

import { GetContestUrl } from "../lib/Goto"




const CF_API = "https://codeforces.com/api"
const CF_CONTESTS_URL = (gym) =>  `/contest.list?gym=`+gym



class ContestList extends React.Component{
    selectRef = []
    refID = {}

     constructor(props) {
        super(props);
        this.state = { data: null, loading: true, needRetry: true, failed: false, searchStr:"", renderCount:0 };
         this.onFilter = this.onFilter.bind(this);
         this.handleCheckbox = this.handleCheckbox.bind(this);

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

    handleCheckbox(e) {
        let selContest = e.target.value
        if (!e.target.checked) {
            e.target.checked = true
            return
        }
        let oldRef = this.selectRef[this.refID[Number(this.props.contestID)]].current

        oldRef.children[0].children[0].children[0].checked = false
        this.props.history.push(GetContestUrl(selContest, this.props.url, this.props.handles, this.props.parsedHandles, this.props.unofficial))
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

    renderRow(row) {
        if (row == null || row == undefined) {
            return <tr><td>called with null</td></tr>
        }

        return (<tr ref={this.selectRef[this.refID[row.id]]} >
            <td > <div className="div-checkbox-selector one-elm-flex" > <input type="checkbox" onChange={this.handleCheckbox} defaultValue={row.id} defaultChecked={row.id == this.props.contestID} /> </div></td>
            <td textAlign="left">{row.name}</td>
            <td textAlign="left">{row.id}</td>
            <td textAlign="center"><a href={"https://codeforces.com/contest/" + row.id} target="_blank">link</a></td>
        </tr>
        )
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

                             return this.renderRow(r)
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
        if(nextState && this.state.renderCount != nextState.renderCount){
            return true
        }
        return false
    }
}

export default ContestList;

