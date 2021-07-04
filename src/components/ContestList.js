import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import ContestRow from "./ContestRow"
import Navigation from "./Navigation"
import React, { useDebugValue } from 'react'
import ParseCFUsersFromURL from "../lib/ParseUser"
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContestList.css';
import logo from '../logo.svg';



const CF_API = "https://codeforces.com/api"
const CF_CONTESTS_URL = (gym) =>  `/contest.list?gym=`+gym



function RowConatiner({ searchStr, children}){
    return React.Children.toArray(children).filter( (child) =>{
        return !searchStr || searchStr == "" || child.props.data.name.toLowerCase().includes(searchStr.toLowerCase())
    })
}


class ContestList extends React.Component{
    selectRef = []
    refID = {}

     constructor(props) {
        super(props);
         this.state = { data: null, loading: true, needRetry: true, failed: false, searchStr:"" };
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

        var cf = this.state.data
         return <div key="contests-list-div" >
            <div className="contests" key="contests-div">
                <Table key = 'contests-table' variant="dark" size="sm" responsive="sm" striped="true">
                    <thead>
                        <tr>
                            <th>Contest Tittle</th>
                            <th>ID</th>

                            <th ><FormControl autoFocus
                                 className="mx-3 my-2 w-auto"
                                 textalign="right"
                                 placeholder="Filter by Tittle" defaultValue={this.state.searchStr} 
                                 onMouseMove={(e) => {
                                     if(this.state.searchStr != e.target.value){
                                        return this.setState({searchStr: e.target.value})
                                     }
                                    }} 
                                ></FormControl></th>
                        </tr>

                    </thead>
                    <tbody>
                         <RowConatiner key={"search-str" +this.state.searchStr} searchStr={this.state.searchStr}>
                             {cf.map((r, i) =>{
                                if( r.phase === "BEFORE" ){
                                    return
                                }
                                
                                if (!(r.id in this.refID)){
                                    this.selectRef.push(React.createRef())
                                    this.refID[r.id] = this.selectRef.length - 1                                    
                                }
                                
                                
                                 var elm = <ContestRow ref={this.selectRef[this.refID[r.id]]} key={i} data={r} url={this.props.url} handles={this.props.handles} parsedHandles={this.props.parsedHandles} selected={r.id == this.props.contestID}/>
                                return elm
                                })}
                        </RowConatiner>
                    </tbody>
                </Table>
            </div>
        </div>
     }


    async repeatedWork() {
        this.state.loading = true
        return this.actionFetchContests(false)
        .then(
            (data) => {
                console.log("contests-data", data)
            })
        .catch(e => alert(e))
    }

    async setRefreshIfNecessary(){
        await this.repeatedWork()
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
                this.selectRef[this.refID[Number(nextProps.contestID)]].current.innerText = "SELECTED"
                this.selectRef[this.refID[Number(this.props.contestID)]].current.innerText = "select"
            } catch(e){ // may fail due to filter 

            }
            return false
        }
        if(nextState && nextState.searchStr != this.state.searchStr){
            return true
        }
        return false
    }
}

export default ContestList;

