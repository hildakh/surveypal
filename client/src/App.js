import React, { Component } from 'react';
import './App.css';
import AppBar from './components/navbar/AppBar';
import Card from './components/users/Card';
import Expand from 'react-expand-animated';
import SurveyList from './components/users/SurveyList';
// import CompSurvList from './components/users/CompSurvList';
// import fetchSurveyors from '../src/helpers/fetchSurveyors';
// import SurveyorList from './components/users/SurveyorList';
import SurveyTable from './components/admin/SurveyTable';
import SurveyorTable from './components/admin/SurveyorTable';

class App extends Component {

  constructor(props) {
    super(props);
    const token = JSON.parse(localStorage.getItem("token"));
    let currentUser = {};
    let user_type = 0;
    let survey_list = [];
    let surveyor_list = [];
    let team_list = [];
    if (token) {
      currentUser = token.user;
      user_type = currentUser.user_type_id;
      survey_list = token.surveys;
      surveyor_list = token.surveyors;
      team_list = token.teams;
    }

    this.state = {
      session: null,
      userType: user_type,
      user: currentUser,
      surveyOpen: false,
      compSurvOpen: false,
      surveyList: survey_list,
      adminSurveyList: false,
      completedSurveyList: [],
      surveyorListOpen: false,
      surveyorList: surveyor_list,
      teamListOpen: false,
      teamList: team_list,
    };
    this.status = "NULL";
  }

  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  };
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
  };
  login = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    this.setState({ ...this.state, user: token.user, userType: token.user.user_type_id, surveyList: token.surveys, surveyorList: token.surveyors, teamList: token.teams })
  }
  logout = () => {
    localStorage.clear();
    this.setState({ ...this.state, userType: 0, adminSurveyList: false });
  };
  loadSurveys = () => {
    this.setState({ ...this.state, adminSurveyList: true });
  };
  loadSurveyors = () => {
    this.setState({ ...this.state, surveyorListOpen: true});
  };
  loadTeams = () => {
    this.setState({ ...this.state, teamListOpen: true});
  }
  render() {
    return (
      <div className="App">
        <AppBar
          userType={this.state.userType}
          logout={this.logout}
          login={this.login}
          userName={this.state.user["first_name"]}
          loadSurveys={this.loadSurveys}
          loadSurveyors={this.loadSurveyors}
          loadTeams={this.loadTeams}
        />
        {this.state.userType === 2 && (
          <div>
            <React.Fragment>
              <Card
                message={"Surveys"}
                counter={this.state.surveyList.length || 0}
                onClick={this.toggleFirst}
              />
              <Expand open={this.state.surveyOpen}>
                <SurveyList list={this.state.surveyList} />
              </Expand>
            </React.Fragment>
          </div>
        )}
        {this.state.adminSurveyList && (
          <SurveyTable list={this.state.surveyList} />
        )}
        {this.state.surveyorListOpen && (
          <SurveyorTable list={this.state.surveyorList} />
        )}
        {this.state.teamListOpen && (
          <SurveyList list={this.state.teamList} />
        )}
      </div>
    );
  }
}
export default App;
