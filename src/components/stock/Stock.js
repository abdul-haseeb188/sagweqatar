import React from 'react';

import Stocktable from './StockTable';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const Stock = () => {



    
    return (
        <div>
         

            <h2 style={{ color: 'red', textDecoration: 'underline'  }}>MEDICINE STOCK</h2>

         
            <Grid container >
                <Grid  item xs={12} sm={12} md={2} lg={2} >
               
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} >
                    <Stocktable />
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2}  >
                  
                </Grid>
            </Grid>

               </div>
    );
}

export default Stock;