import React from 'react';
import PropTypes from 'prop-types';

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

Instrument.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Instrument;
