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
import Typing from 'react-typing-animation';
import Box from '@material-ui/core/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

        <div style={{ height: '45rem' }}>
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
        <div style={{ width: '100%', height: '35em', display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }}>
          <div data-aos="fade-up" style={{ width: '50%', height: '70%', float: 'left', marginTop: '7%' }}>
            <img style={{ width: '70%', height: '80%' }} src={'https://survey-pal.s3.ca-central-1.amazonaws.com/8690978_web1_170927-SUL-homelesscount.jpg'} />
          </div>
          <div data-aos="fade-down" style={{ float: 'right', marginTop: '7%', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ margin: '0 auto', marginTop: '8%' }}>
              More than 100 seniors living <br />on Surrey streets: homeless count
            </h1>
            <a style={{ marginTop: '9%', color: 'blue', cursor: 'pointer' }}>Read More</a>
          </div>
        </div>
        <div style={{ width: '100%', height: '40em', backgroundColor: 'f9fbe7', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

          <Box boxShadow={3} data-aos="fade-right" style={{ backgroundColor: 'white', width: '40%', height: '70%', margin: '3%', borderRadius: '3%' }}>
            <Chart
              style={{ margin: '0 auto', marginTop: '7%' }}
              width={'90%'}
              height={'90%'}
              chartType="Bar"
              loader={<div>Loading Chart</div>}
              data={[
                ['Year', 'Total', 'Sheltered', 'Unsheltered'],
                ['2011', 1581, '1,427', '154'],
                ['2012', 1602, '1,296', '306'],
                ['2013', 1600, '1,327', '273'],
                ['2014', 1803, '1,267', '536'],
                ['2015', 1746, '1,258', '488'],
                ['2016', 1847, '1,308', '539'],
                ['2017', 2138, '1,601', '537'],
                ['2018', 2181, '1,522', '659'],
                ['2019', 2223, '1,609', '614'],
              ]}
              options={{
                chart: {
                  title: 'Vancouver Homeless Population Trends 2011 to 2019',
                },
              }}
            />
          </Box>
          <Box boxShadow={3} data-aos="fade-right" style={{ backgroundColor: 'white', width: '40%', height: '70%', margin: '3%', borderRadius: '3%' }}>
            <Chart
              style={{ margin: '0 auto', marginTop: '7%' }}
              width={'90%'}
              height={'90%'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Addiction', 'Counts'],
                ['No Addictions', 31],
                ['Cigarettes', 38],
                ['Opioids', 33],
                ['Methamphetamine', 29],
                ['Alcohol', 22],
                ['Marijuana', 21],
                ['Cocaine', 14],
                ['Other', 5],

              ]}
              options={{
                title: 'Types of Addictions Issues 2019',
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
          </Box>
        </div>

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
