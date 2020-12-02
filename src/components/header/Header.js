import React from "react";
import "./header.scss";
import DarazMall from "./DarazMall";
import dMart from "./dMart";
import digital from "./digital";
import Global from "./Global";
import Fashion from "./Fashion";
import img from "../../images/daraz.png";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../images/daraz-app.png";
import { Button, Grid } from "@material-ui/core";
import { GoSearch } from "react-icons/go";
import { FaDraft2Digital } from "react-icons/fa";
import {AiOutlineGlobal  } from "react-icons/ai";
import {MdAirplanemodeActive   } from "react-icons/md";
import { BiArch } from "react-icons/bi";
import {BiBasket} from "react-icons/bi";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



const Header = () => {

    
    return(
        <Router>
        <div>
       <header className="header">

           <div className="u-header">
           
               <ul className="link-bar">
                   <li >SAVE MORE ON DARAZ</li>
                   <li>DARAZ AFFILIATE PROGRAMM</li>
                   <li>SELL ON DARAZ</li>
                   <li>CUSTOMER CARE</li>
                   <li>TAKE MY ORDER</li>
                   <li>LOGIN </li>
                   <li> SIGNUP </li>
               </ul>

               </div>
               <div className ="logo">
            
            <img src={img} className="daraz" alt= "logo" />
            <div className="searchbar">
            <input type="text" placeholder="Search in daraz..."   className="search"></input>
            <Button className="btn">
            <GoSearch  size="20" color="white"/>
            </Button>
            <FiShoppingCart size="30" className="icon"/>
            </div>
           
          

            <img src={logo} className="daraz-app" alt= "logo" />
            
            </div>
            <div className="l-header">
                <div>
                    <select className="drp-down">
                        <option>Categories</option>
                        <option>Electroonics devices</option>
                        <option>haider</option>
                        <option>shirt</option>
                        <option>ali</option>
                        <option>abbas</option>
                        <option>qasim</option>
                        <option>haseeb</option>
                    </select>
                    </div>
                    <di>
                    <ul className="menu">

                   <a>
                    <li><BiArch size="20" />  </li>
                    <Link to="/DarazMall">DarazMall</Link>
                   {/* <span>DarazMall</span>  */}
                   </a>

                   <a >
                    <li>  <BiBasket size="20"/></li>
                    <Link to="/dMart">dMart</Link>
                   {/* <span> dMart</span> */}
                   </a>

                   <a>
                    <li><AiOutlineGlobal size="20"/></li>
                    <Link to="/Fashion & style">Fashion & style</Link>
                   {/* <span> Fashion & style</span> */}
                   </a>

                   <a >
                    <li><MdAirplanemodeActive size="20" /></li>
                    <Link to="/Global Collection">Global Collection</Link>
                   {/* <span> Global Collection</span> */}
                   </a>

                   <a >
                    <li><FaDraft2Digital size="20" /></li>
                    <Link to="/Digital Sahulat">Digital Sahulat</Link>
                   {/* <span> Digital Sahulat </span> */}
                   </a>
                   
                    </ul>
                    </di>

            </div>
            
            
            </header>
            
           
            </div>

             <Route exact path="/DarazMall" component={DarazMall} />
             <Route exact path="/dMart" component={dMart} />
             <Route exact path="/Fashion & style" component={Fashion} />
             <Route exact path="/Global Collection" component={Global} />
             <Route exact path="/Digital Sahulat" component={digital} />
             </Router>
    );
};
export default Header;




