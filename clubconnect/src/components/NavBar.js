import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/schools">Schools</Link>
        <Link to="/events">Events</Link>
        <Link to="/organizations">Organizations</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
