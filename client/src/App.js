import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppBar from './components/navbar/AppBar';
import Card from './components/users/Card';
import Expand from 'react-expand-animated';
import SurveyList from './components/users/SurveyList';
import Survey from './components/survey/Survey';
import CompSurvList from './components/users/CompSurvList';
import fetchSurveys from './helpers/fetchSurveys';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      session: null,
      userType: 0,
      user: {},
      surveyOpen: false,
      compSurvOpen: false,
      surveyList: [],
      completedSurveyList: []
    }
    this.status = 'NULL';
  }
  // fetchData = () => {
  //   if(this.state.user.userType === 1) {
  //     fetchSurveys()
  //   }

  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  };
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
  };
  login = (data) => {
    this.setState({ ...this.state, user: data.user, userType: data.user.user_type_id, session: data.session.user_id })
  }
  logout = () => {
    this.setState({ ...this.state, userType: 0 })
  }
  render() {
    return (
      <div className="App">
        <AppBar userType={this.state.userType} logout={this.logout} login={this.login} userName={this.state.user['first_name']} />
        {this.state.userType === 2 && (
          <div>
            <React.Fragment>
              <Card message={'Surveys'} counter={this.state.surveyList.length || 0} onClick={this.toggleFirst} />
              <Expand open={this.state.surveyOpen}>
                <SurveyList list={this.state.surveyList} />
              </Expand>
            </React.Fragment>
            <React.Fragment>
              <Card message={`Completed surveys`} counter={this.state.completedSurveyList.length || 0} onClick={this.toggleSecond} />
              <Expand open={this.state.compSurvOpen}>
                <CompSurvList list={this.state.completedSurveyList} />
              </Expand>
            </React.Fragment>
            <Survey />
          </div>
        )}
      </div>
    );
}
}

export default App;
