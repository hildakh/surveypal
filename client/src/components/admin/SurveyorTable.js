import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles( theme => ({
  table: {
    marginTop: 30,
    maxWidth: "50%",
    position: "relative",
    overflow: "auto",
    maxHeight: 200,
    margin: "0 auto",
    padding: 0,
    borderRadius: '5px',
    color: "#d4e157",
    fontFamily: 'Muli',
    border: '2px solid #677b00'

    // borderWidth: 0.5,
    // borderColor: "#afb42b"
  },
  listHead: {
    backgroundColor: "#d4e157",
    padding: 0,
    fontFamily: 'Muli'
  },
  ul: {
    padding: 0,
    fontFamily: 'Muli',
    // borderColor: "#afb42b",
  },
  tableCell: {
    fontFamily: 'Muli',
    // borderColor: "#afb42b"
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
      <TableBody className={classes.ul} >
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
