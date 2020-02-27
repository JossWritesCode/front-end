import React from 'react';
import { Landing } from '../';
import ProtectedRoute from '../utils/ProctectedRoute';

function App() {
  return (
    <div className='App'>
      <Landing />
      <ProtectedRoute path='/' component={} />
    </div>
  );
}

export default App;
