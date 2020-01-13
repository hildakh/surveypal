import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles( theme => ({
  table: {
    marginTop: 15,
    maxWidth: "50%",
    backgroundColor: "#E2F2F9",
    position: "relative",
    overflow: "auto",
    maxHeight: 200,
    margin: "0 auto",
    padding: 0,
    color: "#08648C",
    fontFamily: 'Muli'
  },
  listHead: {
    backgroundColor: "#7c4dff",
    padding: 0,
    fontFamily: 'Muli'
  },
  ul: {
    padding: 0,
    fontFamily: 'Muli'
  },
  tableCell: {
    fontFamily: 'Muli',
  }
}));

export default function SurveyorTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="caption table">
      {/* <caption></caption> */}
      <TableHead>
        <TableRow className={classes.listHead}>
          <TableCell className={classes.tableCell}>Surveyor</TableCell>
          <TableCell align="center" className={classes.tableCell}>Email Address</TableCell>
          {/* <TableCell align="center">End Date</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.list.map(item => (
          <TableRow key={item.first_name}>
            <TableCell component="th" scope="row" className={classes.tableCell}>
              {`${item.first_name} ${item.last_name}`}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>{item.email}</TableCell>
            {/* <TableCell align="center">{item.end_date}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
