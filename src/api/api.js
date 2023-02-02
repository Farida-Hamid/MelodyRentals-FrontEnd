import axios from 'axios';

const END_POINT = 'http://localhost:3000/api/v1';

export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

// error handling
const handleError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        console.error('Bad Request');
        break;
      case 401:
        console.error('Unauthorized');
        break;
      case 403:
        console.error('Forbidden');
        break;
      case 404:
        console.error('Not Found');
        break;
      default:
        console.error('Server Error');
    }
  } else {
    console.error('Network Error');
  }
};

// // function that allows a user to register
export const signup = async (newuser) => {
  try {
    const userobj = { user: newuser };
    const response = await baseApi.post('/auth/signup', userobj);
    const authToken = response.headers.authorization;
    const currentUser = response.data;
    return { authToken, currentUser };
  } catch (error) {
    handleError(error);
  }
};

export const login = async (newuser) => {
  const userobj = { user: newuser };
  const response = await baseApi.post('/auth/login', userobj);
  const authToken = response.headers.authorization;
  const currentUser = response.data.data;
  return { authToken, currentUser };
};

export const logout = async (dispatch, type) => {
  const token = localStorage.getItem('token');
  await baseApi.delete('/auth/logout', {
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch({ type });
};

// export const addInstrument = async (newinstrument) => {
export const addInstrument = (newinstrument) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    console.log(token);
    const instrumentobj = { instrument: newinstrument };
    const response = await baseApi.post('/instruments', instrumentobj, config);
    const addedInstrument = response.data;
    // TODO (Add instrument to list)
    return { addedInstrument };
  } catch (error) {
    handleError(error);
  }
};

// delete instrument
export const deleteInstrument = (id) => async (dispatch) => {
  try {
    const instrumentId = { instrument: deletId };
    const response = await baseApi.delete('/instruments/id', instrumentId);
    const deleteInstrument = response.data;
    return { deleteInstrument };
  } catch (error) {
    handleError(error);
  }
};
