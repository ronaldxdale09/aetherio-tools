import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-gradient">Why Choose Us</h2>
          <p>Premium features without the premium price tag</p>
          <div className="section-underline"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card glass-card">
            <h3>No Sign-up Required</h3>
            <p>Access all tools instantly without creating an account or providing personal information.</p>
          </div>

          <div className="feature-card glass-card">
            <h3>Premium Features</h3>
            <p>Enjoy professional-grade tools with features typically found in paid applications.</p>
          </div>

          <div className="feature-card glass-card">
            <h3>Privacy Focused</h3>
            <p>Your data never leaves your device. We prioritize your privacy with client-side processing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;