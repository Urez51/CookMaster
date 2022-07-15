import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH_LOGIN } from '../../store/auth/actionsTypes';
import {TextField, Button} from '@mui/material';
import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const handleSubmit = React.useCallback((event) => {

    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.id) {
          dispatch({ type: AUTH_LOGIN, payload: data });
          navigate('/');
        } else {
          setError(data);
        }
        // проверка что мы залогинились
    });
  }, [dispatch, navigate]);

  return (
    <section className='Login-section'>
    <div className='container'>
      <div className='Login'>
        <h2 className='Login-title'>Авторизация</h2>
        {error && <span className='Login-error'>*{error}</span>}
        <form className='Login-form' onSubmit={handleSubmit} onChange={() => setError('')}>
          <TextField
            type="email"
            label="email"
            name="email"
            variant="outlined"
            className='Login-form__input'
            autoComplete='off'
          />
          <TextField
            type="password"
            label="password"
            name="password"
            variant="outlined"
            className='Login-form__input'
          />
          
          <Button variant="contained" color="primary" type="submit" className='Login-form__btn'>
            Войти
          </Button>
        </form>
      </div>
    </div>
  </section>
  );
}

export default Login;
