import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EMAIL_DATA, TOTAL_EXPENSE, emailData, totalExpense } from '../redux/actions';
import { RootReducer } from '../types';

function Header() {
  const { email } = useSelector((state: RootReducer) => state.user);
  const { total } = useSelector((state: RootReducer) => state.wallet);
  const dispatch = useDispatch();
  return (
    <>
      <div>Header</div>
      <header>
        <h1>Welcome to the Wallet App</h1>
        <p data-testid="email-field">
          Email:
          { email }

        </p>
        <p data-testid="total-field">
          Total de despesas:
          {total}
        </p>
        <p data-testid="header-currency-field">Moeda: BRL</p>

        {/* <label htmlFor="currency-select">Escolha uma moeda:</label>

        <select name="currency" id="currency-select">
          <option value="">Escolha uma opção</option>
          <option value="real">Real</option>
        </select> */}
      </header>
    </>
  );
}

export default Header;
