import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppBar from './components/navbar/AppBar';
// import SideDrawer from './components/admin-dashboard/SideDrawer';
// import { AppBar } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  fetchData = () => {

    axios.get('/api/login') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response.data) // The entire response from the Rails API

        console.log(response) // Just the message
        // this.setState({
        //   users: response.data.users
        // });
      })
  }

  render() {
    return (

      <div className="App">
        <AppBar />
      </div>
    );
  }
}

export default App;
