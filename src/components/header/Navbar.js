
import React from 'react';

import "../../App.css";
import "../../scss/style.scss";
import jkblogo from '../../Images/JKB-Housing-Pvt-Ltd-Logo-min.png';
import { ImMobile } from "react-icons/im";

import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { TiSocialYoutubeCircular } from "react-icons/ti";
// import { GrInstagram } from "react-icons/go";
// import { GrInstagram } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";

const Navbar = () => {
   
    return (

        <div>
         


<div className="HeaderParent">
    <div> <img src={jkblogo} style={{height: '100px'}} /> </div>
    <div className="navs">
                    <ul className="ulstle" >
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Join Ventures</li>
            <li>Media</li>
            <li>Buyers Guide</li>
            <li>Careers</li>
            <li>Contact Us</li>
        </ul>
    </div>
    <div className="reviewSction">
                    <div className="mob"> <ImMobile />     +91 97103 97104</div>
                    <div>   <FcGoogle />Review</div>
                   
                 
    </div>
    <div className="socialContact">
                    <SiFacebook className="fbicon" style={{ fontSize: 'xx-large', color: '#3b5998' }} />
                    <TiSocialYoutubeCircular className="yticon" style={{ fontSize: 'xxx-large', color:'#c2302b' }}/>
                    <GrInstagram className="insicon" style={{ fontSize: 'xx-large', color:'#db427b' }}/>
    </div>

</div>



        </div>


    );

}


export default Navbar;
