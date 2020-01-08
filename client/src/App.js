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
    this.state = {
      userType: 0,
      user: {},
      surveyOpen: false,
      compSurvOpen: false,
      surveyList: [],
      completedSurveyList: []
    }
    this.status = 'NULL';
  }
  fetchData = () => {
    axios.get(`/api/surveys?user_id=${this.state.user.id}`)
      .then((response) => {
        const completed = response.data.survey.filter(element => element.end_date);
        this.setState({
          ...this.state,
          surveyList: response.data.survey,
          completedSurveyList: completed
        });
      })
  }

  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  }; 1
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
  };
  login = (user) => {
    this.setState({ ...this.state, user: user, userType: user.user_type_id })
    this.fetchData();
  }
  render() {
    return (
      <div className="App">
        <AppBar userType={this.state.userType} login={this.login} userName={this.state.user['first_name']} />
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
          </div>
        )}
      </div>
    );
  }
}

export default App;
