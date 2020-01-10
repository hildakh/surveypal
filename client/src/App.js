import React, { Component } from 'react';
import './App.css';
import AppBar from './components/navbar/AppBar';
import Card from './components/users/Card';
import Expand from 'react-expand-animated';
import SurveyList from './components/users/SurveyList';
// import CompSurvList from './components/users/CompSurvList';
import fetchSurveys from './helpers/fetchSurveys';


class App extends Component {

  constructor(props) {
    super(props);
    const token = JSON.parse(localStorage.getItem("token"));
    let currentUser = {};
    let user_type = 0;
    let survey_list = []
    if (token) {
      currentUser = token.user;
      user_type = currentUser.user_type_id;
      survey_list = token.surveys
    }
    this.state = {
      session: null,
      userType: user_type,
      user: currentUser,
      surveyOpen: false,
      compSurvOpen: false,
      surveyList: survey_list,
      adminSurveyList: false,
      completedSurveyList: []
    };
    this.status = "NULL";
  }

  componentDidMount = () => {
    // const user = localStorage.getItem('token');
    // if (user) {
    //   if (user.user_type_id === 1) {
    //     axios.get(`admin/surveys?user_id=${user.id}`)
    //       .then(response => response.data)
    //       .catch(error => {
    //         console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
    //       })
    //   } else {
    //     axios.get(`/api/surveys?user_id=${user.id}`)
    //       .then(response => {
    //       })
    //       .catch(error => {
    //         console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
    //       })
    //   }
    // }
  };

  toggleFirst = () => {
    this.setState(prevState => ({ surveyOpen: !prevState.surveyOpen }));
  };
  toggleSecond = () => {
    this.setState(prevState => ({ compSurvOpen: !prevState.compSurvOpen }));
  };
  login = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    this.setState({ ...this.state, user: token.user, userType: token.user.user_type_id, surveyList: token.surveys })
  }
  logout = () => {
    localStorage.clear();
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
          </div>
        )}
      </div>
    );
  }
}
export default App;
