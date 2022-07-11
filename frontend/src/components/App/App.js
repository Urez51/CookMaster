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
import CardPage from '../CardPage/CardPage';



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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registr />} />
        <Route path='/search' element={<Search />} />
        <Route path='/profile' element={<LK />} />
        <Route path='/recipe/:id' element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
