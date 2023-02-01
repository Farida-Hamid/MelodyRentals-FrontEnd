import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Instrument = ({ instrument }) => (
  <Link to="/details/{id}" state={{ instrument }}>
    <div>
      <h2>{instrument.name}</h2>
      <>.........</>
      <p>{instrument.description}</p>
      <img src={instrument.image} alt={instrument.name} />
    </div>
  </Link>
);

Instrument.propTypes = {
  instrument: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  ).isRequired,
};

export default Instrument;
