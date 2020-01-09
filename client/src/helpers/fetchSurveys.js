import axios from 'axios';

  const fetchSurveys = (user) => {
    axios.get(`admin/surveys?user_id=${user.id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
    })
  // }
  // } else {
  //   axios.get(`/api/surveys?user_id=${this.state.user.id}`)
  //     .then((response) => {
  //       const completed = response.data.survey.filter(element => element.end_date);
  //       this.setState({
  //         ...this.state,
  //         surveyList: response.data.survey,
  //         completedSurveyList: completed
  //       });
  //     })
  //   }
  }

  export default fetchSurveys;