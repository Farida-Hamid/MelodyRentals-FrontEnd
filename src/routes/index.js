import React from "react";
import { Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instrument_details/:id" element={<Instruments />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/add_instrument" element={<AddInstrument />} />
        <Route path="/rentals" element={<Rentals />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
