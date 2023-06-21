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
        console.log("res of instruments is", response.data);
        dispatch(read(response.data));
      });
};

export default reservationsReducer;

// import axios from 'axios';

// const GET_RESERVED = 'GET_RESERVED';

// const initialState = { reserved: [] };

// const Api = 'http://127.0.0.1:3000/api/v1/reservations';

// const fetchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_RESERVED:
//       return {
//         ...state,
//         reserved: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const fetchreserved = () => (dispatch) => {
//   axios.get(Api, {
//               headers: { Authorization: localStorage.getItem("token"), user: localStorage.getItem("user") }}).then((res) => {
//     const { data } = res;
//     console.log(data);
//       dispatch({
//       type: GET_RESERVED,
//       payload: data,
//     });
//   });
// };
// export default fetchReducer;
