import axios from 'axios';

const fetchTeams = () => {
  return axios.get('/admin/teams')
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.log('Hello! Error speaking!');
  });
}

export default fetchTeams;