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
import { motion } from "framer-motion";
import { Chart } from "react-google-charts";
import ScrollAnimation from 'react-animate-on-scroll';
import Typing from 'react-typing-animation';

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

        <div style={{ height: '50rem' }}>
          <div style={{ float: 'left', marginTop: '5%', marginLeft: '7%' }}>
            <div>
              <Typing >
                <h2 style={{ fontSize: '1.8em', marginTop: '7%' }}>   Get answers with surveys!  </h2>
              </Typing>
            </div>
            <div >
              <motion.div style={{ marginTop: '2%', fontSize: '1.2em' }} initial={{ x: 0 }} animate={{
                y: 120,
                float: 'left'
              }} transition={{ duration: 1.2 }}>
                <span>
                  Be the person with great ideas.
                </span>
              </motion.div>
              <br />
              <motion.div style={{ marginTop: '2%', fontSize: '1.2em' }} initial={{ x: 0 }} animate={{
                y: 120,
                float: 'left'
              }} transition={{ duration: 1.2 }}>
                <span>
                  Surveys give you actionable insights and
                </span>
              </motion.div>
              <br />
              <motion.div style={{ marginTop: '2%', fontSize: '1.2em' }} initial={{ x: 0 }} animate={{
                y: 120,
                float: 'left'
              }} transition={{ duration: 1.2 }}>
                <span>
                  fresh perspectives.
                </span>
              </motion.div>

            </div>
          </div>
          <div style={{ width: '50%', height: '30%', marginTop: '1%', float: 'right' }}>
            <motion.div initial={{ x: 0 }} animate={{ x: -100 }} transition={{ duration: 1.2 }} style={{ marginRight: '0px' }}>

              <img src={'https://survey-pal.s3.ca-central-1.amazonaws.com/Asset+5.png'} style={{ width: '100%', height: '60%', float: 'right' }} />

            </motion.div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeIn" delay="2s" duration='10s'>
          <div style={{ width: '100%', height: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ width: '30%', height: '100%', backgroundColor: 'f9fbe7', border: '1px solid black', borderRadius: '5%', margin: '3%' }}>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                  [
                    'Element',
                    'Density',
                    { role: 'style' },
                    {
                      sourceColumn: 0,
                      role: 'annotation',
                      type: 'string',
                      calc: 'stringify',
                    },
                  ],
                  ['Copper', 8.94, '#b87333', null],
                  ['Silver', 10.49, 'silver', null],
                  ['Gold', 19.3, 'gold', null],
                  ['Platinum', 21.45, 'color: #e5e4e2', null],
                ]}
                options={{
                  bar: { groupWidth: '95%' },
                  legend: { position: 'none' },
                  animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1500,
                  },
                  enableInteractivity: false,
                }}
                chartEvents={[
                  {
                    eventName: 'animationfinish',
                    callback: () => {
                      // console.log('Animation Finished')
                    },
                  },
                ]}
                // For tests
                rootProps={{ 'data-testid': '6' }}
              />
            </div>
            <div style={{ width: '30%', height: '100%', backgroundColor: 'f9fbe7', border: '1px solid black', borderRadius: '5%', margin: '3%' }}>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Task', 'Hours per Day'],
                  ['Work', 11],
                  ['Eat', 2],
                  ['Commute', 2],
                  ['Watch TV', 2],
                  ['Sleep', 7],
                ]}
                options={{
                  title: 'My Daily Activities',
                  animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1500,
                  },
                  enableInteractivity: false,
                }}
                chartEvents={[
                  {
                    eventName: 'animationfinish',
                    callback: () => {
                      console.log('Animation Finished')
                    },
                  },
                ]}
                rootProps={{ 'data-testid': '1' }}
              />
            </div>
            <div style={{ width: '30%', height: '100%', backgroundColor: 'f9fbe7', border: '1px solid black', borderRadius: '5%', margin: '3%' }}>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['x', 'dogs'],
                  [0, 0],
                  [1, 10],
                  [2, 23],
                  [3, 17],
                  [4, 18],
                  [5, 9],
                  [6, 11],
                  [7, 27],
                  [8, 33],
                  [9, 40],
                  [10, 32],
                  [11, 35],
                ]}
                options={{
                  hAxis: {
                    title: 'Time',
                  },
                  vAxis: {
                    title: 'Popularity',
                  },
                  animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1500,
                  },
                  enableInteractivity: false,
                }}
                chartEvents={[
                  {
                    eventName: 'animationfinish',
                    callback: () => {
                      // console.log('Animation Finished')
                    },
                  },
                ]}
                rootProps={{ 'data-testid': '1' }}
              />
            </div>

          </div>
        </ScrollAnimation>
        {
          this.state.adminSurveyList && (
            <SurveyTable list={this.state.surveyList} />
          )
        }
        {
          this.state.surveyorListOpen && (
            <SurveyorTable list={this.state.surveyorList} />
          )
        }
        {
          this.state.teamListOpen && (
            <TeamTable list={this.state.teamList} />
          )
        }
      </div >
    );
  }
}
export default App;
