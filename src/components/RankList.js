import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, ProgressBar } from 'react-bootstrap'
import RankRow from "./RankRow"
import Navigation from "./Navigation"
import React from 'react'
import { ParseHandlesFromSingleURLAndPages, FetchRanks, GetContestStatusText, FetchUserInfo, ParseCFHandlesCached, CF_ORG_URL_TO_ID} from "../lib/CF"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/RankList.css';
import logo from '../logo.svg';
import { GetRanklistUrl} from "../lib/Goto"
import { IsSameHandles, UniqueParsedHandles, StringToHandleSet } from "../lib/Handles"


const CONTEST_FINISHED = "FINISHED"

class RankList extends React.Component{
    _isMounted = false

    constructor(props) {
        super(props);
        this.state = { data: null, loading: true, needRetry: true, failed: false, renderCount: 0, userInfo: {}, handlesSet: StringToHandleSet(props.handles), handlesSetInRank: new Set(), handlesSetRankQ: new Set()};
    }

    async actionFetchRanksAndFilterByUsers() {

        let resp = await FetchRanks(this.props.contestID, "", this.props.unofficial)

        if (resp !== undefined) {
            this.state.data = {}
            this.state.data.contest = resp.contest
            this.state.data.problems = resp.problems
            this.state.data.rows = []
            
            let q = new Set()
            resp.rows.map(r => {
                let take = false
                r.party.members.map(m => {
                    if(this.state.handlesSet.has(m.handle)){
                        take = true
                    }
                })
                
                if(take){
                    this.state.data.rows.push(r)
                    r.party.members.map(m => {
                        if(this.state.handlesSetInRank.has(m.handle) == false) {
                            this.state.handlesSetInRank.add(m.handle)
                            q.add(m.handle)
                        }
                    })
                }
                
            })
            q.forEach(h => {this.state.handlesSetRankQ.add(h)})

            if (this.state.data.contest.phase == CONTEST_FINISHED) {
                this.state.needRetry = false
            } else {
                this.state.needRetry = true
            }
        } else {
            this.state.needRetry = false
        }

        this.state.loading = false
        if (this._isMounted) {
            this.setState({
                renderCount: this.state.renderCount + 1
            })
        }
    }

    async actionFetchUserInfo() {
        let hs = [...this.state.handlesSetRankQ]

        let handles = "", hc = 0
        let promises = []

        hs.map(h => {
            handles += (h + ";")
            hc++
            if (hc % 200 == 0) {
                promises.push(FetchUserInfo(handles))
                handles = ""
            }
        })
        if(handles != "")
        {
            promises.push(FetchUserInfo(handles))
            handles = ""
        }
        let mp = this.state.userInfo
        let resps = await Promise.all(promises)
        
        debugger
        resps.map(resp => {
            resp.map(r => mp[r.handle] = r)
        })
        hs.map(h=>{this.state.handlesSetRankQ.delete(h)})
        this.state.userInfo = mp
        if (this._isMounted) {
            this.setState({
                renderCount: this.state.renderCount + 1
            })
        }
    }

    async parseHandlesFromAllUrlsAndSet(url) {
        let urls = url.split(";")
        let handlesJson = await ParseCFHandlesCached()
        for (let i = 0; i < urls.length; i++) {
            if (urls[i] === "") return
            let key = "o:" + CF_ORG_URL_TO_ID(urls[i])
            let handles = handlesJson[key]
            handles.split(";").map(h => this.state.handlesSet.add(h))
        }

        console.table({ log: "Total handles", count: this.state.handlesSet.size})
    }

    async setRefreshIfNecessary(){
        await this.parseHandlesFromAllUrlsAndSet(this.props.url)
        await this.actionFetchRanksAndFilterByUsers()
        await this.actionFetchUserInfo()

        if (this.state.needRetry) {
            this.parseRankInterval = setInterval(() => { 
                this.actionFetchRanksAndFilterByUsers().then(
                () => this.actionFetchUserInfo()
                )
            }, 30000);
        }
    }
    componentWillUnmount() {
        clearInterval(this.parseRankInterval);
        this._isMounted = false;
    }

    componentDidMount() {
        this.setRefreshIfNecessary().then()
        this._isMounted = true
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


    displayProgressBar(relativeTimeSeconds, durationSeconds) {
        if (relativeTimeSeconds == undefined || durationSeconds == undefined) {
            return
        }
        if (relativeTimeSeconds > durationSeconds || relativeTimeSeconds < 0) {
            return
        }
        let percent = Math.round((relativeTimeSeconds / durationSeconds) * 100)
        return <tr>
            <th colSpan="100">
                <ProgressBar variant="info" now={percent} animated ></ProgressBar>
            </th>
        </tr>
    }

    render() {
        let invalidArgs = (this.props.handles == "") && (this.props.url == "")

        if (invalidArgs) {
            this.state.loading = false
        }
        if (invalidArgs || this.state.data == null) {

            if (this.state.loading == false) {
                return <div>
                    <div className="stopped">
                        <br /><br /><br />
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
            if (i === 0 || cf.rows[i - 1].rank == cf.rows[i].rank) {
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
                            <th> Score </th>
                            <th style={{ "text-align": "left" }}> </th>
                            {cf.problems.map(p => { 
                                let rating = 1;
                                if(p.rating !== undefined){
                                    rating = p.rating
                                }
                                return <th className="white-hyperlink" title={p.name + " : " + rating}><a target="_blank" href={"https://codeforces.com/contest/" + this.props.contestID + "/problem/" + p.index}>{p.index}</a></th>})}
                        </tr>
                    </thead>
                    <tbody>
                        {cf.rows.map((r, i) => <RankRow key={i} localRank={currentRank(i)} data={r} userInfo={this.state.userInfo} />)}
                    </tbody>
                </Table>
            </div>
        </div>
    }
}

export default RankList;

