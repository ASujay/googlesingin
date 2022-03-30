import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './app/components/login'
import Logout from './app/components/logout'
import { authStatus } from './app/selectors/authSelectors'

function App() {
  const status = useSelector(authStatus)
  return (
    <div className="App"> 
      {status ? <Logout /> : <Login />}
    </div>
  );
}

export default App;
