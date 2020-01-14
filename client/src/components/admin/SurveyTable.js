import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    marginTop: "10%",
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
          <TableCell align="center">
            <Typography style={{fontFamily: 'Muli'}}>
            Survey Title
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography style={{fontFamily: 'Muli'}}>
            Description
            </Typography>
            </TableCell>
          {/* <TableCell align="center">End Date</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.list.map(item => (
          <TableRow key={item.name}>
            <TableCell align="center" component="th" scope="row" className={classes.tableCell}>
              {item.name}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>{item.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
