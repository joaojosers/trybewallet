import { combineReducers } from 'redux';
import user from './user';
// import userReducer from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({
  user,
});

export default rootReducer;

// export default () => {}; // delete essa linha e configure os seus reducers
