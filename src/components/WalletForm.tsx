import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, fetchCurrencies } from '../redux/actions';
import { RootReducer } from '../types';

function WalletForm() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('BRL'); // Defina o valor padrão como BRL
  const [paymentMethod, setPaymentMethod] = useState('');
  const [category, setCategory] = useState('');

  const { currencies } = useSelector((state: RootReducer) => state.wallet);
  const dispatch = useDispatch();
  const id = useSelector((state: RootReducer) => state.wallet);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const expense = {
      id,
      description,
      value,
      currency,
      paymentMethod,
      category,
    };

    dispatch(addExpense(expense));

    // Limpe os campos do formulário após a adição da despesa
    setDescription('');
    setValue('');
    setCurrency('BRL');
    setPaymentMethod('');
    setCategory('');
  };

  return (
    <>
      <div>
        WalletForm

      </div>
      <form onSubmit={ handleSubmit }>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={ description }
              onChange={ (e) => setDescription(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label>
            Value:
            <input
              type="number"
              value={ value }
              onChange={ (e) => setValue(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label>
            Currency:
            <select value={ currency } onChange={ (e) => setCurrency(e.target.value) }>
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Payment Method:
            <input
              type="text"
              value={ paymentMethod }
              onChange={ (e) => setPaymentMethod(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              value={ category }
              onChange={ (e) => setCategory(e.target.value) }
            />
          </label>
        </div>
        <button type="submit">Adicionar despesa</button>
      </form>
    </>
  );
}

export default WalletForm;
