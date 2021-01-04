import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 900,
  },
});

function createData(name, initalQuantity, currentQuantity) {
  return { name, initalQuantity, currentQuantity };
}

const rows = [
  createData("Ancoats", 250, 18),
  createData("Atkinsons", 250, 150),
];

export function BeanTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Initial Quantity&nbsp;(g)</TableCell>
            <TableCell align="right">Current Quantity&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.initalQuantity}</TableCell>
              <TableCell align="right">{row.currentQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
