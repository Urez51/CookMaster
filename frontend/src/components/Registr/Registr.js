import React from 'react';
import {TextField, Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH_REGISTRATION } from "../../store/auth/actionsTypes";
import './Registr.css';


function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    fetch("/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        surname,
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
          dispatch({ type: AUTH_REGISTRATION, payload: data });
          navigate('/');
        } else {
          setError(data);
        }
    });
  }, [dispatch, navigate]);
  return (
    <section className='Registration-section'>
      <div className='container'>
        <div className='Registration'>
          <h2 className='Registration-title'>Регистрация</h2>
          {error && <span className='Registration-error'>*{error}</span>}
          <form className='Registration-form' onSubmit={handleSubmit} onChange={() => setError('')}>
            <TextField
              type="text"
              label="name"
              name="name"
              variant="outlined"
              className='Registration-form__input'
            />
            <TextField
              type="text"
              label="surname"
              name="surname"
              variant="outlined"
              className='Registration-form__input'
            />
            <TextField
              type="email"
              label="email"
              name="email"
              variant="outlined"
              className='Registration-form__input'
            />
            <TextField
              type="password"
              label="password"
              name="password"
              variant="outlined"
              className='Registration-form__input'
            />
            <Button variant="contained" color="primary" type="submit" className='Registration-form__btn'>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
