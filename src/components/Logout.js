import React from 'react';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="submit" onClick={dispatch()}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
