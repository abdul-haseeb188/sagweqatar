
import React from 'react';
import NewImg from '../../Images/kojE409403.jpg'; 
import Grid from '@material-ui/core/Grid';
import Searchbar from '../SearchBar/Search';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { MdFavorite } from "react-icons/md";
import "../../App.css";
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
         

            <Grid container >
               
                <Grid item xs={3}>
                    <img src={NewImg} style={{borderRadius:'50%'}} />
                </Grid>


                <Grid item xs={6} style={iconsstyl}>
                    <Searchbar/>
                </Grid>


                <Grid item xs={3} style={iconsstyl3}>

                  


                  <Grid container>
                      <Grid item xs={4} style={{textAlign:'right'}}>
                            <MdFavorite size='50px' />

                            <Badge anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                                className="lovcount"
                                color="secondary" badgeContent={5} showZero>

                            </Badge>

                      </Grid>
                        <Grid item xs={4} >

                            <FaShoppingBag size='40px' style={{ marginTop: '5px' }} />

                            <Badge anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                                className="shopcount"
                                color="secondary" badgeContent={15} showZero>

                            </Badge>
                        </Grid>
                        <Grid item xs={4} style={{textAlign:'left'}}>
                          
                            <font style={{ fontWeight: 'bold' }}>   CART</font>  <p>ITEM</p>

                           
                        </Grid>
                  </Grid>
                    {/* <MdFavorite size='50px' />

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
                
                    </Badge> */}

                </Grid>
            </Grid>
    
    
    





        </div>


    );

}


export default Header;
