import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Aetherio Solutions</h4>
            <p>Premium tools accessible to everyone. No barriers, no limitations.</p>
          </div>
          <div className="footer-column">
            <h4>Tools</h4>
            <ul>
              <li><Link to="/tools/resume-builder">Resume Builder</Link></li>
              <li><Link to="/tools/budget-planner">Offline Budget Planner</Link></li>
              <li><Link to="/tools/document-manager">Document Manager</Link></li>
              <li><Link to="/tools/solar-calculator">Solar Calculator</Link></li>
              <li><Link to="/tools">View All Tools</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Aetherio Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;