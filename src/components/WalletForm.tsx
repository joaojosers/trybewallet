import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_EXPENSE, addExpense, fetchCurrencies } from '../redux/actions';
import { RootReducer } from '../types';

function WalletForm() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('USD'); // Defina o valor padrão como BRL
  const [paymentMethod, setPaymentMethod] = useState('Dinheiro');
  const [category, setCategory] = useState('Alimentação');

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
      method: paymentMethod,
      category,
    };

    dispatch(addExpense(expense) as any);

    // Limpe os campos do formulário após a adição da despesa
    setDescription('');
    setValue('');
    setCurrency('USD');
    setPaymentMethod('Dinheiro');
    setCategory('Alimentação');
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
              defaultChecked
              defaultValue={ currency }
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

        <label htmlFor="payment-method">
          Payment Method
          <select
            id="payment-method"
              // type="text"
            data-testid="method-input"
            value={ paymentMethod }
            onChange={ (e) => setPaymentMethod(e.target.value) }
          >
            <option>
              Dinheiro
            </option>
            <option>
              Cartão de crédito
            </option>
            <option>
              Cartão de débito
            </option>
          </select>
        </label>

        <label>
          Category:
          <select
            data-testid="tag-input"
            value={ category }
            onChange={ (e) => setCategory(e.target.value) }
          >
            <option>
              Alimentação
            </option>
            <option>
              Lazer
            </option>
            <option>
              Trabalho
            </option>
            <option>
              Transporte
            </option>
            <option>
              Saúde
            </option>
          </select>
        </label>

        <button
          type="submit"
          // onClick={ handleSubmit }
        >
          Adicionar despesa

        </button>
      </form>
    </>
  );
}

export default WalletForm;
