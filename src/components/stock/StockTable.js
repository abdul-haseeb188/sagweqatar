import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
const Stocktable = () => {




    return (
        <div>
      




            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Purchased Price</StyledTableCell>
                            <StyledTableCell align="right">Minimum</StyledTableCell>
                            <StyledTableCell align="right">Selling Price</StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    Pan40
                                </StyledTableCell>
                                <StyledTableCell align="right">80</StyledTableCell>
                                <StyledTableCell align="right">95</StyledTableCell>
                                <StyledTableCell align="right">100</StyledTableCell>
                                <StyledTableCell align="right">40</StyledTableCell>
                            <StyledTableCell align="right"><MdModeEdit size='20' />  <RiDeleteBin3Fill size='20' /> </StyledTableCell>
                            </StyledTableRow>

                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Pan40
                                </StyledTableCell>
                            <StyledTableCell align="right">80</StyledTableCell>
                            <StyledTableCell align="right">95</StyledTableCell>
                            <StyledTableCell align="right">100</StyledTableCell>
                            <StyledTableCell align="right">40</StyledTableCell>
                            <StyledTableCell align="right"><MdModeEdit size='20' />  <RiDeleteBin3Fill size='20' /> </StyledTableCell>
                        </StyledTableRow>


                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Pan40
                                </StyledTableCell>
                            <StyledTableCell align="right">80</StyledTableCell>
                            <StyledTableCell align="right">95</StyledTableCell>
                            <StyledTableCell align="right">100</StyledTableCell>
                            <StyledTableCell align="right">40</StyledTableCell>
                            <StyledTableCell align="right"><MdModeEdit size='20' />  <RiDeleteBin3Fill size='20' /> </StyledTableCell>
                        </StyledTableRow>
                     

                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Pan40
                                </StyledTableCell>
                            <StyledTableCell align="right">80</StyledTableCell>
                            <StyledTableCell align="right">95</StyledTableCell>
                            <StyledTableCell align="right">100</StyledTableCell>
                            <StyledTableCell align="right">40</StyledTableCell>
                            <StyledTableCell align="right"><MdModeEdit size='20' />  <RiDeleteBin3Fill size='20' /> </StyledTableCell>
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Stocktable;