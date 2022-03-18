import { Navigate, Route } from 'react-router';

export const PrivateRoute = ({ children, ...rest }) => {
  const sessionToken = true;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionToken ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
