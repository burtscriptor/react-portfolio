import React, { useState } from 'react';
import '../styles/NavBar.css';
import HamburgerMenu from './HamburgerMenu';
import backgroundImage from '../assets/GroseValley.jpg'; 
import Animation from './Animation';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="navbar-logo">
        {/* <img className="icon" src="/GroseValley.jpg" alt="avatar" /> */}
        <Animation />
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/"></a></li>
        <li><a href="/about"></a></li>
        <li><a href="/services"></a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <HamburgerMenu isOpen={isOpen} handleToggle={handleToggle} />
    </nav>
  );
};

export default Navbar;
