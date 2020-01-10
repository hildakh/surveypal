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
import fetchSurveyors from '../src/helpers/fetchSurveyors';
import SurveyorList from './components/users/SurveyorList';

class App extends Component {
  // _isMounted = false;
  // _isLoading = true;

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
      completedSurveyList: [],
      surveyorListOpen: false,
      surveyorList: []
    };

    this.status = "NULL";
  }
  componentDidMount = () => {
    // this._isMounted = true;
    const token = JSON.parse(localStorage.getItem("token"));
    fetchSurveys(token).then( (surveys) => {
      console.log(surveys);
      // this._isLoading = false;
      this.setState({ ...this.state, surveyList: surveys})

      //
      //   const surveyors = fetchSurveyors();
      //   this.setState({ ...this.state, surveyList: surveys, surveyorList: surveyors});
      //   } else if (this._isMounted) {
      //   }
    }) // loader = false, setState);
    if (token.user_type_id === 1) {
    fetchSurveyors().then( (surveyors) => {
      console.log(surveyors)
      this.setState({...this.state, surveyorList: surveyors})
    })
  }
  };
  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  };
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
  };
  login = data => {
    this.setState({
      ...this.state,
      user: data.user,
      userType: data.user.user_type_id
    });
  };
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
          <SurveyList list={this.state.surveyList} />
        )}
        {this.state.surveyorListOpen && (
          <SurveyorList list={this.state.surveyorList} />
        )}
      </div>
    );
  }
}

export default App;
