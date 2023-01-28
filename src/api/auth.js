import axios from "axios";

const API_URL = "http://127.0.0.1:3000/api/v1/auth/login";

const auth_login = () => {
  // If you ran the seed file from the BackEnd project, you will have the user loginPayload.
  const loginPayload = {
    "user": {
      "email": "admin@localhost",
      "password": "password",
    }
  };

  axios.post(API_URL, loginPayload)
    .then(response => {
      const token = response.headers.get("Authorization");
      console.log("token is =>", JSON.stringify(token));
    })
    .catch(err => console.log(err));
};

export default auth_login;
