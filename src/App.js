import logo from './logo.svg';
import './App.css';
import RankList from './coponents/RankList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <RankList key = "cf-rank"/>
      </header>
    </div>
  );
}

export default App;
