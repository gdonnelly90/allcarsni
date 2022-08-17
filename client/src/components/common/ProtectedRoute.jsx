import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppState } from '../../context/appContext';

export const ProtectedRoute = ({ redirectPath, children }) => {
  const state = useAppState();

  if (!state.isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
