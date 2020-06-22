import React from 'react';
import store from '../src/redux/store/store'
import { Provider } from 'react-redux'
import Dashboard from './screens/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
      <ToastContainer />
    </Provider>
  );
}

export default App;
