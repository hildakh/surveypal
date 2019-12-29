import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button to load data!'
  //   }
  // }

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
      <div className="App">
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
          <img src="./favicon.png" width="70" height="70" class="logo d-inline-block align-top" alt="logo" />
          <a routerLink="/" class="navbar-brand app-name" href="#">SurveyPal</a>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <h6>
                <a class="nav-link" href="contact">Login</a>
              </h6>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
