import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import "./Navbar.css";

// Simple SVG icons to replace lucide-react
const MenuIcon = () => (
  <svg className="mobile-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg className="mobile-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Navbar = ({ language, setLanguage }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const navItems = [
    { id: 1, label: language === "fr" ? "Accueil" : "Home", route: "/" },
    { id: 2, label: language === "fr" ? "À propos" : "About", route: "/about" },
    { id: 3, label: language === "fr" ? "Services" : "Services", route: "/services" },
    { id: 4, label: language === "fr" ? "Contact" : "Contact", route: "/contact" },
  ];

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          GrassHawk
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              className="navbar-link"
            >
              {item.label}
            </Link>
          ))}
          <div className="language-toggle-container">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-toggle"
        >
          {menuVisible ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuVisible ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              onClick={() => setMenuVisible(false)}
              className="mobile-nav-link"
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-language-toggle">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
