import React from 'react';
import ToolsGrid from '../tools/ToolsGrid';
import './ToolsSection.css';

const ToolsSection = () => {
  return (
    <section id="tools" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-gradient">Featured Tools</h2>
          <p>Discover our collection of powerful, free-to-use tools</p>
          <div className="section-underline"></div>
        </div>
        
        <ToolsGrid />
      </div>
    </section>
  );
};

export default ToolsSection;
