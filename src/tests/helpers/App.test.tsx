import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import { EMAIL_DATA, PASSWORD_DATA } from '../../redux/actions';

describe('App', () => {
  test('verifica se a tela de login funciona corretamente', async () => {
    renderWithRouterAndRedux(
      <App />,
    );
    const title = screen.getByRole('heading', { level: 1, name: /login/i });
    expect(title).toBeInTheDocument();
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
    await userEvent.type(inputEmail, EMAIL_DATA);
    await userEvent.type(inputPassword, PASSWORD_DATA);
    await userEvent.click(button);
    expect(global.fetch).toHaveBeenCalled();
    expect(await screen.findByTestId('total-field')).toBeInTheDocument();
    expect(await screen.findByTestId('header-currency-field')).toBeInTheDocument();
    expect(await screen.findByTestId('email-field')).toBeInTheDocument();
    // expect(await screen.findByTestId('header-date-field')).toBeInTheDocument();
    // expect(await screen.findByTestId('header-description-field')).toBeInTheDocument();
    // expect(await screen.findByTestId('header-category-field')).toBeInTheDocument();
  });
});
