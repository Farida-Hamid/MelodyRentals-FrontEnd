import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Instrument = ({ instrument }) => (
  <div>
    <Link to="/details/{id}" state={{ instrument }}>
      <h2 className="text-decoration-none">{instrument.name}</h2>
    </Link>
    <>.........</>
    <p>{instrument.description}</p>
    <img src={instrument.image} alt={instrument.name} />
  </div>
);

Instrument.propTypes = {
  instrument: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  ).isRequired,
};

export default Instrument;
