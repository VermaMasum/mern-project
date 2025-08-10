import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Welcome to Grass Hawk</h2>
        <p>Precision farming starts here. Discover our mole trap solution.</p>
        <a href="#product" className="hero-btn">Explore Product</a>
      </div>
    </section>
  );
};

export default Hero;
