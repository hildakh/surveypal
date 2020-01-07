import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppBar from './components/navbar/AppBar';
import Card from './components/users/Card';
import Expand from 'react-expand-animated';
import SurveyList from './components/users/SurveyList';
import Survey from './components/survey/Survey';
import CompSurvList from './components/users/CompSurvList';

class App extends Component {
  constructor(props) {
    super(props)
    const cardMessages = ['Surveys', `Today's completed surveys`]
    this.state = {
      message: cardMessages,
      surveyOpen: false,
      compSurvOpen: false,
      surveyList: ['Vancouver 2019 Sheltered Survey', 'Toronto 2019 Sheltered Survey', 'Vancouver homeless count 2018'],
      completedSurveyList: [{ title: 'Vancouver homeless count 2018', date: 'Dec 9, 2019' }]
    }
  }
  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  };
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
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
          <Card message={this.state.message[0]} counter={5} onClick={this.toggleFirst} />
          <Expand open={this.state.surveyOpen}>
            <SurveyList list={this.state.surveyList} />
          </Expand>
        </React.Fragment>
        <React.Fragment>
          <Card message={this.state.message[1]} counter={10} onClick={this.toggleSecond} />
          <Expand open={this.state.compSurvOpen}>
            <CompSurvList list={this.state.completedSurveyList} />
          </Expand>
        </React.Fragment>
        <Survey />
      </div>
    );
  }
}

export default App;
