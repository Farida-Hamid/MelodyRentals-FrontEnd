/* eslint-disable import/extensions */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Home from "../components/Home";
import Details from "../components/Details";
import Signup from "../components/Signup";
// import ProtectedRoutes from '../components/ProtectedRoutes';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details/:id" element={<Details />} />
    {/* <Route element={<ProtectedRoutes />}> */}
    {/*  <Route path="/add_instrument" element={<AddInstrument />} />
        <Route path="/delete_instrument/:id" element={<EditInstrument />} /> */}
    {/* <Route path="/rentals" element={<Rentals />} /> */}
    {/* </Route> */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    {/* <Route path="/signup" element={<Signup />} /> */}
  </Routes>
);

export default AppRoutes;
