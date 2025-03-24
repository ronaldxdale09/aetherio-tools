import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1',
      icon: '✨'
    },
    {
      title: 'Feature 2',
      description: 'Description of feature 2',
      icon: '🚀'
    },
    {
      title: 'Feature 3',
      description: 'Description of feature 3',
      icon: '💡'
    },
    {
      title: 'Feature 4',
      description: 'Description of feature 4',
      icon: '🎯'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 