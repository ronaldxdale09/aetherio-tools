import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <header>
        <h1>About Aetherio Solutions</h1>
        <Link to="/" className="back-link">Back to Home</Link>
      </header>
      
      <section className="about-content">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Aetherio Solutions, we're dedicated to creating productivity tools that help people 
            achieve more in less time. Our mission is to simplify complex tasks through intuitive 
            digital solutions.
          </p>
        </div>
        
        <div className="team-section">
          <h2>Our Team</h2>
          <p>
            We are a passionate team of developers, designers, and productivity enthusiasts 
            committed to building tools that make a difference in people's lives.
          </p>
        </div>
        
        <div className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Simplicity:</strong> We believe that the best tools are easy to use.</li>
            <li><strong>Quality:</strong> We hold ourselves to the highest standards.</li>
            <li><strong>Innovation:</strong> We're always looking for better ways to solve problems.</li>
            <li><strong>User-Centric:</strong> We put our users' needs at the center of everything we do.</li>
          </ul>
        </div>
      </section>
      
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or suggestions? We'd love to hear from you!</p>
        <a href="mailto:info@aetherio-solutions.com" className="contact-link">info@aetherio-solutions.com</a>
      </section>
    </div>
  );
};

export default About; 