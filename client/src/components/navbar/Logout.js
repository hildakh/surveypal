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
    <Button onClick={logout} variant="outlined" color="default" style={{ marginLeft: '10px', marginTop: '5px',marginBottom: '5px', color: 'white', borderColor: 'white', textTransform: "none", fontFamily: 'Baskerville' }}>
      Logout
    </Button>)
}
