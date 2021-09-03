import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './user/user.reducer';

const rootReducer = combineReducers({ user: userReducer });

export const store = createStore(rootReducer, composeWithDevTools());
