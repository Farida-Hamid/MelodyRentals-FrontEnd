import React from 'react';
import Instrument from './Instrument';

const Home = () => {
  const dummyList = [
    {
      id: 0,
      userid: 21,
      name: 'Violen1',
      description: 'A very nice violen ',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.sa%2F-%2Fen%2FPlay-Violin-Adjustable-Strings-Realistic-Looking%2Fdp%2FB08BCSTZ51&psig=AOvVaw3-0xuJ3bmIlYAH45U3_vA1&ust=1674748730129000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDvoKuL4_wCFQAAAAAdAAAAABAE',
      category: 'String Instrument',
      quantity: 1,
      price: 22,
    },
    {
      id: 1,
      userid: 22,
      name: 'Violen2',
      description: 'A very nice violen ',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.sa%2F-%2Fen%2FPlay-Violin-Adjustable-Strings-Realistic-Looking%2Fdp%2FB08BCSTZ51&psig=AOvVaw3-0xuJ3bmIlYAH45U3_vA1&ust=1674748730129000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDvoKuL4_wCFQAAAAAdAAAAABAE',
      category: 'String Instrument',
      quantity: 1,
      price: 22,
    },
    {
      id: 2,
      userid: 23,
      name: 'Violen3',
      description: 'A very nice violen ',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.sa%2F-%2Fen%2FPlay-Violin-Adjustable-Strings-Realistic-Looking%2Fdp%2FB08BCSTZ51&psig=AOvVaw3-0xuJ3bmIlYAH45U3_vA1&ust=1674748730129000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDvoKuL4_wCFQAAAAAdAAAAABAE',
      category: 'String Instrument',
      quantity: 1,
      price: 22,
    },
  ];

  return (
    <div>
      <h1>🎵🎶🎼 INSTRUMENTS 🎵🎶🎼</h1>
      <h3>Please select an instrument</h3>
    </div>
  );
};

export default Home;
