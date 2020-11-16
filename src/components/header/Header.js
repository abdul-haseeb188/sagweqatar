import React from 'react';
import DesiMarketLogo from '../../Images/kojE409403.jpg'; 
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';


import Grid from '@material-ui/core/Grid';


import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const iconsstyl={
    fontSize: '40px',
    padding: '20px',
}
const Header = () => {
   
    return (

        <div>
         

            <Grid container spacing={3}>
               
                <Grid item xs={3}>
                    <img src={DesiMarketLogo} />
                </Grid>


                <Grid item xs={6}>
                    Search Bar Will Show Here
                </Grid>


                <Grid item xs={3}>

                    <Tooltip title="WishList" placement="bottom">
                        <Button> <FavoriteSharpIcon style={iconsstyl} /></Button>
                    </Tooltip>
                    <Tooltip title="Add To Cart" placement="bottom">
                        <Button>  <ShoppingCartSharpIcon style={iconsstyl} /></Button>
                    </Tooltip>
                   
                </Grid>
            </Grid>
        </div>


    );

}

export default Header;


