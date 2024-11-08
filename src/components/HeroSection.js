// HeroSection.js
import React from 'react';
import heroImage from '../assets/images/hero-img.png';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Great <span>Product</span> is <br /> built by great <span>teams</span></h1>
        <p>We help build and manage a team of world-class developers to bring your vision to life</p>
        <button className="cta-button">Let’s get started!</button>
      </div>
      <div className="hero-image">
      <img src={heroImage} alt="Illustration of teamwork and development" />
      </div>
    </section>
  );
}

export default HeroSection;
