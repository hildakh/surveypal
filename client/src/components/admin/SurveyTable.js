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
    fontFamily: 'Muli',
    boxShadow: "3px 3px 10px #686868",
  },
  listHead: {
    backgroundColor: "#d4e157",
    padding: 0,
    typography:{
      fontFamily: 'Muli',
    },
  },
  tableCell: {
    fontFamily: "Muli",
    backgroundColor: "white",
  }
});

export default function SurveyTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="caption table">
      {/* <caption></caption> */}
      <TableHead>
        <TableRow className={classes.listHead}>
          <TableCell>Survey Title </TableCell>
          <TableCell align="center">Description</TableCell>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
