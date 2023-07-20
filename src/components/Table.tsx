import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  // const expenses = useSelector((state) => state.expenses);
  // const currencies = useSelector((state) => state.currencies);
  // console.log(expenses);
  return (
    <div>Table</div>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Descrição</th>
    //       <th>Tag</th>
    //       <th>Método de pagamento</th>
    //       <th>Valor</th>
    //       <th>Moeda</th>
    //       <th>Câmbio utilizado</th>
    //       <th>Valor convertido</th>
    //       <th>Moeda de conversão</th>
    //       <th>Editar/Excluir</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {expenses.map((expense) => {
    //       const { id, description, tag, paymentMethod, value, currency, exchangeRate } = expense;
    //       const convertedValue = (value * exchangeRate).toFixed(2);
    //       const currencyName = currencies.find((curr) => curr.code === currency)?.name || 'Moeda desconhecida';

  //       return (
  //         <tr key={id}>
  //           <td>{description}</td>
  //           <td>{tag}</td>
  //           <td>{paymentMethod}</td>
  //           <td>{value.toFixed(2)}</td>
  //           <td>{currencyName}</td>
  //           <td>{exchangeRate.toFixed(2)}</td>
  //           <td>{convertedValue}</td>
  //           <td>Real</td>
  //           <td>
  //             <button onClick={() => handleEditExpense(id)}>Editar</button>
  //             <button onClick={() => handleDeleteExpense(id)}>Excluir</button>
  //           </td>
  //         </tr>
  //       );
  //     })}
  //   </tbody>
  // </table>
  );
}

export default Table;
