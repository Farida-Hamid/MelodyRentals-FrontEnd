import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => (isTokenset() ? <Outlet /> : <Navigate to="/login" />);

export default ProtectedRoutes;
