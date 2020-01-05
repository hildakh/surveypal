import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppBar from './components/navbar/AppBar';
import Card from './components/users/Card';
import Expand from 'react-expand-animated';

class App extends Component {
  constructor(props) {
    super(props)
    const cardMessages = ['Surveys', `Today's completed surveys`]
    this.state = {
      message: cardMessages,
      open: false,

    }

  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

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
        <React.Fragment>
          <Card message={this.state.message[0]} counter={5} onClick={this.toggle} />
          <Expand open={this.state.open}>
            <div style={{ width: '300px', height: '400px', backgroundColor: '#56B4FD', margin: '0 auto' }}></div>
          </Expand>
        </React.Fragment>
        <Card message={this.state.message[1]} counter={10} onClick={this.toggle} />
      </div>
    );
  }
}

export default App;
