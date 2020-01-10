import axios from 'axios';

const fetchSurveys = (user) => {
  if (user) {
    if (user.user_type_id === 1) {
      return axios.get(`admin/surveys?user_id=${user.id}`)
        .then(response => response.data)
        .catch(error => {
          console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
        })
    } else {
      return axios.get(`/api/surveys?user_id=${user.id}`)
        .then(response => response.data.survey)
        .catch(error => {
          console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
        })
    }
  }
}
export default fetchSurveys;