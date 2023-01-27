import axios from "axios";

const API_URL = "http://127.0.0.1:3000/api/v1/auth/login";

const auth_login = () => {
  const loginPayload = {
    // username: "tm",
    // name: "tm",
    email: "tm@localhost",
    password: "12345678",
    // password_confirmation: "12345678",
  };

  axios.get(API_URL, loginPayload).then((response) => {
    // get token from response
    const t = response.data.token;
    console.log(response.data);
  });
};

export default auth_login;
