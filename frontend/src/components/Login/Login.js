import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH_LOGIN} from '../../store/auth/actionsTypes';
import {TextField, Button} from '@mui/material';
import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState('');
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
        if (typeof data === Object) {
          dispatch({ type: AUTH_LOGIN, payload: data });
          navigate('/');
        } else {
          setState(data);
        }
        // проверка что мы залогинились
    });
  }, [dispatch, navigate]);

  return (
    <section className='Login-section'>
    <div className='container'>
      <div className='Login'>
        <h2 className='Login-title'>Авторизация</h2>
        {state && <span className='Login-error'>*{state}</span>}
        <form className='Login-form' onSubmit={handleSubmit} onChange={() => setState('')}>
          <TextField
            type="email"
            label="email"
            name="email"
            variant="outlined"
            className='Login-form__input'
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
