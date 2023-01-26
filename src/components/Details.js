import { useLocation } from 'react-router-dom';
import React from 'react';

const Details = () => { 
  const location = useLocation();
  const { id } = location.state;

  return (
    <h1>Details page for instrument: {id}</h1>
  );
}

export default Details;