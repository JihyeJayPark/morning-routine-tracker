import './App.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import UsersTracker from './components/UsersTracker';
// import Footer from './components/Footer';
import firebase from './firebase';


const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="wrapper">
          <h1>Morning Routine Tracker</h1>
          <p>Are you ready for your morning?</p>
          <Link to='/morning-routine-tracker' className='tracker'>See your tracker!</Link>
        </div>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}

          <Route path="/morning-routine-tracker" element={<UsersTracker />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;



// import './App.css';
// import { Link, Routes, Route } from 'react-router-dom';
// // import LandingPage from './components/LandingPage';
// import HomePage from './components/HomePage';




// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import HomePage from './components/HomePage';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route exact path="/" component={LandingPage} />
//         <Route path="/home" component={HomePage} /> */}
//         <Route exact path="/" element={<LandingPage />} />
//         <Route path="/home" element={<HomePage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


