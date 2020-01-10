import axios from 'axios';

const fetchSurveyors = () => {
  // const surveyors = [];
  axios.get('/admin/users')
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.log('Eureka! Error finding surveyors!!');
  });
  // return surveyors;
}

export default fetchSurveyors;