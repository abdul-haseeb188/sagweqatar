import logo from './logo.svg';
import './App.css';
import Subheader from './components/subheader/Subheader';
import Header from './components/header/Header';
import Topbar from './components/SearchBar/topbar';
import UperNotify from './components/SearchBar/UperNotifation';

function App() {
  return (
    <div className="App">

      <UperNotify/>
      <Topbar/>
       <Header/>
      <Subheader/> 
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
