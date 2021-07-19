import RankListLayout from './RankListLayout'
import ContestListLayout from './ContestListLayout'
import OrgsListLayout from './OrgsListLayout'
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AssetSetup from '../AssetSetup'


export default function AppContainer(){
    return <HashRouter key='hash-router'>
        <div className="Switch-Route-Block" key='switch-route-block'>
            <Switch key='switch-route-sw'>
                {/* <Route path="/contest/:contestID" component={RankList} /> */}
                <Route key='route-contest-list' path="/selector/contests/:contestID" render={(props) => <ContestListLayout key="contest-list-layout" {...props}/>} />
                <Route key='route-orgs-list' path="/selector/orgs/:contestID" render={(props) => <OrgsListLayout key="orgs-list-layout" {...props}/>} />
                <Route key='route-rank-list' path="/contest/:contestID" render={(props) => <RankListLayout key="single-rank-instance" {...props} />} />
                <Route key='setup-lah' path="/setup" exact render={() => <AssetSetup/>} />
                <Redirect from="/" to="/contest/1541?url=https://codeforces.com/ratings/organization/3403"/>
            </Switch>
        </div>
    </HashRouter>
}