import './App.css';
import RankList from './coponents/RankList';
import ParseUser from './lib/ParseUser'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <RankList key = "cf-rank"/>
      </header>
    </div>
  );
}

export default App;
