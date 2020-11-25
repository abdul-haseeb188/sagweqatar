import React from "react";
import "./header.scss";
import img from "../../images/daraz.png"
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../images/daraz-app.png";
import { Button, Grid } from "@material-ui/core";
import { GoSearch } from "react-icons/go";


const Header = () => {

    
    return(
       <header className="header">

           <div className="u-header">
           
               <ul className="link-bar">
                   <li ><a href="https://www.w3schools.com/" target="_blank">SAVE MORE ON DARAZ</a> </li>
                   <li><a href="https://www.youtube.com/" target="_blank">DARAZ AFFILIATE PROGRAMM</a></li>
                   <li><a href="https://www.w3schools.com/" target="_blank">SELL ON DARAZ</a></li>
                   <li><a href="https://www.w3schools.com/" target="_blank">CUSTOMER CARE</a></li>
                   <li><a href="https://www.w3schools.com/" target="_blank">TAKE MY ORDER</a></li>
                   <li><a href="https://www.w3schools.com/" target="_blank">LOGIN</a></li>
                   <li><a href="https://www.w3schools.com/" target="_blank">SIGNUP</a></li>
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
                    <li><a href="https://www.w3schools.com/" target="_blank">DarazMall</a></li>
                    <li><a href="https://www.w3schools.com/" target="_blank">dMart</a></li>
                    <li><a href="https://www.w3schools.com/" target="_blank">Fashion & style</a></li>
                    <li><a href="https://www.w3schools.com/" target="_blank">Global Collection</a></li>
                    <li><a href="https://www.w3schools.com/" target="_blank">Digital Sahulat</a></li>
                    </ul>
                    </di>

            </div>
            <Grid className="container">
                <grid >

                </grid>

            </Grid>
            </header>
           
           
      
    );
};
export default Header;



