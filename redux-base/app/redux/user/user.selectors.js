import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;
export const selectUserIsLoggedIn = createSelector(
  selectUser,
  (user) => user.loggedIn,
);
export const selectUserName = createSelector(
  selectUser,
  (user) => user.name,
);
