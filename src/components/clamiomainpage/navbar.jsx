import React from 'react';
import './Navbar.css';



function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-right">
        <a href="#create">Create And Sell</a>
        
      </div>
      <div className="navbar-left">
        <a href="#community">Community</a>
        <a href="#explore">Explore</a>
        <a href="#creation">Creation</a>
        <a href="#join">Join</a>
      </div>
    </nav>
  );
}

export default Navbar;
