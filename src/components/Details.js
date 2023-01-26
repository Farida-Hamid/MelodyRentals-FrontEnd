import { useLocation, Link } from 'react-router-dom';
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
      <Link to="/login"><div>Reserve</div></Link>
    </div>
  );
};

export default Details;
