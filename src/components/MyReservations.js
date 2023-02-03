import React from 'react';
import axios from 'axios';
import {useEffect} from 'react';
// import PropTypes from 'prop-types';

const MyReservations = () => {
useEffect(() => {
  // setLoading(true);
  const token = localStorage.getItem("token");

  axios
    .get(
      `http://127.0.0.1:3000/api/v1/reservations`,
      token
    )
    .then((response) => {
      console.log("res of instruments is", response);
    });
}, []);

  return (
  <h1>my reservations</h1>
  // <div className="card border-light">
  //   <div className="card-body">
  //     <Link to="/details/{id}" state={{ instrument }}>
  //       <h2 className="card-title text-center text-decoration-none">{instrument.name}</h2>
  //     </Link>
  //     <p className="text-muted fw-bold text-center">.........</p>
  //     <p className="card-text card-desc ">{instrument.description}</p>
  //   </div>
  //   <img src={instrument.image} alt={instrument.name} />
  // </div>
)};

// MyReservations.propTypes = {
// };

export default MyReservations;