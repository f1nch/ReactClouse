const initialState = {
  loggedIn: false,
  name: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/login/success': {
      return {
        loggedIn: true,
        name: 'Jordan',
      };
    }
    case 'users/logout/success': {
      return {
        loggedIn: false,
        name: '',
      };
    }
    default:
      return state;
  }
};
