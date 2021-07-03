import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import RankRow from "./RankRow"
import Navigation from "./Navigation"
import React from 'react'
import ParseCFUsersFromURL from "../lib/ParseUser"
import 'bootstrap/dist/css/bootstrap.min.css';
import './RankList.css';
import logo from '../logo.svg';



const CF_API = "https://codeforces.com/api"
const CF_STANDING_URL = (id) => `/contest.standings?contestId=`+id+`&handles=`

const CONTEST_FINISHED = "FINISHED"


 class RankList extends React.Component{
     _isMounted = false

    constructor(props) {
    super(props);
        this.state = { data: null, loading:true, needRetry:true, failed:false, handles: this.props.handles, renderCount: 0 };
    }

    async actionFetchRanks(users){
        var errored = false
        const url = CF_API + CF_STANDING_URL(this.props.contestID) + users
        console.log("Fetching", url)
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
            if (this.state.data.contest.phase == CONTEST_FINISHED) {
                this.state.needRetry = false
            } else {
                this.state.needRetry = true
            }
        } else {
            this.state.needRetry = false
        }
    
        this.state.loading = false
        if(this._isMounted){
            this.setState({
                renderCount:this.state.renderCount + 1
            })
        }
        //this.forceUpdate()
    }

     render(){
         if (this.state.data == null){

            if (this.state.loading == false){
                return <div>
                        <div className="stopped">
                        <br/><br/><br/>
                        <p>Not Available! </p>
                    </div>
                </div>

            } else {
                return <div>
                    <div className="loading">
                        <Spinner style={{ width: "100px", height: "100px" }} animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <p>Constructing Ranklist...</p>
                    </div>
                </div>
            }
        }


        var cf = this.state.data
        return <div>
            {cf.contest.phase === CONTEST_FINISHED && <img src={logo} className="App-logo" alt="logo" />}
            {cf.contest.phase !== CONTEST_FINISHED && <img src={logo} className="App-logo-animate" alt="logo" />}

            <div className="con-tittle">
                {cf.contest.name}
            </div>

            <div className="ranklist">
                <Table variant="dark" size="sm" responsive="sm" striped bordered>
                    <thead>
                        <tr>
                            <th style={{ "text-align": "left" }}><span className="hash-rank" >#</span></th>
                            <th style={{ "text-align": "center" }}>Rank</th>
                            <th style={{ "text-align": "left" }}>Handle</th>
                            <th >Points</th>
                            <th style={{ "text-align": "left"}}> </th>
                            {cf.problems.map(p => <th>{p.index}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {cf.rows.map((r, i) => <RankRow key={i} rowid={i + 1} data={r} />) }
                    </tbody>
                </Table>
            </div>
        </div>
     }


    async parseHandles() {
        this.state.loading = true
        return ParseCFUsersFromURL(this.props.url)
        .then(
            (users) => {
                console.log("parsed-users", users)
                this.setState({
                    handles: this.props.handles + users
                })
            })
    }

    async setRefreshIfNecessary(){
        if(this.state.handles !== "") {
            this.actionFetchRanks(this.state.handles)
        }
        await this.parseHandles()
        if (this.state.needRetry) {
            debugger
            if(this.props.url !== ""){
                this.parseHandlesInterval = setInterval(() => { this.parseHandles()}, 60000);
            }
            this.parseRankInterval = setInterval(() => { this.actionFetchRanks(this.state.handles) }, 30000);
            debugger
        }
    }

     componentDidMount() {
         this.setRefreshIfNecessary().then()
         this._isMounted = true
     }
     
     componentWillUnmount() {
         clearInterval(this.interval);
         this._isMounted = false;
     }

     shouldComponentUpdate(nextProps, nextState) {
         // debugger
         if (nextState.renderCount != this.state.renderCount) {
             return true
         }
         if (nextState.handles != this.state.handles) {
             this.actionFetchRanks(nextState.handles)
             return false
         }
         return false
     }
}

export default RankList;

