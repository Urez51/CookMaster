import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Main from '../Main';
import store from '../../store';
import Login from '../Login/Login';
import Registr from '../Registr/Registr';
import Navbar from '../UI/Navbar/Navbar';
import LK from '../LK/LK';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registr />} />
        <Route path='/profile' element={<LK />} />
      </Routes>
    </Provider>
  );
}

export default App;
