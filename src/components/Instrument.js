import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Instrument = ({ instrument }) => (
  <div className="card border-light">
    <div className="card-body">
      <Link to="/details/{id}" state={{ instrument }}>
        <h2 className="card-title text-center text-decoration-none">{instrument.name}</h2>
      </Link>
      <p className="text-muted fw-bold text-center">.........</p>
      <p className="card-text card-desc ">{instrument.description}</p>
    </div>
    <img src={instrument.image} alt={instrument.name} />
  </div>
);

Instrument.propTypes = {
  instrument: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  ).isRequired,
};

export default Instrument;
