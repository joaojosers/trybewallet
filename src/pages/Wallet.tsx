import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import wallet from '../redux/reducers/wallet';

function Wallet() {
  return (
    <>
      <Header />
      <div>TrybeWallet</div>
      <WalletForm />
      <h2>Despesas</h2>
      <ul>
        {/* {expenses.map((expense) => (
          <li key={ expense.id }>
            {expense.description}
            -
            {expense.value}
            {expense.currency}
          </li>
        ))} */}
      </ul>
    </>
  );
}

export default Wallet;
