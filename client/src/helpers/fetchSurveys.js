import axios from 'axios';

const fetchSurveys = (user) => {
  const surveys = [];
  if (user) {
    if (user.user_type_id === 1) {
      axios.get(`admin/surveys?user_id=${user.id}`)
      .then(response => {
        surveys.push(response.data)
      })
        .catch(error => {
          console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
        })
    } else {
      axios.get(`/api/surveys?user_id=${user.id}`)
        .then(response => {
          response.data.survey.forEach(item => {
            surveys.push(item)
          })
        })
        .catch(error => {
          console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
        })
    }
  }
  return surveys;
}
export default fetchSurveys;
