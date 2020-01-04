import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppBar from './components/navbar/AppBar';
import Card from './components/users/Card';




class App extends Component {
  constructor(props) {
    super(props)
    const cardMessages = ['Surveys', `Today's completed surveys`]
    this.state = {
      message: cardMessages
    }
    console.log(this.state.message[0])
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
        <Card message={this.state.message[0]} counter={5} />
        <Card message={this.state.message[1]} counter={10} />
      </div>
    );
  }
}

export default App;
