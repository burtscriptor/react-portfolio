import React from 'react';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, handleToggle }) => {
  return (
    <div className="hamburger-menu" onClick={handleToggle}>
      <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      <div className={`bar ${isOpen ? 'open' : ''}`}></div>
    </div>
  );
};

export default HamburgerMenu;

