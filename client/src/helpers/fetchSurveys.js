import axios from 'axios';

const fetchSurveys = (user) => {
  const hello = [];
  if (user) {
    if (user.user_type_id === 1) {
      axios.get(`admin/surveys?user_id=${user.id}`)
        .then(response => response.data)
        .catch(error => {
          console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
        })
    } else {
      axios.get(`/api/surveys?user_id=${user.id}`)
        .then(response => {
          hello.push(response.data)
        })
        .catch(error => {
          console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
        })
    }
  }
  return hello;
}
export default fetchSurveys;
