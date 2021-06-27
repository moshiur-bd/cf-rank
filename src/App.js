import './App.css';
import RankList from './components/RankList'
import {BrowserRouter, Switch, Route}  from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/contest/:contestID" component={RankList} />
              <Route path="/" component={RankList} />
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
