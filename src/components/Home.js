import React from 'react';
import PropTypes from 'prop-types';
import Instrument from './Instrument';

const Home = ({ instruments }) => {
  const instrumentList = instruments;

  return (
    <div className="homepage">
      <h1>🎵🎶🎼 INSTRUMENTS 🎵🎶🎼</h1>
      <h3>Please select an instrument</h3>

      {instrumentList.map((instrument) => (
        <Instrument key={instrument.id} instrument={instrument} />
      ))}
    </div>
  );
};

Home.propTypes = {
  instruments: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool])),
  ).isRequired,
};

export default Home;
