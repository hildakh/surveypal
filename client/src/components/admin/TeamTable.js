import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles(theme => ({
  table: {
    marginTop: "2%",
    maxWidth: "70%",
    backgroundColor: "#E2F2F9",
    position: "relative",
    overflow: "auto",
    maxHeight: 200,
    margin: "0 auto",
    padding: 0,
    fontFamily: 'Muli',
    boxShadow: "3px 3px 10px #686868",
  },
  listHead: {
    backgroundColor: "#e0aa34",
    padding: 0,
  },
  tableCell: {
    fontFamily: "Muli",
    backgroundColor: "white",
  },
  button: {
    margin: theme.spacing(1),
    background: "#e0aa34",
    borderColor: "white",
    color: "black",
    fontSize: 20,
    fontSize: '1rem',
    borderRadius: 5,
    fontFamily: "Muli",
    textTransform: 'none',
    cursor: 'pointer',
    marginTop: '2%',
  }
}));
export default function TeamTable(props) {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        New Team
      </Button>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption></caption> */}
        <TableHead>
          <TableRow className={classes.listHead}>
            <TableCell>
              <Typography style={{ fontFamily: 'Muli' }}>
                Team Title
            </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography style={{ fontFamily: 'Muli' }}>
                Description
            </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography style={{ fontFamily: 'Muli' }}>
                Purpose
            </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map(item => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row" className={classes.tableCell}>
                {item.name}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>{item.description}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{item.purpose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
