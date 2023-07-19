import { AnyAction } from 'redux';
import { ADD_EXPENSE, FETCH_CURRENCIES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  total: 0,
  currencies: [],
  expenses: [],
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        // expenses: [...state.expenses, action.payload], adicionar id ao payload
      };
    case FETCH_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
};
