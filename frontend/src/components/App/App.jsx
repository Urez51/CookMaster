import { Provider } from 'react-redux';

import './App.css';
import store from '../../store';
import Navbar from '../UI/Navbar/Navbar';
import Home from '../Home/Home';

function App() {
  return (
    <Provider store={store} className="root">
      <Navbar />
      <Home/>
    </Provider>
  );
}

export default App;
