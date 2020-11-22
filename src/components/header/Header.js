import React from "react";
import "./headre.css";
import Grid from '@material-ui/core/Grid';
import imglogo from '../../images/haider.jpg';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Search from "../search/Search";
import { BsFillHeartFill } from "react-icons/bs";
const Header = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <ul>
        <li>Welocme</li>
        <li>Login/registration</li>
        <li>Vendor Registration</li>
      </ul>
      <Grid container>
        <Grid item md={4}>
        <img src={imglogo} />

        </Grid>

        <Grid item md={4}>
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <input type="text" id="lname" />
      </Grid>
        <Grid item md={4}>

        </Grid>
      </Grid>

    </div>
    


  );
};

export default Header;
