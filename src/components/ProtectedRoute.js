import React from 'react';
import { Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  // const isAuthenticated = localStorage.getItem('sessionToken');
  const isAuthenticated = true;
  console.log('this', isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Navigate to="/login" replace />)}
    />
  );
}

export default ProtectedRoute;
