import React, { useState } from "react";
import "../styles/HamburgerMenu.css";
import DropDownNavBar from "./DropDownNavbar";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle=() => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="hamburger-menu" onClick={handleToggle}>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
    </div>
     <DropDownNavBar isOpen={isOpen} handleToggle={handleToggle} />
    </>
  );
};

export default HamburgerMenu;

