import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-gradient">Why Choose Us</h2>
          <p>Premium features without the premium price tag</p>
          <div className="section-underline"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3>No Sign-up Required</h3>
            <p>Access all tools instantly without creating an account or providing personal information.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3>Premium Features</h3>
            <p>Enjoy professional-grade tools with features typically found in paid applications.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3>Privacy Focused</h3>
            <p>Your data never leaves your device. We prioritize your privacy with client-side processing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 