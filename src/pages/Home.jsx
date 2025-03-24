import React from 'react';
import ToolsSection from '../components/sections/ToolsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Aetherio Tools</h1>
          <p>Your one-stop solution for powerful development tools</p>
        </div>
      </section>
      <FeaturesSection />
      <ToolsSection />
    </main>
  );
};

export default Home;