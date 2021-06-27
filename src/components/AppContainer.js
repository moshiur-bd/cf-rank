import RankListLayout from './RankListLayout'
import ContestListLayout from './ContestListLayout'
import Navigation from './Navigation'
import { HashRouter, Switch, Route } from "react-router-dom"
import { useState } from 'react'


export default function AppContainer(){
    return <HashRouter>
        {/* <Switch>
            <Route path="/selector/contests/:contestID" component={Navigation} />
            <Route path="/contest/:contestID" component={Navigation} />
            <Route path="/" component={Navigation} />
        </Switch>

        <Navigation url={url} contestID={contestID}/> */}
        <div className="Switch-Route-Block">
            <Switch>
                {/* <Route path="/contest/:contestID" component={RankList} /> */}
                <Route path="/selector/contests/:contestID" render={(props) => <ContestListLayout {...props} key={Math.random().toString(36)}/>} />
                <Route path="/contest/:contestID" render={(props) => <RankListLayout {...props} key={Math.random().toString(36)} />} />
                <Route path="/" component={ContestListLayout} />
            </Switch>
        </div>
    </HashRouter>
}