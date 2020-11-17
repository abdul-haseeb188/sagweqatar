import React from 'react';
import DesiMarketLogo from '../../Images/kojE409403.jpg'; 
import Grid from '@material-ui/core/Grid';
import Searchbar from '../SearchBar/Search';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { MdFavorite } from "react-icons/md";

// import { FaShoppingBag } from "react-icons/fi";
//import { FaShoppingBag } from "react-icons/fc";
import { FaShoppingBag } from "react-icons/fa";
const iconsstyl={
    fontSize: '40px',
    padding: '20px',
}
const iconsstyl3={
    paddingTop: '35px',
}

const Header = () => {
   
    return (

        <div>
         

            <Grid container spacing={3}>
               
                <Grid item xs={3}>
                    <img src={DesiMarketLogo} />
                </Grid>


                <Grid item xs={6} style={iconsstyl}>
                    <Searchbar/>
                </Grid>


                <Grid item xs={3} style={iconsstyl3}>

                  
                    <MdFavorite size='50px' />

                    <Badge anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }} 
                    className="count"
                    color="secondary" badgeContent={5} showZero>
                       
                    </Badge>




                    <FaShoppingBag size='40px' style={{marginTop: '20px'}} />

                    <Badge anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                        className="count"
                        color="secondary" badgeContent={5} showZero>
                         
                    </Badge>
                    <Badge>
                    <p  >CART  ITEM</p>
                
                    </Badge>

                </Grid>
            </Grid>
        </div>


    );

}

export default Header;


