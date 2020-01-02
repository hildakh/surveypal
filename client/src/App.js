import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppBar from './components/navbar/AppBar';
import SideDrawer from './components/admin-dashboard/SideDrawer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API

        console.log(response.data.message) // Just the message
        this.setState({
          message: response.data.message
        });
      })
  }

  render() {
    return (
      <div>
        <AppBar />
        <SideDrawer />
       {/* // <div className="App">
      // //   <h1>{this.state.message}</h1>
      // //   <button onClick={this.fetchData} >
      // //     Fetch Data
      // //   </button>
      // // </div> */}

      </div>
    );
  }
}

export default App;
