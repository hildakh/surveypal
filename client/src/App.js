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
      userType: 0,
      user: {},
      surveyOpen: false,
      compSurvOpen: false,
      surveyList: ['Vancouver 2019 Sheltered Survey', 'Toronto 2019 Sheltered Survey', 'Vancouver homeless count 2018'],
      completedSurveyList: [{ title: 'Vancouver homeless count 2018', date: 'Dec 9, 2019' }]
    }
    this.status = 'NULL';

  }

  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  }; 1
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
  };
  login = (user) => {
    this.setState({ ...this.state, user: user, userType: user.user_type_id })
    console.log(this.state.user);
  }

  render() {
    return (
      <div className="App">
        <AppBar userType={this.state.userType} login={this.login} userName={this.state.user['first_name']} />
        {this.state.userType === 2 && (
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
