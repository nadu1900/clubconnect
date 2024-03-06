import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <div className='nav-links'>
        <div className="dropdown">
          <button onClick={toggleDropdown} className={`dropbtn ${showDropdown ? 'active' : ''}`}>=</button>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/home">Home</Link>
              <Link to="/schools">Schools</Link>
              <Link to="/events">Events</Link>
              <Link to="/about">About</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
