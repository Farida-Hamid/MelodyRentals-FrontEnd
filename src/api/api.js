import axios from "axios";

const END_POINT = "http://localhost:3000/api/v1";

export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

// error handling
const handleError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        console.error("Bad Request");
        break;
      case 401:
        console.error("Unauthorized");
        break;
      case 403:
        console.error("Forbidden");
        break;
      case 404:
        console.error("Not Found");
        break;
      default:
        console.error("Server Error");
    }
  } else {
    console.error("Network Error");
  }
};

// // function that allows a user to register
export const signup = async (newuser) => {
  try {
    const userobj = { user: newuser };
    const response = await baseApi.post("/auth/signup", userobj);
    const authToken = response.headers.authorization;
    const currentUser = response.data;
    return { authToken, currentUser };
  } catch (error) {
    handleError(error);
  }
};

export const login = async (newuser) => {
  const userobj = { user: newuser };
  const response = await baseApi.post("/auth/login", userobj);
  const token = response.headers.authorization;
  console.log("response in login", response.data.status);
  // const token = response.headers.authorization;
  // const token = response.headers.authorization;
  const authToken = token.replace("Bearer ", "");
  console.log("in login",authToken)
  localStorage.setItem("token", authToken);
  const currentUser = newuser;
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
