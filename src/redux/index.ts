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

const store = createStore(combineReducers(
  { user },
), composeWithDevTools(applyMiddleware(thunk)));

if (window.Cypress) {
  window.store = store;
}
export default store;

// import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';
// import reducer from './reducers';

// const store = createStore(
//   reducer,
//   composeWithDevTools(
//     applyMiddleware(thunk),
//   ),
// );

// export default store;