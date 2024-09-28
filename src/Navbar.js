import React from 'react';
import './Navbar.css'; // Assuming you create a separate CSS file for styles

const Navbar = ({ onAnalysisClick }) => { // Accept the function as a prop
  return (
    <div className="navbar">
        <div className="container">
            <p className="virat-text">VIRAT</p>
            <p className="kohli-text">&nbsp;&nbsp;KOHLI</p>
        </div>

        <div className="links">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#analysis" className="nav-link" onClick={onAnalysisClick}>ANALYSIS</a> {/* Call the function on click */}
        </div>
    </div>
  );
};

export default Navbar;
