/* eslint-disable react/jsx-one-expression-per-line */
import { useLocation, Link } from 'react-router-dom';
import React from 'react';
import {useDispatch} from "react-redux";
import {deleteInstrument} from "../api/api";

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button className="btn btn-danger btn-block" onClick={() => dispatch(deleteInstrument(props.id))}>
        Delete Instrument
    </button>
  );
};

const Details = () => {
  const location = useLocation();
  const {
    instrument,
    // name, description, image, category, price,
  } = location.state;

  return (
    <div className="homepage">
      <div className="card border-light">
        <h1 className="card-title fw-bold text-center">{instrument.name}</h1>
        <img src={instrument.image} alt={instrument.name} />
        <p>{instrument.description}</p>
        <p>
          Category:
          {instrument.category}
        </p>
        <p>
          Price/day:
          {instrument.price}$
        </p>
        <Link to="/login">
          <div>Reserve</div>
        </Link>
        <DeleteButton id={instrument.id} />
      </div>
    </div>
  );
};

export default Details;
