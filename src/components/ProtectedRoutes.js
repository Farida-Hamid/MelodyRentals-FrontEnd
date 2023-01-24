import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  return isTokenset() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
