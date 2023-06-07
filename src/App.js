import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
