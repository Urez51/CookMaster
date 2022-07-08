import React from 'react';
import {TextField, Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH_REGISTR } from "../../store/auth/actionsTypes";
import './Registr.css';


function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        console.log(data);
        // проверка что мы залогинились
        dispatch({ type: AUTH_REGISTR, payload: { id: data.id, login: data.login } });
        navigate('/');
    });
  }, [dispatch, navigate]);
  return (
    <section className='Registration-section'>
      <div className='container'>
        <div className='Registration'>
          <h2 className='Registration-title'>Регистрация</h2>
          <form className='Registration-form' onSubmit={handleSubmit}>
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


// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <AppBar>
//         <toolbar>
//           <h1>SIGNIN FORM </h1>
//         </toolbar>
//       </AppBar>

//       <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>

//     </div>
//   );
// }
