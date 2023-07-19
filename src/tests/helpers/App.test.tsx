import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import { EMAIL_DATA, PASSWORD_DATA } from '../../redux/actions';
import Header from '../../components/Header';

describe('App', () => {
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
    //   <Header />,
    );
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole('button', { name: /entrar/i });
    await userEvent.type(inputEmail, EMAIL_DATA);
    await userEvent.type(inputPassword, PASSWORD_DATA);
    await userEvent.click(button);
    expect(global.fetch).toHaveBeenCalled();
    expect(await screen.findByTestId('total-field')).toBeInTheDocument();
    expect(await screen.findByTestId('header-currency-field')).toBeInTheDocument();
    expect(await screen.findByTestId('email-field')).toBeInTheDocument();
  });
  test('verifica as fucionalidades da página Wallet', async () => {
    renderWithRouterAndRedux(
      <App />,
    );
    const title = screen.getByRole('heading', { level: 2, name: /despesas/i });
    expect(title).toBeInTheDocument();
    // const inputEmail = screen.getByRole('textbox');
    // const inputPassword = screen.getByPlaceholderText(/senha/i);
    // const button = screen.getByRole('button', { name: /entrar/i });
    // await userEvent.type(inputEmail, EMAIL_DATA);
    // await userEvent.type(inputPassword, PASSWORD_DATA);
    // await userEvent.click(button);
    // expect(global.fetch).toHaveBeenCalled();
    // const inputDescripition = screen.getByRole('textbox', { name: /descrição da despesa/i });
    // const inputCategory = screen.getByRole('combox', { name: /categoria da despesa/i });
    // const inputValue = screen.getByRole('spinbutton', { name: /valor/i });
    // const inputMethod = screen.getByRole('combox', { name: /metodo de pagamento/i });
    // const inputMoney = screen.getByRole('combox', { name: /moeda/i });
    // const btn = screen.getByRole('button', { name: /adicionar despesa/i });
    // expect(inputDescripition).toBeInTheDocument();
    // expect(inputCategory).toBeInTheDocument();
    // expect(inputValue).toBeInTheDocument();
    // expect(inputMethod).toBeInTheDocument();
    // expect(inputMoney).toBeInTheDocument();
    // expect(btn).toBeInTheDocument();
  });
});
