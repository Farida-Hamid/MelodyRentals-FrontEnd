import { login, logout, signup } from '../../api/api';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: null,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isRegistered: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;

export const setCurrentUser = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const userLogin = (email, password, navigate) => async (dispatch) => {
  try {
    const user = {
      email,
      password,
    };
    const response = login(user);
    localStorage.setItem('token', (await response).authToken);
    localStorage.setItem('user', JSON.stringify((await response).currentUser));
    dispatch(setCurrentUser(response));
    navigate('/');
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const userRegister = (user) => (dispatch) => {
  try {
    signup(user);
    dispatch({
      type: REGISTER_SUCCESS,
    });
  } catch (err) {
    // const { errors } = err.response.data;
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  logout(dispatch, LOGOUT);
  dispatch({ type: LOGOUT });
};
