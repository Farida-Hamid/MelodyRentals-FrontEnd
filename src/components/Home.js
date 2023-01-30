/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Instrument from './Instrument';

const Home = ({ instruments }) => {
  const instrumentList = instruments;
  console.log('instrumentList at home', instrumentList);

  return (
    <div>
      <h1>🎵🎶🎼 INSTRUMENTS 🎵🎶🎼</h1>
      <h3>Please select an instrument</h3>

      {/* {instrumentList.map((instrument) => ( */}
      <Instrument
          // key={instrumentList[0].id}
        name={instrumentList[0].name}
        id={instrumentList[0].id}
        description={instrumentList[0].description}
          // image={instrument.image}
        category={instrumentList[0].category}
        price={instrumentList[0].price}
      />
      {/* ))} */}

    </div>
  );
};

// Home.propTypes = {
//   instruments: PropTypes.objectOf(PropTypes.string),
// };

export default Home;
