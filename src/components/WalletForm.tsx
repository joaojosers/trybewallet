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
    dispatch(fetchCurrencies() as any);
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
              data-testid="description-input"
              value={ description }
              onChange={ (e) => setDescription(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label>
            Value:
            <input
              data-testid="value-input"
              type="number"
              value={ value }
              onChange={ (e) => setValue(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label>
            Currency:
            <select
              value={ currency }
              onChange={ (e) => setCurrency(e.target.value) }
              data-testid="currency-input"
            >
              {currencies.map((curr) => (
                <option key={ curr } value={ curr }>
                  {curr}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="payment-method">
            Payment Method
            <select
              id="payment-method"
              // type="text"
              data-testid="method-input"
              value={ paymentMethod }
              onChange={ (e) => setPaymentMethod(e.target.value) }
            >
              Payment Method
            </select>
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
