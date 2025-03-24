import React from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {
  const tools = [
    {
      id: 'resume-builder',
      name: 'Resume Builder',
      description: 'Create professional resumes with our easy-to-use builder',
      icon: '📄', // You can replace this with an actual icon component
      link: '/tools/resume-builder'
    },
    {
      id: 'budget-planner',
      name: 'Budget Planner',
      description: 'Plan your finances and track your expenses',
      icon: '💰', // You can replace this with an actual icon component
      link: '/tools/budget-planner'
    },
    // Add more tools as needed
  ];

  return (
    <div className="tools-page">
      <header>
        <h1>Our Tools</h1>
        <p>Explore our collection of productivity tools</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </header>

      <div className="tools-list">
        {tools.map((tool) => (
          <div key={tool.id} className="tool-item">
            <div className="tool-icon">{tool.icon}</div>
            <div className="tool-content">
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              <Link to={tool.link} className="try-button">Try Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools; 