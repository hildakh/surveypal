import axios from 'axios';

const fetchSurvoyers = () => {
  axios.get('/admin/users')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log('Eureka! Error finding surveyors!!');
  });
}

export default fetchSurvoyers;