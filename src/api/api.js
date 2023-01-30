// import axios from "axios";

// const API_URL = "http://127.0.0.1:3000/api/v1/auth/login";

// const auth_login = () => {
//   // If you ran the seed file from the BackEnd project, you will have the user loginPayload.
//   const loginPayload = {
//     user: {
//       email: "tracy@gmail.com",
//       password: "12345678",
//     },
//   };

//   axios
//     .post(API_URL, loginPayload)
//     .then((response) => {
//       const token = response.headers.get("Authorization");
//       //set JWT token to local
//       localStorage.setItem("token", token);

//       //set token to axios common header
//       setAuthToken(token);

//       //redirect user to home page
//       // window.location.href = '/'
//     })
//     .catch((err) => console.log(err));

//   const setAuthToken = (token) => {
//     if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     } else delete axios.defaults.headers.common["Authorization"];
//   };
// };

// export default auth_login;

import axios from "axios";

const END_POINT = "localhost:3000/api/v1/";

// create an endoint for the api using the url and fetching the data
export const api = axios.create({
  baseURL: `${END_POINT}`,
  // add the authorization header to the request
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});

export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

// function that allows a user to register
export const signup = async (user, dispatch, type) => {
  const response = await baseApi.post("/auth/signup", user);
  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localStorage.setItem("token", authToken);
  dispatch({ type, payload: currentUser });
  return { authToken, currentUser };
};

export const login = async (user, dispatch, type) => {
  const response = await baseApi.post("/auth/login", user);
  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localStorage.setItem("token", authToken);
  dispatch({ type, payload: currentUser });
  return { authToken, currentUser };
};

export const logout = async (dispatch, type) => {
  const token = localStorage.getItem("token");
  await baseApi.delete("/auth/logout", {
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch({ type });
};
