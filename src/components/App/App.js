import React from 'react';
// import { Landing } from '../';
import ProtectedRoute from '../utils/ProctectedRoute';
import { Navbar } from '../';
import AuthModal from '../AuthModal/AuthModal';

function App() {
  return (
    <div className='App'>
      <AuthModal />
      <Navbar />
      {/* <Landing /> */}
      <ProtectedRoute path='/' component={} />
    </div>
  );
}

export default App;
