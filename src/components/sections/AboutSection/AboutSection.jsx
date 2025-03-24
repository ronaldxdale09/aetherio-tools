import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="cta">
      <div className="container">
        <div className="glass-effect">
          <h2 className="animate-gradient">Free Tools For Everyone</h2>
          <div className="section-underline"></div>
          <p>We believe in democratizing access to powerful digital tools. While all our tools are free to use, your support helps us maintain and develop new features.</p>
          <div className="cta-buttons">
            <Link to="/tools" className="btn btn-primary">Start Using Tools</Link>
            <Link to="/donate" className="btn btn-donate animate-pulse">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '8px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Support Our Mission
            </Link>
          </div>
          
          <div className="achievements">
            <div className="achievement-badge">
              <div className="badge-circle animate-float">
                <span>10+</span>
              </div>
              <p>Free Tools</p>
            </div>
            
            <div className="achievement-badge">
              <div className="badge-circle animate-float delay-1">
                <span>5K+</span>
              </div>
              <p>Daily Users</p>
            </div>
            
            <div className="achievement-badge">
              <div className="badge-circle animate-float delay-2">
                <span>0</span>
              </div>
              <p>Sign-ups Needed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="decorative-circle large"></div>
    </section>
  );
};

export default AboutSection;