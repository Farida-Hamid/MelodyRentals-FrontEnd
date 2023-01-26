import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login';
// import ProtectedRoutes from '../components/ProtectedRoutes';

const AppRoutes = () => (
  <Routes>
    {/* <Route path="/" element={<Home />} />
      <Route path="/instrument_details/:id" element={<Instruments />} /> */}
    {/* <Route element={<ProtectedRoutes />}> */}
    {/*  <Route path="/add_instrument" element={<AddInstrument />} />
        <Route path="/delete_instrument/:id" element={<EditInstrument />} /> */}
    {/* <Route path="/rentals" element={<Rentals />} /> */}
    {/* </Route> */}
    <Route path="/login" element={<Login />} />
    {/* <Route path="/signup" element={<Signup />} /> */}
  </Routes>
);

export default AppRoutes;
