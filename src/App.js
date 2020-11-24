import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Invoice from "./components/purchase/Invoice";
import Stock from "./components/stock/Stock";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
        <div>

          <Header />

          <Switch>

            <Route exact path='/' component={Stock} />
            <Route path='/Invoice' component={Invoice} />
      


      


          </Switch>

          {/* <Footer /> */}
       
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
