import './App.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

// Import components for Routing
import LandingPage from './components/LandingPage';
import UsersTracker from './components/UsersTracker';



const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tracker" element={<UsersTracker />} />
      </Routes>  
    </div>
  );
};

export default App;
