import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Logo } from '../icons/Logo';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close mobile menu when navigating or resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          <Logo />
          <span className="animate-shimmer">Aetherio</span> Solutions
        </Link>
        <nav>
          <ul className={menuOpen ? 'show' : ''}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tools">Tools</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;