import RankList from './RankList'
import ContestList from './ContestList'
import Navigation from './Navigation'
import { HashRouter, Switch, Route } from "react-router-dom"
import "./AppContainer.css"
import { useState } from 'react'

const BSMRSTU_ORG_URL = `https://codeforces.com/ratings/organization/3403`


export default function AppContainer(){
    const [url, setUrl] = useState(BSMRSTU_ORG_URL)
    const [contestID, setContestID] = useState(1541)

    return <HashRouter>
        <Navigation url={url} contestID={contestID}/>
        <div className="App-Container">
            <Switch>
                {/* <Route path="/contest/:contestID" component={RankList} /> */}
                <Route path="/selector/contests/:contestID" render={(props) => <ContestList {...props} url={url}/>} />
                <Route path="/contest/:contestID" render={(props) => <RankList {...props} key={Math.random().toString(36)} />} />
                <Route path="/" component={ContestList} />
            </Switch>
        </div>
    </HashRouter>
}