const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
    case LOGOUT:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

// export const postUser = (user) => async (dispatch) => {
//   const response = await axios.post(url, user);
//   dispatch({
//     type: POST_USER,
//     payload: response.data,
//   });
// };

// // Post user action
// export const postUser = () => async (dispatch) => {
//   const { data } = await axios.post("http://127.0.0.1:3000/api/messages");
//   console.log(data);
//   dispatch({
//     type: "POST_USER",
//     payload: data[0],
//   });
// };
