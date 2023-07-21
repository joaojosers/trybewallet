import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import { EMAIL_DATA, PASSWORD_DATA } from '../../redux/actions';
import Header from '../../components/Header';
import Wallet from '../../redux/reducers/wallet';
import WalletForm from '../../components/WalletForm';
import mockData from './mockData';

describe('testando a aplicação', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
    const emailSimulated = 'ninguem@ninguem.com';
  });
  test('verifica se a tela de login funciona corretamente', async () => {
    renderWithRouterAndRedux(
      <App />,
    );
    const title = screen.getByRole('heading', { level: 1, name: /login/i });
    expect(title).toBeInTheDocument();
    // const initialPage = screen.getByRole('link', { name: '/' });
    // expect(initialPage).toBeInTheDocument();
  });
  test('verifica se existem elementos na página Login', async () => {
    renderWithRouterAndRedux(
      <App />,
    );
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole('button', { name: /entrar/i });
    // const inputName = screen.getByPlaceholderText(/nome/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('disabled');
  });
  test('verifica as fucionalidades  na página Login', async () => {
    renderWithRouterAndRedux(
      <App />,
    );
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole('button', { name: /entrar/i });
    await userEvent.type(inputEmail, 'alguem@alguem.com');
    await userEvent.type(inputPassword, '123456');
    await userEvent.click(button);
    expect(button).toBeEnabled();
    // expect(global.fetch).toHaveBeenCalled();
    expect(await screen.findByTestId('total-field')).toBeInTheDocument();
    expect(await screen.findByTestId('header-currency-field')).toBeInTheDocument();
    expect(await screen.findByTestId('email-field')).toBeInTheDocument();
  });
  test('verifica as funcionalidades da página Wallet', async () => {
    renderWithRouterAndRedux(
      <App />,
    );
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole('button', { name: /entrar/i });
    await userEvent.type(inputEmail, 'abc@def.com');
    await userEvent.type(inputPassword, '654321');
    await userEvent.click(button);

    const title = screen.getByRole('heading', { level: 2, name: /despesas/i });
    expect(title).toBeInTheDocument();
    const inputDescription = screen.getByRole('textbox', { name: /description:/i });
    expect(inputDescription).toBeInTheDocument();
    const inputValue = screen.getByRole('spinbutton', { name: /value:/i });
    expect(inputValue).toBeInTheDocument();
    const currency = screen.getByRole('combobox', { name: /currency:/i });
    expect(currency).toBeInTheDocument();
    const method = screen.getByRole('combobox', { name: /payment method/i });
    expect(method).toBeInTheDocument();
  });
  test('verifica as funcionalidades da página Table', async () => {
    renderWithRouterAndRedux(
      <App />,
    );
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole('button', { name: /entrar/i });
    await userEvent.type(inputEmail, 'def@abc.com');
    await userEvent.type(inputPassword, '654321');
    await userEvent.click(button);
    const desCol = screen.getByRole('columnheader', { name: /descrição/i });
    expect(desCol).toBeInTheDocument();
    const tagCol = screen.getByRole('columnheader', { name: /tag/i });
    expect(tagCol).toBeInTheDocument();
    const payMethod = screen.getByRole('columnheader', { name: /método de pagamento/i });
    expect(payMethod).toBeInTheDocument();
  });
  test('verifica as funcionalidades da página WalletForm', async () => {
    renderWithRouterAndRedux(
      <App />,
    );
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole('button', { name: /entrar/i });
    await userEvent.type(inputEmail, 'ghi@jlm.com');
    await userEvent.type(inputPassword, '654321');
    await userEvent.click(button);
    const descBox = screen.getByRole('textbox', { name: /description:/i });
    const valueBtn = screen.getByRole('spinbutton', { name: /value:/i });
    const curBox = screen.getByRole('combobox', { name: /currency:/i });
    const btn = screen.getByRole('button', { name: /adicionar despesa/i });
    await userEvent.type(descBox, 'abc');
    await userEvent.type(valueBtn, '10');
    await userEvent.type(curBox, 'BRL');
    await userEvent.click(btn);

    expect(btn).toBeInTheDocument();

    // const formWal = screen.getByText(/walletform/i);
    // expect(formWal).toBeInTheDocument();

    // const cellField1 = screen.getByRole('cell', { name: /abc/i });
    // expect(cellField1).toBeInTheDocument();
  });
});

// const inputPassword = screen.getByPlaceholderText(/senha/i);
// const button = screen.getByRole('button', { name: /entrar/i });
// await userEvent.type(inputEmail,emailSimulated);
// await userEvent.type(inputPassword, '654321');
// await userEvent.click(button);

// const title = screen.getByRole('heading', { level: 2, name: /despesas/i });
// expect(title).toBeInTheDocument();
// const inputDescription = screen.getByRole('textbox', { name: /description:/i });
// expect(inputDescription).toBeInTheDocument();
// const inputValue = screen.getByRole('spinbutton', { name: /value:/i });
// expect(inputValue).toBeInTheDocument();
// const currency = screen.getByRole('combobox', { name: /currency:/i });
// expect(currency).toBeInTheDocument();
// const method = screen.getByRole('combobox', { name: /payment method/i });

// describe('Testes que precisam de mock', () => {
//   beforeEach(() => {
//     vi.spyOn(global, 'fetch').mockResolvedValue({
//       json: async () => (valorRetornadoPelaAPI),
//     });
//   });

//   afterEach(() => {
//     vi.clearAllMocks();
//   });

//   test('Este teste já possui o mock', async () => {
//     // ...
//   });

//   test('Este teste também já possui o mock', async () => {
//     // ...
//   });
// });

// beforeEach(() => {
//   global.fetch = vi.fn().mockResolvedValue({
//     json: async () => (mockData),
//   });
// });

// afterEach(() => {
//   vi.clearAllMocks();
// });
