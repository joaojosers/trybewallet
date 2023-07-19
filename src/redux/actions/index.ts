// Coloque aqui suas actions
// import {  } from '../../types';

import { AnyAction, Dispatch } from 'redux';

export const EMAIL_DATA = 'EMAIL_DATA';
export const PASSWORD_DATA = 'PASSWORD_DATA';
export const TOTAL_EXPENSE = 'TOTAL_EXPENSE';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const emailData = (email: any) => {
  return {
    type: 'EMAIL_DATA',
    payload: email,
  };
};

export const passwordData = (password: any) => {
  return {
    type: 'PASSWORD_DATA',
    payload: password,
  };
};

export const totalExpense = (expenses: any) => {
  return {
    type: 'TOTAL_EXPENSE',
    payload: expenses,
  };
};

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();

      const currencies = Object.keys(data);

      dispatch({ type: 'FETCH_CURRENCIES', payload: currencies });
    } catch (error) {
      // Trate os erros caso a requisição falhe
      console.error('Error fetching currencies:', error);
    }
  };
};

export const addExpense = (expense: any) => {
  return { type: 'ADD_EXPENSE', payload: expense };
};
