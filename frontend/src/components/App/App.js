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

import AddNewRecipe from '../AddNewRecipe/AddNewRecipe'

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
      <Routes>
        <Route path='/new-recipe' element={<AddNewRecipe />} />
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
