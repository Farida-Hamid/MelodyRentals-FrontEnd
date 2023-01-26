import { useLocation } from 'react-router-dom';
import React from 'react';

const Details = () => {
  const location = useLocation();
  const {
    name, description, image, category, price,
  } = location.state;

  return (
    <div>
      <h1>
        Details page for
        {name}
      </h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>
        Category:
        {category}
      </p>
      <p>
        Price/day:
        {price}
        $
      </p>
    </div>
  );
};

export default Details;
