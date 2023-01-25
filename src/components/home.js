import React from 'react';
import Instrument from './Instrument';

const Home = () => (
  <div>
    <h1>Home page</h1>
    <Instrument />
    {/* {dummyList.map((instrument) => (
          <Instrument key={instrument.id} title={instrument.title} id={book.id} />
        ))} */}
  </div>
);

export default Home;
