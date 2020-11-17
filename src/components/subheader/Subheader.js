import React from 'react';
import Grid from '@material-ui/core/Grid';
const Subheader = ()=> {
    
    return (

        <div>
            <Grid container style={{background: '#145082', color: 'white'}}>
              <Grid item xs={6}>
                  <p>ALL CATEGORIES</p>
              </Grid>
                <Grid item xs={6}> <p>Locate Me</p></Grid>
            </Grid>
        </div>


);

}

export default Subheader;


