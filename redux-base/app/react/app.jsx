import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { NotFound } from './pages/not_found';
import { Private } from './pages/private';
import { Public } from './pages/public';
import { store } from '../redux/store';
import { ConnectedAuthButton } from './blocks/auth_button.connect';
import { PrivateRoute } from './blocks/private_route';

export const App = () => (
  <Provider store={store}>
    <div>
      <Router>
        <div className="navigation">
          <ConnectedAuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/" exact>Hello Home!</Route>
          <Route path="/public"><Public /></Route>
          <PrivateRoute path="/protected"><Private /></PrivateRoute>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Router>

    </div>
  </Provider>
);
