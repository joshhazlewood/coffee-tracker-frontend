import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { format } from "date-fns";
import React from "react";

export default function BeanTable({ beans }) {
  const formatDate = (date) => {
    return format(date, "d/MM/yy");
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="current beans table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Remaining&nbsp;(g)</TableCell>
            <TableCell align="center">Bag size&nbsp;(g)</TableCell>
            <TableCell align="center">Roasted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beans.map((bean) => (
            <TableRow key={bean.name}>
              <TableCell component="th" scope="row">
                {bean.name}
              </TableCell>
              <TableCell align="center">{bean.currentQuantity}</TableCell>
              <TableCell align="center">{bean.initialQuantity}</TableCell>
              <TableCell align="center">{formatDate(bean.roastDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
