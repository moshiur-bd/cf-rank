import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, ProgressBar } from 'react-bootstrap'
import RankRow from "./RankRow"
import Navigation from "./Navigation"
import React from 'react'
import { ParseCFUsersFromURL, FetchRanks, GetContestStatusText, FetchUserInfo} from "../lib/CF"
import 'bootstrap/dist/css/bootstrap.min.css';
import './RankList.css';
import logo from '../logo.svg';
import { GetRanklistUrl} from "../lib/Goto"
import { IsSameHandles, UniqueParsedHandles } from "../lib/Handles"





const CONTEST_FINISHED = "FINISHED"

class RankList extends React.Component{
    _isMounted = false

    constructor(props) {
        super(props);
        let h = props.handles;
        if(props.url !== ""){
            h = h + props.parsedHandles
        }
        this.state = { data: null, loading:true, needRetry:true, failed:false, handles: h, renderCount: 0, userInfo:{} };
    }

    async actionFetchRanks(users){

        let resp = await FetchRanks(this.props.contestID, users, this.props.unofficial)

        if (resp !== undefined) {
            this.state.data = resp
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
    }

    async actionFetchUserInfo(users) {
        let resp = await FetchUserInfo(users)
        if (resp !== undefined) {
            let mp = {}
            resp.map(r => mp[r.handle] = r)
            this.state.userInfo = mp
        } else {
            console.log("user-info not found. unable to set colors")
        }

        if (this._isMounted) {
            this.setState({
                renderCount: this.state.renderCount + 1
            })
        }
    }

    displayProgressBar(relativeTimeSeconds, durationSeconds){
        if(relativeTimeSeconds == undefined || durationSeconds == undefined){
            return 
        }
        if(relativeTimeSeconds > durationSeconds || relativeTimeSeconds < 0){
            return
        }
        let percent = Math.round((relativeTimeSeconds / durationSeconds) * 100)
        return <tr>
            <th colSpan="100">
                <ProgressBar variant="info" now={percent} animated ></ProgressBar>
            </th>
        </tr>
    }

    render(){
        let invalidArgs = (this.props.handles == "") && (this.props.url == "")

        if(invalidArgs){
            this.state.loading = false
        }
        if (invalidArgs || this.state.data == null){

        if (this.state.loading == false){
            return <div>
                    <div className="stopped">
                    <br/><br/><br/>
                    <p>Not Available or Invalid Args!</p>
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


    let cf = this.state.data
    let lastRank = 1

    const currentRank = (i) => {
        if ( i === 0  || cf.rows[i-1].rank == cf.rows[i].rank){
            return lastRank
        }
        return lastRank = i + 1
    }
    
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
                        <th className="white-hyperlink" colSpan="100">
                            <a target="_blank" href={"https://codeforces.com/contest/" + this.props.contestID + "/standings"}>{GetContestStatusText(cf.contest.phase)}</a>
                        </th>
                    </tr>
                    {this.displayProgressBar(cf.contest.relativeTimeSeconds, cf.contest.durationSeconds)}
                    <tr>
                        <th style={{ "text-align": "left" }}><span className="hash-rank" >#</span></th>
                        <th style={{ "text-align": "center" }}>Rank</th>
                        <th style={{ "text-align": "left" }}>Handle</th>
                        <th >Points</th>
                        <th style={{ "text-align": "left" }}> </th>
                        {cf.problems.map(p => <th className="white-hyperlink" title={p.name + " : " + p.rating}><a target="_blank" href={"https://codeforces.com/contest/"+this.props.contestID + "/problem/" + p.index}>{p.index}</a></th>)}
                    </tr>
                </thead>
                <tbody>
                    {cf.rows.map((r, i) => <RankRow key={i}  localRank={currentRank(i)} data={r} userInfo={this.state.userInfo} />) }
                </tbody>
            </Table>
        </div>
    </div>
    }

    async parseHandlesFromSingleURLAndPages(url) {
        let handles = ""
        for (let i = 1; i <= 60; i++) {
            let parsed = await ParseCFUsersFromURL(url + "/page/" + i)
            var { unq, cnt, tot } = UniqueParsedHandles(parsed, handles)
            if(cnt > 0){
                handles += unq;
            } else break
        }
        
        console.table({ log: "Parse handle result per url", url: url, total: tot, handles:handles })
        return handles
    }

    async parseHandlesFromAllUrls(url){
        let handles = ""
        let urls = url.split(";")
        let promises = []
        for(let i = 0; i < urls.length; i++){
            if(urls[i] === "") return
            promises.push(this.parseHandlesFromSingleURLAndPages(urls[i]))
        }
        debugger
        let pHandles = await Promise.all(promises)
        debugger

        for(let i = 0; i < pHandles.length; i++){
            var { unq, cnt, tot } = UniqueParsedHandles(pHandles[i], handles)
            if(cnt > 0){
                handles += unq
            }
        }
        console.table({ log: "Total handles", total: tot, handles:handles})
        return handles
    }

    async parseHandles() {
        if(this.props.url === undefined || this.props.url === ""){
            return
        }
        this.state.loading = true
        let handles = await this.parseHandlesFromAllUrls(this.props.url)

        if (IsSameHandles(handles, this.props.parsedHandles)){
            return
        }

        if (this._isMounted) {
            this.props.history.push(GetRanklistUrl(this.props.contestID, this.props.url, this.props.handles, handles, this.props.unofficial))
        }
    }

    async setRefreshIfNecessary(){
        if(this.state.handles !== "") {
            this.actionFetchRanks(this.state.handles)
            this.actionFetchUserInfo(this.state.handles)
        }
        await this.parseHandles()
        if (this.state.needRetry) {
            this.parseRankInterval = setInterval(() => { this.actionFetchRanks(this.state.handles) }, 30000);
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

