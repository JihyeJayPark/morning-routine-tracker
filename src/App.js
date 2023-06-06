import './App.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import UsersTracker from './components/UsersTracker';


const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="wrapper headerBox">
          <h1>Morning Routine Tracker</h1>
          <p>Are you ready for your morning?</p>
          <Link to="/morning-routine-tracker" className="tracker">See your tracker!</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/morning-routine-tracker" element={<UsersTracker />} />
        </Routes>
      </main>
      
    </div>
  );
};

export default App;