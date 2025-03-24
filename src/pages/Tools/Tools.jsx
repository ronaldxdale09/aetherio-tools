import React from 'react';
import ToolsSection from '../components/sections/ToolsSection';
import './Tools.css';

const Tools = () => {
  return (
    <main className="tools-page">
      <section className="tools-header">
        <div className="container">
          <h1>Our Tools</h1>
          <p>Discover our collection of powerful development tools</p>
        </div>
      </section>
      <ToolsSection />
    </main>
  );
};

export default Tools;