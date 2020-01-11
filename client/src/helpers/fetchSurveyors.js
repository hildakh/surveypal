import axios from 'axios';

const fetchSurveyors = () => {
  return axios.get('/admin/users')
  .then(response => {
    return response.data})
  .catch(error => {
    console.log('Eureka! Error finding surveyors!!');
  });
}

export default fetchSurveyors;