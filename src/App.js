import './App.css';
import RankList from './components/RankList'
import {HashRouter, Switch, Route}  from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <div>
            <Switch>
              {/* <Route path="/contest/:contestID" component={RankList} /> */}
              <Route path="/contest/:contestID" render={(props) => <RankList {...props} key={Math.random().toString(36)} />} />
              <Route path="/" component={RankList} />
            </Switch>
          </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
