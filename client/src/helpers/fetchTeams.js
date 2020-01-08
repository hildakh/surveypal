import axios from 'axios';

const fetchTeams = () => {
  axios.get('/admin/teams')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log('Hello! Error speaking!');
  });
}

export default fetchTeams;