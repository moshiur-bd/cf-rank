import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, ProgressBar } from 'react-bootstrap'
import RankRow from "./RankRow"
import Navigation from "./Navigation"
import React from 'react'
import { ParseCFHandles, FetchRanks, FetchUserInfo } from "../lib/CF/API"
import { GetContestStatusText, ParseCFHandlesCached, CF_ORG_URL_TO_ID } from "../lib/CF/Local"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/RankList.css';
import logo from '../logo.svg';
import { GetRanklistUrl} from "../lib/Goto"
import { IsSameHandles, UniqueParsedHandles, StringToHandleSet } from "../lib/Handles"


const CONTEST_FINISHED = "FINISHED"
const MaxHandlesLengthForGetURL = 1950

class RankList extends React.Component{
    _isMounted = false

    constructor(props) {
        super(props);
        this.state = { data: null, loading: true, needRetry: true, failed: false, renderCount: 0, userInfo: {}, userInfoCnt:0, handlesSet: StringToHandleSet(props.handles), handlesSetInRank: new Set(), handlesSetRankQ: new Set(),
                progressBar:{handles:false, rank:false, info:false, show:true}
        };
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

            this.state.progressBar.rank = true
            this.setState({ renderCount: this.state.renderCount + 1 })

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

    async actionFetchRanks(users) {

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
        this.state.progressBar.rank = true
        if (this._isMounted) {
            this.setState({
                renderCount: this.state.renderCount + 1
            })
        }
    }

    async BuildRanklist(){
        if(this.state.handlesSet.size < 1000){
            let users = [...this.state.handlesSet].join(';')
            if(users.length < MaxHandlesLengthForGetURL){
                this.state.handlesSetRankQ = new Set(this.state.handlesSet)
                await this.actionFetchRanks(users)
            } else {
                await this.actionFetchRanksAndFilterByUsers()
            }
        } else {
            await this.actionFetchRanksAndFilterByUsers()
        }
        await this.actionFetchUserInfo()
    }

    async actionFetchUserInfo() {
        let hs = [...this.state.handlesSetRankQ]

        let handles = ""
        let promises = []

        for(let i = 0; i < hs.length; i++){
            if ((hs[i] + handles).length > MaxHandlesLengthForGetURL){
                promises.push(FetchUserInfo(handles))
                handles = ""
            }
            handles += (hs[i] + ";")
        }
        if(handles != "")
        {
            promises.push(FetchUserInfo(handles))
            handles = ""
        }
        let mp = this.state.userInfo
        let resps = await Promise.all(promises)
        
        resps.map(resp => {
            resp.map(r => {mp[r.handle] = r
                this.state.userInfoCnt++
            })
        })
        hs.map(h=>{this.state.handlesSetRankQ.delete(h)})
        this.state.userInfo = mp
        this.state.progressBar.info = true
        if (this._isMounted) {
            this.setState({
                renderCount: this.state.renderCount + 1
            })
        }
    }

    async parseHandlesFromAllUrlsAndSet(url) {
        let urls = url.split(";")
        for (let i = 0; i < urls.length; i++) {
            this.state.progressBar.handles = false
            this.setState({ renderCount: this.state.renderCount + 1 })
            if (urls[i] === "") return
            let handles = (await ParseCFHandlesCached(urls[i])).handles
            if(handles === ""){
                handles = (await ParseCFHandles(urls[i])).handles
            }
            if(handles == undefined) handles = ""
            handles.split(";").map(h => this.state.handlesSet.add(h))
            this.state.handlesSet.delete("")
        }
        this.state.progressBar.handles = true
        this.setState({ renderCount: this.state.renderCount + 1 })

        console.table({ log: "Total handles", count: this.state.handlesSet.size})
    }

    async turnOffProgressBar() {
        await new Promise(resolve => setTimeout(resolve, 1000 * 5));
        this.setState({ progressBar: {show:false}, renderCount: this.state.renderCount + 1})
    }

    async setRefreshIfNecessary(){
        await this.parseHandlesFromAllUrlsAndSet(this.props.url)
        this.state.progressBar.handles = true
        
        await this.BuildRanklist()
        this.turnOffProgressBar()
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

    displayContestProgressBar(relativeTimeSeconds, durationSeconds) {
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


    renderProgressBar() {
        if(!this.state.progressBar.show){
            return <div></div>
        }
        let handleStatus = this.state.progressBar.handles
        let handleNow = 50
        let handleText = handleStatus ? "parsed " + this.state.handlesSet.size + " handles" : "parsing handles from urls: " + this.state.handlesSet.size

        let rankStatus = this.state.progressBar.rank
        let rankNow = handleStatus?50:0
        let rankText = rankStatus ? "ranklist contains " + this.state.data.rows.length + " matching rows" : "parsing ranklist from codeforces..."

        let infoStatus = this.state.progressBar.info
        let infoNow = rankStatus ? 50 : 0
        let infoText = infoStatus ? "parsed user info for " + this.state.userInfoCnt + " handles" : "parsing user info from codeforces..."

        return <ProgressBar>
            <ProgressBar variant="info" now={handleNow} label={handleText} key={1} animated={!handleStatus} />
            <ProgressBar variant="success" now={rankNow} label={rankText} key={1} animated={!rankStatus} />
            <ProgressBar variant="info" now={infoNow} label={infoText} key={1} animated={!infoStatus} />
        </ProgressBar>
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
                    {this.renderProgressBar()}
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
            {this.renderProgressBar()}
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
                        {this.displayContestProgressBar(cf.contest.relativeTimeSeconds, cf.contest.durationSeconds)}
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

