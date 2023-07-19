// Coloque aqui suas actions
// import {  } from '../../types';

export const EMAIL_DATA = 'EMAIL_DATA';
export const PASSWORD_DATA = 'PASSWORD_DATA';
export const TOTAL_EXPENSE = 'TOTAL_EXPENSE';

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
