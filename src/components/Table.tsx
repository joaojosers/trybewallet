import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions';
import { RootReducer } from '../types';

function Table() {
  // const expenses = useSelector((state) => state.expenses);
  const { expenses, currencies } = useSelector((state: RootReducer) => state.wallet);
  const dispatch = useDispatch();
  console.log(expenses);

  // const handleDeleteExpense = (expenseId) => {
  //   dispatch(deleteExpense(expenseId));
  // };

  return (
    <>
      <div>Table</div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense: any) => {
            const { description, tag, method,
              value, currency, exchangeRates } = expense;
            const convertedValue = (value * parseFloat(exchangeRates[currency].ask))
              .toFixed(2);
            // const currencyName = currencies.find((curr) => curr.code === currency)?.name;

            return (
              <tr key={ expense.id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{expense.exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{convertedValue}</td>
                <td>Real</td>
                <td>
                  <button>Editar</button>
                  <button>Excluir</button>
                  {/* <button onClick={ () => handleDeleteExpense(id) }>Excluir</button>
                  <button onClick={ handleEditExpense }>Editar</button> */}
                  {/* <button onClick={ () => handleEditExpense(id) }>Editar</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;

// const handleEditExpense = (e: any) => {
//   e.preventDefault();

//   const expense = {
//     id,
//     description,
//     value,
//     currency,
//     method: paymentMethod,
//     tag: category,
//   };

//   // dispatch(addExpense(expense) as any);
// };
