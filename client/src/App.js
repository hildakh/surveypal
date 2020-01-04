import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppBar from './components/navbar/AppBar';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: 'Click the button to load data!',
      latitude: null,
      longitude: null,
      userAddress: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert('Bummer!');
    }
  }

  getCoordinates(bing) {
    console.log(bing)
    this.setState({
      latitude: bing.coords.latitude,
      longitude: bing.coords.longitude
    })
  }
  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data) // The entire response from the Rails API

  //       console.log(response.data.message) // Just the message
  //       this.setState({
  //         message: response.data.message
  //       });
  //     })
  // }

  render() {
    return (
      // <AppBar />
      // <div className="App">
      //   <h1>{this.state.message}</h1>
      //   <button onClick={this.fetchData} >
      //     Fetch Data
      //   </button>
      // </div>
      <div>
         <AppBar />
         <h2>Geo Example</h2>
         <button onClick={this.getLocation}>Get coordinates</button>
            <p>Latitude: {this.state.latitude}</p>
            <p>Longitude: {this.state.longitude}</p>
            <h4>Google Maps Reverse Geocoding</h4>
            <p>Address: {this.state.userAddress}</p>
      </div>
    );
  }
}

export default App;
