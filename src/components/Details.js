/* eslint-disable react/jsx-one-expression-per-line */
import { useLocation, Link } from 'react-router-dom';
import React from 'react';

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
      </div>
    </div>
  );
};

export default Details;
