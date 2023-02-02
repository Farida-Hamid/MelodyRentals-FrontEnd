import React from 'react';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const Reserve = () => {
    const API = "http://127.0.0.1:3000/api/v1/reservations";

    const dummyRes =  {
      "reservation": {
        "user_id": "1",
        "instrument_id": "1",
        "pickup_date": "2023-02-01",
        "return_date": "2023-02-10",
      }
    };

    const token = localStorage.getItem('token');

    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': token,
    // };
    // console.log(headers);
    // const
    // const apiobj = {
    
    //   // Register user
    //   signup: createAsyncThunk(
    //     'users/userData',
    //     async () => {
    //       try {
    //         const response = await axios.post(
    //           API,
    //           {
    //             "reservation": {
    //               "user_id": "1",
    //               "instrument_id": "1",
    //               "pickup_date": "2023-02-01",
    //               "return_date": "2023-02-10",
    //             }
    //           },
    //           {
    //             headers,
    //           },
    //         );
    //         console.log(response);
    //         return response.data;
    //       } catch (error) {
    //         return error;
    //       }
    //     },
    //   ),
    
    // };
    // const reservedRoomThunk = createAsyncThunk('reserve', async () => {
    //   const response = await axios.post(
    //     API,
    //   );
    //   return response.data;
    // });
    // const makeRes = () => {
    //   // const token = localStorage.getItem('token');
    //   console.log('header is', headers);
    //   console.log('token is', token);


    //   axios.post(
    //   apiobj
    //   )
    // .then((response) => {
    //   const res = response;
    //   // set JWT token to local
    //   console.log('response is', res);
    //   // window.location.href = '/'
    // })
    // .catch((err) => console.log(err));
    // };
  const getText = () => axios.get(API, dummyRes , {headers: { Authorization: token }})

  return (
    <div>
      <h1>Reserve</h1>
      <button onClick={getText}>Res</button>
    </div>
  );
};

export default Reserve;
