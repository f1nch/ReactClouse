import React from 'react';

export const AuthButton = ({
  isLoggedIn, loginFn, logoutFn,
}) =>
  (isLoggedIn ? (
    <div>
      <p>
        Welcome!
      </p>
      <button type="button" onClick={logoutFn}>Log Out!</button>
    </div>

  ) : (
    <div>
      <button type="button" onClick={loginFn}> Log In!</button>
    </div>
  ));
