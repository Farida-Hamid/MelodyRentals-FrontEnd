import React from 'react';
import {useEffect} from 'react';
import { recieveReservations } from '../redux/reservations';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const MyReservations = () => {
  const reslist = useSelector((state) => state.myreservations);
  const dispatch = useDispatch();

  useEffect(() => {
    recieveReservations(dispatch);
  }, [])

  return (
    <div>
  <h1 className="text-center">my reservations</h1>

  {reslist.map((instrument) => (
  <div className="card border-light">
  <h2 className="card-title text-center text-decoration-none">reservation_id: {instrument.id}</h2>
    <h2 className="card-title text-center text-decoration-none">instrument_id: {instrument.instrument_id}</h2>
    <h2 className="card-title text-center text-decoration-none">pickup_date: {instrument.pickup_date}</h2>
    <h2 className="card-title text-center text-decoration-none">return_date: {instrument.return_date}</h2>
    <h2 className="card-title text-center text-decoration-none">user_id: {instrument.user_id}</h2>
      <p className="text-muted fw-bold text-center">.........</p>
  </div>        ))}
  </div>
)};

// MyReservations.propTypes = {
// };

export default MyReservations;