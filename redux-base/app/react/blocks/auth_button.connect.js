import { connect } from 'react-redux';
import { userLoginSuccess, userLogoutSuccess } from '../../redux/user/user.actions';
import { selectUserIsLoggedIn, selectUserName } from '../../redux/user/user.selectors';
import { AuthButton } from './auth_button';

const mapStateToProps = (state) => ({
  isLoggedIn: selectUserIsLoggedIn(state),
  name: selectUserName(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginFn: () => dispatch(userLoginSuccess()),
  logoutFn: () => dispatch(userLogoutSuccess()),
});

export const ConnectedAuthButton = connect(mapStateToProps, mapDispatchToProps)(AuthButton);
