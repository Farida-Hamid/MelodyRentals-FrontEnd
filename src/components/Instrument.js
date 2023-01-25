import React from 'react';

const Instrument = ({
  // key, name, id, description, image, category, price,
  name, description, image,
}) => (
  <div>
    <h2>{name}</h2>
    <>.........</>
    <p>{description}</p>
    <img
      src={image}
      alt={name}
    />
  </div>
);

export default Instrument;
