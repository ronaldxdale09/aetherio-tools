import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-fadeUp">
          <h1 className="animate-gradient">Premium Tools. Zero Cost. No Signups.</h1>
          <p className="lead">Access a comprehensive suite of professional-grade tools designed to enhance productivity and simplify your workflow. No credit card, no account, just pure utility.</p>
          <div>
            <a href="#tools" className="btn btn-primary animate-pulse">Explore Tools</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="decorative-circle large"></div>
      <div className="decorative-circle small animate-float"></div>
      <div className="decorative-dots animate-rotate"></div>
    </section>
  );
};

export default HeroSection; 