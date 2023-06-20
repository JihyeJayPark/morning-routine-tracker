import '../App.css';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const LandingPage = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/tracker');
    }

    return (

        <div className="app">
            <div className="landingPage">
                <div className="wrapper headerBox">
                    <h1>Morning Routine Tracker</h1>
                    <p>Are you ready for your morning?</p>
                    <button onClick={handleClick} className="button">Get Started</button>
                </div>
                
            </div>
            <Footer />
        </div>    
    )
};

export default LandingPage;