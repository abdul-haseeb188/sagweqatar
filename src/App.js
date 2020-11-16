import logo from "./logo.svg";
import "./App.css";
import StatusBar from "./components/status-bar/StatusBar";
import Subheader from "./components/subheader/Subheader";
import Search from "./components/Search/Search";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <StatusBar />
      <Header />
      <Subheader />
      <Search />
    </div>
  );
}

export default App;
