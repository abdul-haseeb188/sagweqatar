import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../App.css';

//import { GrFormSearch } from "react-icons/gi";
 //import { GrFormSearch } from "react-icons/go";
 import { GrFormSearch } from "react-icons/gr";



const Searchbar = () => {
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
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Fish And Poultry</MenuItem>
                    <MenuItem value={20}>Health and Beayty</MenuItem>
                    <MenuItem value={30}>Bakery</MenuItem>
                </Select>
            </FormControl>
         






                <input type="search" name="search" className="search" placeholder="Search Products...." />
           

              
                <GrFormSearch className="srchiCon" />
             

        </div>
    );
}

export default Searchbar;