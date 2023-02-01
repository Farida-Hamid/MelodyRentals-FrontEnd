import React from 'react';
import axios from 'axios';

const Reserve = () => {
    const API = "http://127.0.0.1:3000/api/v1/reservations";

    const dummyRes = {
      "reservation": {
        "instrument_id": "3",
        "pickup_date": "2023-02-01",
        "return_date": "2023-02-10"
      }
    };

    const makeRes = () => {
      axios.post(API, dummyRes)
    .then((response) => {
      const token = response;
      // set JWT token to local
      console.log(token)
      // window.location.href = '/'
    })
    .catch((err) => console.log(err));
    };


  return (
    <div>
      <h1>Reserve</h1>
      <button onClick={makeRes}>Res</button>
    </div>
  );
};

export default Reserve;
