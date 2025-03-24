import React from 'react';
import ToolsSection from '../components/sections/ToolsSection';

const Tools = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1>All Tools</h1>
        <p>Browse our complete collection of free, powerful tools</p>
        <ToolsSection />
      </div>
    </main>
  );
};

export default Tools;