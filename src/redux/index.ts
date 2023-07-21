import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';
import user from './reducers/user';
import wallet from './reducers/wallet';

// configure aqui sua store

const store = createStore(combineReducers(
  { user, wallet },
), composeWithDevTools(applyMiddleware(thunk)));

if (window.Cypress) {
  window.store = store;
}
export default store;
