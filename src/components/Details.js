import { useLocation, Link } from 'react-router-dom';
import React from 'react';

const Details = () => {
  const location = useLocation();
  const {
    instrument,
    // name, description, image, category, price,
  } = location.state;

  return (
    <div>
      <h1>
        Details page for
        {' '}
        {instrument.name}
      </h1>
      <img src={instrument.image} alt={instrument.name} />
      <p>{instrument.description}</p>
      <p>
        Category:
        {' '}
        {instrument.category}
      </p>
      <p>
        Price/day:
        {' '}
        {instrument.price}
        {' '}
        $
      </p>
      <Link to="/login"><div>Reserve</div></Link>
    </div>
  );
};

export default Details;
