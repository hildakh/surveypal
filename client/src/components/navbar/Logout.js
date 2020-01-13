import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
    borderColor: 'white',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: '5px',
    textTransform: "none",
    fontFamily: 'Baskerville',
    fontSize: 20,
    borderRadius: 5,
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
    <Button onClick={logout} variant="outlined" color="default" className={classes.button}>
      Logout
    </Button>)
}
