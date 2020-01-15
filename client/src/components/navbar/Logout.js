import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#677b00",
    borderColor: "white",
    color: "white",
    fontSize: 20,
    fontSize: '0.8rem',
    borderRadius: 5,
    fontFamily: "Muli"
  },
  dialogue: {
    textTransform: "none",
    fontFamily: "Muli"
  }
}));

export default function Logout(props) {
  const classes = useStyles();
  const fetchData = () => {
    axios.get('/api/logout')
      .then((response) => {
        props.logout()
      })
  }
  const logout = () => {
    fetchData();
  }
  return (
    <Button
    onClick={logout}
    className={classes.button}
    variant="outlined"
      >
      Logout
    </Button>)
}
