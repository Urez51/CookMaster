import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';



import Home from '../Home/Home';
import Search from '../Search/Search';


import { AUTH_LOGIN } from '../../store/auth/actionsTypes';
import Login from '../Login/Login';
import Registr from '../Registr/Registr';
import Navbar from '../UI/Navbar/Navbar';

import LK from '../LK/LK';



function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch('/session')
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: AUTH_LOGIN, payload: data });
      });
  }, [dispatch]);
  
  return (
    <>
      <Navbar />
      <img  id="img1" alt="img" src="https://fermabenua.ru/templates/benua/img/apple.png"/>
      <img  id="img2" alt="img" src="https://fermabenua.ru/templates/benua/img/fish.png"/>
      <img  id="img3" alt="img" src="https://fermabenua.ru/templates/benua/img/sheff.png"/>
      <img  id="img4" alt="img" src="https://fermabenua.ru/templates/benua/img/ring.png"/>
      <img  id="img5" alt="img" src="https://fermabenua.ru/templates/benua/img/shop.png"/>
      <img  id="img6" alt="img" src="https://fermabenua.ru/templates/benua/img/fish.png"/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registr />} />
        <Route path='/search' element={<Search />} />
        <Route path='/profile' element={<LK />} />
      </Routes>
    </>
  );
}

export default App;
