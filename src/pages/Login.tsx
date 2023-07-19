import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailData, passwordData } from '../redux/actions';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  function validatePassword() {
    return password.length >= 6;
  }
  function validateEmail() {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  function validadeInput() {
    return validateEmail() && validatePassword();
  }
  return (
    <>
      <h1>Login</h1>
      <section>
        <form>
          <label htmlFor="emailInput">
            E-Mail:
            <input
              type="email"
              placeholder="Username"
              data-testid="email-input"
              value={ email }
              onChange={ (event) => setEmail(event.target.value) }
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              minLength={ 6 }
              placeholder="Password"
              data-testid="password-input"
              value={ password }
              onChange={ (event) => setPassword(event.target.value) }
            />

          </label>

        </form>
        <button
          disabled={ !validadeInput() }
          type="button"
          onClick={ (event) => {
            event.preventDefault();
            dispatch(emailData(email));
            dispatch(passwordData(password));
            navigate('/carteira');
          } }
        >
          Entrar
        </button>
      </section>

    </>
  );
}

export default Login;
