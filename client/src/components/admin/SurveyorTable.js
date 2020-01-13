import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";

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
  },
  listHead: {
    backgroundColor: "#7c4dff",
    padding: 0
  },
  ul: {
    backgroundColor: "#7c4dff",
    padding: 0
  },
}));

export default function SurveyorTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="caption table">
      {/* <caption></caption> */}
      <TableHead>
        <TableRow className={classes.listHead}>
          <TableCell>Surveyor</TableCell>
          <TableCell align="center">Email Address</TableCell>
          {/* <TableCell align="center">End Date</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.list.map(item => (
          <TableRow key={item.first_name}>
            <TableCell component="th" scope="row">
              {`${item.first_name} ${item.last_name}`}
            </TableCell>
            <TableCell align="center">{item.email}</TableCell>
            {/* <TableCell align="center">{item.end_date}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
