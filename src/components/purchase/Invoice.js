import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../../App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Invoice = () => {
  return (
    <div>
      <h2 style={{ color: 'red', textDecoration: 'underline' }}>MEDICINE INVOICE</h2>


      <Grid container >
        <Grid item xs={12} sm={12} md={2} lg={2} >

        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}  className="invoiceform">
        

<div>
            <select className="select" >
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
</div>






<div>
          
            <TextField
              id="filled-number"
              label="Quantity Please"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          
</div>





          <div>

            <TextField
              id="filled-number"
              label="Please Enter Price"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />

          </div>






          <div>

            <h4 style={{ color:'#3f51b5'}} >Your Total Discount is : 5%</h4>

          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}  >

        </Grid>
      </Grid>


    </div>
  );
}

export default Invoice;