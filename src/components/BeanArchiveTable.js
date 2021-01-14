import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { format } from "date-fns";
import React from "react";

export default function BeanArchiveTable({archivedBeans}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="beans-archive-able">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Bag size&nbsp;(g)</TableCell>
            <TableCell align="center">Roasted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {archivedBeans.map((beans) => (
            <TableRow key={beans.name}>
              <TableCell component="th" scope="row">
                {beans.name}
              </TableCell>
              <TableCell align="center">{beans.initialQuantity}</TableCell>
              <TableCell align="center">{format(beans.roastDate, "d/MM/yy")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}