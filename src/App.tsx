import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      {/* <div>Hello, TrybeWallet!</div> */}
      <main>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/carteira" element={ <Wallet /> } />
        </Routes>
      </main>

    </>
  );
}

export default App;
