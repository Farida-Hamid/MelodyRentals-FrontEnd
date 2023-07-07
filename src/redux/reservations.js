/* eslint-disable no-unused-vars */
import axios from 'axios';

// Action types
const READ = 'reservations/READ';

// Action creators
export const read = (reservations) => ({
  type: READ,
  payload: reservations,
});

// Reducer
const reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    default:
      return state;
  }
};

export const recieveReservations = async (dispatch) => {
  axios.get(
        `http://127.0.0.1:3000/api/v1/reservations`,
        {
          headers: { Authorization: localStorage.getItem("token"), user: localStorage.getItem("user") }}
      )
      .then((response) => {
        dispatch(read(response.data));
      });
};

export default reservationsReducer;
