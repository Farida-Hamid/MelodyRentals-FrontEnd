import axios from "axios";

const API_URL = "http://127.0.0.1:3000/api/v1/auth/login";

const auth_login = () => {
  // If you ran the seed file from the BackEnd project, you will have the user loginPayload.
  const loginPayload = {
    "user": {
      "username": "admin",
      "name": "Admin",
      "email": "admin@localhost",
      "password": "password",
      "password_confirmation": "password"
    }
  };

  axios.post(API_URL, loginPayload)
    .then(response => {
      //get token from response
      // const token  =  response.headers.token;
      console.log("response is =>", (response));
      // console.log("token is =>", token);
    })
    .catch(err => console.log(err));
};

export default auth_login;
