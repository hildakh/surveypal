import axios from 'axios';

  const fetchSurveys = () => {
    axios.get('admin/surveys')
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(`Running out of funny errors. Couldn't get surveys, yo!`);
    })
  }

  export default fetchSurveys;