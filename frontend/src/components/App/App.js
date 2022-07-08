import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import store from '../../store';
// import Login from '../Login';
// import Registr from '../Registr/Registr';
import Navbar from '../UI/Navbar/Navbar';
import Home from '../Home/Home';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/CookMaster' element={ <Home/>} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/registration' element={<Registr />} /> */}
      </Routes>
    </Provider>
  );
}

export default App;
