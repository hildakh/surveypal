import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    marginTop: 30,
    maxWidth: "70%",
    position: "relative",
    overflow: "auto",
    maxHeight: 200,
    margin: "0 auto",
    padding: 0,
    color: "#08648C",
    fontFamily: 'Muli',
    border: '2px solid #677b00'
  },
  listHead: {
    backgroundColor: "#d4e157",
    padding: 0,
    fontFamily: 'Muli'
  },
  ul: {
    // backgroundColor: "#7c4dff",
    padding: 0,
    fontFamily: 'Muli'
  },
  tableCell: {
    fontFamily: 'Muli',
  }
});

export default function SurveyTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="caption table">
      {/* <caption></caption> */}
      <TableHead>
        <TableRow className={classes.listHead}>
          <TableCell className={classes.tableCell}>Survey Title </TableCell>
          <TableCell align="center" className={classes.tableCell}>Description</TableCell>
          {/* <TableCell align="center">End Date</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.list.map(item => (
          <TableRow key={item.name}>
            <TableCell component="th" scope="row" className={classes.tableCell}>
              {item.name}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>{item.description}</TableCell>
            {/* <TableCell align="center">{item.end_date}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
