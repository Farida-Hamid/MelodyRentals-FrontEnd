/* eslint-disable react/jsx-one-expression-per-line */
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteInstrument } from '../api/api';

const DeleteButton = ({ id }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (user !== null && user.role === 'admin') {
    return (
      <>
        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={() => {
            dispatch(deleteInstrument(id, navigate));
          }}
        >
          Delete Instrument
        </button>
      </>
    );
  }
  return <></>;
};

const Details = () => {
  const location = useLocation();
  const { instrument } = location.state;

  return (
    <div className="homepage d-flex justify-content-center w-100">
      <div className="card" style={{ width: '20rem' }}>
        <div className="card-header">{instrument.name}</div>
        <img
          src={instrument.image}
          className="card-img-top"
          alt={instrument.name}
        />
        <div className="card-body">
          <p className="card-text mb-5">{instrument.description}</p>
          <DeleteButton id={instrument.id} />
        </div>
        <div className="card-footer d-flex gap-3">
          <p>
            Category:
            {instrument.category}
          </p>
          <p>
            Price/day:
            {instrument.price}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
