import Button from '@material-ui/core/Button';
import React from 'react';
import axios from 'axios';

export default function Logout(props) {
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
    // variant="contained"
    // color="#677b00"
    style={{
      marginLeft: "0.5%",
      marginTop: "2%",
      marginBottom: "2%",
      marginRight: '0.5%',
      backgroundColor: 'trasparent',
      // color: "white",
      borderColor: "white",
      borderWidth: 2,
      fontFamily: "Muli",
      fontSize: '0.8rem',
      // paddingLeft: '5%',
      // paddingRight: '5%',
      }}>
      Logout
    </Button>)
}
