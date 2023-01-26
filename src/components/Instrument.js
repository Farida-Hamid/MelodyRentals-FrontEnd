import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Instrument = ({
  name, id, description, image, category, price,
}) => (
  <Link to="/details/{id}" state={{name, id, description, image, category, price}} >
    <div>
      <h2>{name}</h2>
      <>.........</>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  </Link>
);

Instrument.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Instrument;
