// configure aqui sua store
// import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import user from './reducers/user';
import wallet from './reducers/wallet';

const store = createStore(combineReducers(
  { user, wallet },
), composeWithDevTools(applyMiddleware(thunk)));

if (window.Cypress) {
  window.store = store;
}
export default store;
