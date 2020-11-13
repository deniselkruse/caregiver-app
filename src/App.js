import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Banner from './home/Banner';
import Header from './home/Header';

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
    return (sessionToken === localStorage.getItem('token') ? <Header token={sessionToken} /> // Change this to something other than Header!!!!
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