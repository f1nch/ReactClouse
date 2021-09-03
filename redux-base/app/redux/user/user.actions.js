export const userLoginSuccess = (payload) => ({
  type: 'users/login/success',
  payload,
});

export const userLogoutSuccess = () => ({ type: 'users/logout/success' });
