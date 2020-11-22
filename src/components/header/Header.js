import React from "react";
import "./header.scss";
import img from "../../images/JKB.png"
import {ImMobile } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import {FaInstagramSquare} from "react-icons/fa";
const Header = () => {
    return(
       
            <header className ="header">
            <img src={img} className="jkb" alt= "logo" />
            <ul className="menu">
                <li>Home</li>
                <li>About Us</li>
                <li>Projects</li>
                <li>Joint Ventures</li>
                <li>Media</li>
                <li>Buyer Guide</li>
                <li>Carrer</li>
                <li>Contacts</li>
            </ul>
            <ul className="icons">
                <li>
                <ImMobile size="28" />
                <span>+923361105905</span>
                </li>
            <li>
            <FcGoogle size="28"/>
            <span>Reviwe</span>
            </li>
            </ul>

            <ul className="social_icons">
                <SiFacebook  size="28" color="blue"/>
                <TiSocialYoutubeCircular  size="35" color="#C4302B"/>
                <FaInstagramSquare  size="28" color="red"/>
            </ul>

            </header>
           
           
      
    );
};
export default Header;



