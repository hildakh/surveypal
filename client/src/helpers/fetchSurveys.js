import axios from 'axios';

  const fetchSurveys = (user) => {
    const surveys = [];
    // console.log('hello you!')
    if(user.user_type_id === 1) {
    axios.get(`admin/surveys?user_id=${user.id}`)
    .then(response => surveys.push(response.data))
    .catch(error => {
      console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
    })
  } else {
    axios.get(`/api/surveys?user_id=${user.id}`)
      .then(response => console.log(response.data))
      .catch(error => {
      console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
    })
        // const completed = response.data.survey.filter(element => element.end_date);
        // this.setState({
        //   ...this.state,
        //   surveyList: response.data.survey,
        //   completedSurveyList: completed
        // });
  }
  return surveys;
  }

  export default fetchSurveys;