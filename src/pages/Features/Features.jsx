import React from 'react';
import FeaturesSection from '../components/sections/FeaturesSection';
import './Features.css';

const Features = () => {
  return (
    <main className="features-page">
      <section className="features-header">
        <div className="container">
          <h1>Features</h1>
          <p>Explore what makes our tools powerful and unique</p>
        </div>
      </section>
      <FeaturesSection />
    </main>
  );
};

export default Features;