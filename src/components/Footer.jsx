import React from 'react';
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
              <li><a href="#">Resume Builder</a></li>
              <li><a href="#">Offline Budget Planner</a></li>
              <li><a href="#">Document Manager</a></li>
              <li><a href="#">Solar Calculator</a></li>
              <li><a href="#">View All Tools</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; 2025 Aetherio Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 