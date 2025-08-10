import React, { useEffect, useState } from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating particles
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 10 + 10
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <div className="welcome-container">
      {/* Animated Background */}
      <div className="animated-bg">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`welcome-content ${isVisible ? 'visible' : ''}`}>
        <div className="logo-section">
          <div className="logo-animation">
            <div className="hawk-icon">🦅</div>
            <div className="grass-icon">🌱</div>
          </div>
        </div>

        <h1 className="main-title">
          <span className="grass-text">Welcome to</span>
          <span className="grasshawk-text">Grass Hawk</span>
        </h1>

        <p className="tagline">
          <span className="tagline-part">You grow it,</span>
          <span className="tagline-part">we protect it</span>
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Ultimate Protection</h3>
            <p>Advanced mole trap technology for your garden</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌿</div>
            <h3>Eco-Friendly</h3>
            <p>Safe for pets and environment</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick Setup</h3>
            <p>Easy to use with instant results</p>
          </div>
        </div>

        <div className="cta-section">
          <button className="cta-button">
            <span>Get Started</span>
            <div className="button-ripple"></div>
          </button>
          <button className="cta-button secondary">
            <span>Learn More</span>
          </button>
        </div>

        {/* Animated Elements */}
        <div className="floating-elements">
          <div className="floating-mole">🦔</div>
          <div className="floating-grass">🌾</div>
          <div className="floating-flower">🌸</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
