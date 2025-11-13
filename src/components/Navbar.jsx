import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Osumare</div>

      
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰ 
      </div>

   
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

     
      <div className={`nav-buttons ${menuOpen ? "show" : ""}`}>
        <button onClick={onLoginClick} className="nav-btn login">Login</button>
        <button onClick={onSignupClick} className="nav-btn signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
