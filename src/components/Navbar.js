import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Nexvy</h2>
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="#about-us">About Us</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#team">Team</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#hire">Hire</a>
      </div>
      <button className="navbar-contact">Contact us</button>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
