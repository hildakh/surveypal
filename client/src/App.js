import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppBar from './components/navbar/AppBar';
import Card from './components/users/Card';
import Expand from 'react-expand-animated';
import SurveyList from './components/users/SurveyList';
import CompSurvList from './components/users/CompSurvList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userType: 'PUBLIC',
      user: {
        email: ""
      },
      surveyOpen: false,
      compSurvOpen: false,
      surveyList: ['Vancouver 2019 Sheltered Survey', 'Toronto 2019 Sheltered Survey', 'Vancouver homeless count 2018'],
      completedSurveyList: [{ title: 'Vancouver homeless count 2018', date: 'Dec 9, 2019' }]
    }
  }
  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  }; 1
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
  };

  fetchData = (email, password) => {
    // console.log(email, password);
    axios.post('/api/login', { email: email }) // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response.data) // The entire response from the Rails API

        // console.log(response.data) // Just the message

        console.log(response.data)
        // this.setState({
        //   users: response.data.users
        // });
      })
  }

  save = (email, password) => {
    // do sth 


  }

  render() {
    return (

      <div className="App">
        <AppBar userType={this.state.userType} onSave={this.fetchData} />
        {this.state.userType === 'USER' && (
          <div>
            <React.Fragment>
              <Card message={'Surveys'} counter={5} onClick={this.toggleFirst} />
              <Expand open={this.state.surveyOpen}>
                <SurveyList list={this.state.surveyList} />
              </Expand>
            </React.Fragment>
            <React.Fragment>
              <Card message={`Today's completed surveys`} counter={10} onClick={this.toggleSecond} />
              <Expand open={this.state.compSurvOpen}>
                <CompSurvList list={this.state.completedSurveyList} />
              </Expand>
            </React.Fragment>
          </div>
        )}

      </div>
    );
  }
}

export default App;
