import React from "react";
import "./header.scss";
import img from "../../images/daraz.png"
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../images/daraz-app.png";
import { Button } from "@material-ui/core";
import { GoSearch } from "react-icons/go";


const Header = () => {

    
    return(
       <header className="header">

           <div className="u-header">
           
               <ul className="link-bar">
                   <li>SAVE MORE ON DARAZ</li>
                   <li>DARAZ AFFILIATE PROGRAMM</li>
                   <li>SELL ON DARAZ</li>
                   <li>CUSTOMER CARE</li>
                   <li>TAKE MY ORDER</li>
                   <li>LOGIN</li>
                   <li>SIGNUP</li>
               </ul>

               </div>
               <div className ="logo">
            
            <img src={img} className="daraz" alt= "logo" />
            <ul>
            <input type="text" placeholder="Search in daraz..."   className="search"></input>
            <Button className="btn">
            <GoSearch  size="20" color="white"/>
            </Button>
            </ul>
           
            <FiShoppingCart size="30"/>

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
                    <li>DarazMall</li>
                    <li>dMart</li>
                    <li>Fashion & style</li>
                    <li>Global Collection</li>
                    <li>Digital Sahulat</li>
                    </ul>
                    </di>

            </div>
            </header>
           
           
      
    );
};
export default Header;



