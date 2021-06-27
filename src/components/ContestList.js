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

class ContestList extends React.Component{

     constructor(props) {
        super(props);
         this.state = { data: null, loading:true, needRetry:true, failed:false };
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
         //debugger
         if (this.state.data === null){

            if (this.state.loading === false){
                return <div>
                        <div className="stopped">
                        <p>Not Available! </p>
                    </div>
                </div>

            } else {
                return <div>
                    {/* <Navigation contestID={this.state.contestID} url={this.state.filterUrl}/> */}
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
                            <th></th>
                            <th>Contest Tittle</th>
                            <th>Contest ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cf.map((r, i) => <ContestRow key={i} data={r} url={this.props.url}/>) }
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
                debugger
                console.log("data", data)
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
        //debugger
        if(nextProps != null && ( nextProps.url != this.props.url || nextProps.contestID != this.props.contestID)){
            return true
        }
        return false
    }
}

export default ContestList;

