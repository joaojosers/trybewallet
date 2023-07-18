import { AnyAction } from 'redux';
import { EMAIL_DATA, PASSWORD_DATA } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case EMAIL_DATA:
      return { ...state,
        ...action.payload,
      };

    case PASSWORD_DATA:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};
// const initialState = {
//     email: '',
//     password: '',
//   };

//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_EMAIL':
//         return {
//           ...state,
//           email: action.payload,
//         };
//       case 'SET_PASSWORD':
//         return {
//           ...state,
//           password: action.payload,
//         };
//       default:
//         return state;
//     }
//   };

//   export default rootReducer;

// export const setEmail = (email) => {
//   return {
//     type: 'emailData',
//     payload: email,
//   };
// };

// export const setPassword = (password) => {
//   return {
//     type: 'SET_PASSWORD',
//     payload: password,
//   };
// };
