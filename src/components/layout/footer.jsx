import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aetherio Tools</h3>
            <p>Empowering your workflow with powerful tools and solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/tools">Tools</Link>
              <Link to="/features">Features</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@aetheriotools.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aetherio Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;