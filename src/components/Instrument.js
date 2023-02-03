import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Instrument = ({ instrument }) => (
  <Link
    to="/details/{id}"
    state={{ instrument }}
    className="text-decoration-none"
  >
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={instrument.image}
        className="card-img-top"
        alt={instrument.name}
      />
      <div className="card-body">
        <h5 className="card-title">{instrument.name}</h5>
        <p className="card-text">
          {instrument.description.slice(0, 100)}
          {' '}
          ...
        </p>
      </div>
    </div>
  </Link>
);

Instrument.propTypes = {
  instrument: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  ).isRequired,
};

export default Instrument;
