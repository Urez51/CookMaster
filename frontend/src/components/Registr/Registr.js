import React from 'react';
// import Box from '@mui/material/Box';
import {TextField, Button} from '@mui/material';
import './Registr.css';


function Register() {
  return (
    <section className='Registration-section'>
      <div className='container'>
        <div className='Registration'>
          <h2 className='Registration-title'>Регистрация</h2>
          <form className='Registration-form'>
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
