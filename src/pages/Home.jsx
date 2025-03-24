import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Aetherio Solutions</h1>
        <p>Your one-stop destination for productivity tools</p>
      </header>
      
      <section className="tools-showcase">
        <h2>Our Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Resume Builder</h3>
            <p>Create professional resumes in minutes</p>
            <Link to="/tools/resume-builder" className="tool-link">Try it now</Link>
          </div>
          
          <div className="tool-card">
            <h3>Budget Planner</h3>
            <p>Plan and manage your finances efficiently</p>
            <Link to="/tools/budget-planner" className="tool-link">Try it now</Link>
          </div>
          
          {/* More tools can be added here */}
        </div>
      </section>
      
      <nav className="main-nav">
        <Link to="/tools" className="nav-link">All Tools</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </nav>
    </div>
  );
};

export default Home; 