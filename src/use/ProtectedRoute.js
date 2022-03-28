// ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// We are taking in the component that should be rendered if the user is authed
// We are also passing the rest of the props to the <Route /> component such as
// exact & the path
const ProtectedRoute = ({ component: Component, ...rest }) => {
  // Getting the value from our cool custom hook
  const { authed } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        // If the user is authed render the component
        if (authed) {
          return <Component {...rest} {...props} />;
        } else {
          // If they are not then we need to redirect to a public page
          return (
            <Navigate
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
