import { AnyAction } from 'redux';
import { ADD_EXPENSE, FETCH_CURRENCIES, TOTAL_EXPENSE, DELETE_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  total: 0,
  currencies: [],
  expenses: [],
  // id: '',
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_EXPENSE:
      console.log({ payload: action.payload });
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
    case TOTAL_EXPENSE:
      return {
        ...state,
        total: Number(action.payload) + state.total,
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense : any) => expense.id !== action.payload),
      };
      // Outros cases para atualização dos gastos, remoção, etc.
    default:
      return state;
  }
};
