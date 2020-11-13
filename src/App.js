import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Banner from './home/Banner';
import Header from './home/Header';
import Patient from './caregiver/Patient';

import Auth from './auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Patient token={sessionToken} /> 
      : <Auth updateToken={updateToken} />)
  }

  return (
    <div>
      <Header clickLogout={clearToken}/>
      <Banner />
      {protectedViews()}
    </div>
  );
}

export default App;