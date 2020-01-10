import axios from 'axios';

const fetchSurveys = (user) => {
  const surveys = [];
  if (user) {
    if (user.user_type_id === 1) {
      return axios.get(`admin/surveys?user_id=${user.id}`)
      .then(response => {
        return response.data
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
          console.log(`Couldnt get user surveys`);
        })
    }
  }
  return surveys;
}
export default fetchSurveys;
