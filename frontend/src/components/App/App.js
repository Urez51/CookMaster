import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import store from '../../store';
import Login from '../Login';
import Registr from '../Registr/Registr';
import Navbar from '../UI/Navbar/Navbar';
import Home from '../Home/Home';
import Search from '../Search/Search';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registr />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Provider>
  );
}

export default App;
