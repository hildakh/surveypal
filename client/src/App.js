import React, { Component } from 'react';
import './App.css';
import "animate.css/animate.min.css";
import AppBar from './components/navbar/AppBar';
import Card from './components/users/Card';
import Expand from 'react-expand-animated';
import SurveyList from './components/users/SurveyList';
import SurveyTable from './components/admin/SurveyTable';
import SurveyorTable from './components/admin/SurveyorTable';
import TeamTable from './components/admin/TeamTable';
import SurveyForm from './components/survey/SurveyForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainPicture from './components/home/MainPicture';
import Article from './components/home/Article';
import Graph from './components/home/Graph';

AOS.init();

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
      surveyList: survey_list,
      adminSurveyList: false,
      surveyorListOpen: false,
      surveyorList: surveyor_list,
      teamListOpen: false,
      teamList: team_list,
      preview: false,
      card: true,
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
    this.setState({
      ...this.state,
      user: token.user,
      userType: token.user.user_type_id,
      surveyList: token.surveys,
      surveyorList: token.surveyors,
      teamList: token.teams
    })
  }
  logout = () => {
    localStorage.clear();
    this.setState({ ...this.state, userType: 0, adminSurveyList: false, surveyorListOpen: false, teamListOpen: false });
  };
  loadSurveys = () => {
    this.setState({ ...this.state, adminSurveyList: true, surveyorListOpen: false, teamListOpen: false });
  };
  loadSurveyors = () => {
    this.setState({ ...this.state, surveyorListOpen: true, adminSurveyList: false, teamListOpen: false });
  };
  loadTeams = () => {
    this.setState({ ...this.state, teamListOpen: true, adminSurveyList: false, surveyorListOpen: false });
  }
  loadPreview = () => {
    this.setState({ ...this.state, preview: true, card: false })
  }
  closePreview = () => {
    this.setState({ ...this.state, preview: false, card: true, surveyOpen: false })
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
            {this.state.card && <React.Fragment>
              <Card
                message={"Surveys"}
                counter={this.state.surveyList.length || 0}
                onClick={this.toggleFirst}
              />
              <Expand open={this.state.surveyOpen}>
                <SurveyList list={this.state.surveyList} onClick={this.loadPreview} />
              </Expand>
            </React.Fragment>}
            {this.state.preview && <SurveyForm closePreview={this.closePreview} />}
          </div>
        )}
        {this.state.userType === 0 && (
          <div>
            <MainPicture />
            <Article />
            <Graph />
          </div>
        )}

        {this.state.adminSurveyList && (
          <SurveyTable list={this.state.surveyList} />)}
        {this.state.surveyorListOpen && (
          <SurveyorTable list={this.state.surveyorList} />)}
        {this.state.teamListOpen && (
          <TeamTable list={this.state.teamList} />)}
      </div >
    );
  }
}
export default App;
