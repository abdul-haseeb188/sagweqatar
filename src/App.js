import logo from './logo.svg';
import './App.css';

import Subheader from './components/subheader/Subheader';
import Search from './components/Search/Search';
import Header from './components/header/Header';
import StatusBar from './components/status_bar/StatusBar';
function App() {
  return (
    <div className="App">
      <StatusBar />
      <Header/>
      <Subheader/> 
      <Search />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
