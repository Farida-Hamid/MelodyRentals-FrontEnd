/* eslint-disable import/extensions */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/login';
import Home from '../components/Home';
import Details from '../components/Details';
// import ProtectedRoutes from '../components/ProtectedRoutes';
import { recieveInstruments } from '../redux/instruments';

const AppRoutes = () => {
  const instrumentsList = useSelector((state) => state.instruments);
  const dispatch = useDispatch();

  const loader = async () => {
    dispatch(recieveInstruments());
  };

  if (instrumentsList.length === 0) {
    loader();
  }
  return (
    <main>
      {instrumentsList.length ? (
        <Routes>
          <Route path="/" element={<Home instruments={instrumentsList} />} />
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/details/:id" element={<Details />} />
          {/* <Route element={<ProtectedRoutes />}> */}
          {/*  <Route path="/add_instrument" element={<AddInstrument />} />
        <Route path="/delete_instrument/:id" element={<EditInstrument />} /> */}
          {/* <Route path="/rentals" element={<Rentals />} /> */}
          {/* </Route> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      ) : (
        ''
      )}
    </main>
  );
};

export default AppRoutes;
