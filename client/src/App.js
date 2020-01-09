import React, { Component } from "react";
import "./App.css";
import AppBar from "./components/navbar/AppBar";
import Card from "./components/users/Card";
import Expand from "react-expand-animated";
import SurveyList from "./components/users/SurveyList";
import CompSurvList from "./components/users/CompSurvList";
import fetchSurveys from "./helpers/fetchSurveys";
// import SurveyForm from "./components/survey/SurveyForm";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import { ListItemText } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    const token = JSON.parse(localStorage.getItem("token"));
    let currentUser = {};
    let user_type = 0;
    if (token) {
      currentUser = token;
      user_type = token.user_type_id;
    }
    this.state = {
      session: null,
      userType: user_type,
      user: currentUser,
      surveyOpen: false,
      compSurvOpen: false,
      surveyList: [],
      adminSurveyList: false,
      completedSurveyList: []
    };

    this.status = "NULL";
  }
  componentDidMount = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    this.state.surveyList = fetchSurveys(token);
  };
  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  };
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
  };
  login = (data) => {
    this.setState({ ...this.state, surveyList: surveys, user: data.user, userType: data.user.user_type_id, session: data.session.user_id })
  }
  logout = () => {
    localStorage.clear();
    this.setState({ ...this.state, userType: 0 });
  };
  loadSurveys = () => {
    this.setState({ ...this.state, adminSurveyList: true });
  };
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
            </div>
        )}
        {this.state.adminSurveyList && (<SurveyList list={this.state.surveyList}/>
            )}
      </div>
    );
  }
}

export default App;
