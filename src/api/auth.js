import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/api/v1/auth/login';

const authLogin = () => {
  // If you ran the seed file from the BackEnd project, you will have the user loginPayload.
  const loginPayload = {
    user: {
      email: 'admin@localhost',
      password: 'password',
    },
  };

  axios.post(API_URL, loginPayload)
    .then((response) => {
      const token = response.headers.get('Authorization');
      // set JWT token to local
      localStorage.setItem('token', token);

      // set token to axios common header
      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      } else delete axios.defaults.headers.common.Authorization;
      // redirect user to home page
      // window.location.href = '/'
    })
    .catch((err) => console.log(err));
};

export default authLogin;
