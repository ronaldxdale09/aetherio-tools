import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <section className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our mission and values</p>
        </div>
      </section>
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                We strive to provide developers with powerful, intuitive tools that enhance their workflow
                and boost productivity. Our commitment is to make professional-grade development tools
                accessible to everyone.
              </p>
            </div>
            <div className="about-section">
              <h2>Our Vision</h2>
              <p>
                We envision a future where developers of all skill levels can access the tools they need
                to build amazing software. By removing barriers and simplifying complex processes, we
                empower creators to focus on what matters most - building great applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;