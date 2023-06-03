
// import UsersTracker from './UsersTracker';
// import Footer from './Footer';

// const LandingPage = () => {
//     return (
//         <div className="landing">
//             <header className="landing-header">
//                 <div className="wrapper">
//                     <h1>Morning Routine Tracker</h1>
//                     <p>Are you ready for your morning?</p>
//                     <UsersTracker />
//                     <Footer />
//                 </div>
//             </header>
//         </div>
//     );
// }

// export default LandingPage;

import React from 'react';
import '../App.css';

const LandingPage = () => {
    return (
        <div className="landing">
            <div className="wrapper">
                <h1>Morning Routine Tracker</h1>
                <p>Are you ready for your morning?</p>
                <button>Get Started</button>                
            </div>
        </div>
    );
};

export default LandingPage;
