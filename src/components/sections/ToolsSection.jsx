import React from 'react';
import './ToolsSection.css';

const ToolsSection = () => {
  const tools = [
    {
      name: 'Tool 1',
      description: 'Description of tool 1',
      icon: '🛠️'
    },
    {
      name: 'Tool 2',
      description: 'Description of tool 2',
      icon: '⚙️'
    },
    {
      name: 'Tool 3',
      description: 'Description of tool 3',
      icon: '🔧'
    }
  ];

  return (
    <section className="tools-section">
      <div className="container">
        <h2>Our Tools</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection; 