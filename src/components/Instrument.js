import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Instrument = ({
  // key, name, id, description, image, category, price,
  name, id, description, image,
}) => (
  // TODO: Change the link to navigate to
  <Link to="/details/{id}" state={{id}} >
    <div>
      <h2>{name}</h2>
      <>.........</>
      <p>{description}</p>
      <img
        src={image}
        alt={name}
      />
    </div>
  </Link>
);

Instrument.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Instrument;
