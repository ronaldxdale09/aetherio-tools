import React from 'react';
import AboutSection from '../components/sections/AboutSection';

const About = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1>About Us</h1>
        <p>Learn more about our mission to democratize access to professional tools</p>
        <AboutSection />
      </div>
    </main>
  );
};

export default About;