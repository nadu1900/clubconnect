
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
  return (
    <nav>
      <div className='nav-links'>
    <p className= "button"><Link to="/home">home</Link> </p>
    <p className= "button">  <Link to="/schools">schools</Link> </p>
    <p className= "button">   <Link to="/events">events</Link></p>  
      <p className= "button"><Link to="/about">about</Link>
</p>
      </div>
    </nav>
  );
};


export default NavBar;