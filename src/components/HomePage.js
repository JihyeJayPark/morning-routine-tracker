import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import UsersTracker from './UsersTracker';
import Footer from './Footer';


const HomePage = () => {
    return (
        <div className="home">
            <header className="home-header">
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
            <Footer />
        </div>
    );
};




export default HomePage;
