import {
  Route,
  Redirect,
} from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../../redux/user/user.selectors';

export const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ))}
    />
  );
};
