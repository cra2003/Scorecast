import React from 'react';
import './p_navbar.css';

const P_navbar = ({ title, marginLeft }) => {
  return (
    <div className="p_navbar">
      <div className="pcontainer">
        {/* Apply the marginLeft dynamically using the style attribute */}
        <h1 style={{ marginLeft: marginLeft }}>{title}</h1>
      </div>
    </div>
  );
};


export default P_navbar;
