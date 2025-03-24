import React from 'react';
import FeaturesSection from '../components/sections/FeaturesSection';

const Features = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1>Features</h1>
        <p>Discover what makes our tools special</p>
        <FeaturesSection />
      </div>
    </main>
  );
};

export default Features;