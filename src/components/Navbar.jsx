import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const tools = [
  {
    name: 'Resume Builder',
    description: 'Create professional resumes with ATS optimization and AI content suggestions.',
    path: '/tools/resume-builder'
  },
  {
    name: 'Cover Letter Generator',
    description: 'Create a tailored cover letter in minutes with our free, AI-powered builder.',
    path: '/tools/cover-letter-generator'
  },
  {
    name: 'Offline Budget Planner',
    description: 'Create budgets and track expenses with locally stored data and export options.',
    path: '/tools/budget-planner'
  },
  {
    name: 'Analytics Dashboard',
    description: 'Create interactive data visualizations and business analytics dashboards in minutes.',
    path: '/tools/analytics-dashboard'
  },
  {
    name: 'Solar Calculator',
    description: 'Calculate potential solar savings and ROI based on location and energy usage.',
    path: '/tools/solar-calculator'
  },
  {
    name: 'Business Plan Generator',
    description: 'Create professional business plans with financial projections and market analysis.',
    path: '/tools/business-plan-generator'
  },
  {
    name: 'AI Text Generator',
    description: 'Generate blog posts, social media content, and marketing copy with AI technology.',
    path: '/tools/ai-text-generator'
  },
  {
    name: 'Study Note Organizer',
    description: 'Create, organize, and share study notes with AI-powered summaries and flashcards.',
    path: '/tools/study-note-organizer'
  },
  {
    name: 'Invoice Generator',
    description: 'Create professional invoices with customizable templates and automatic tax calculations.',
    path: '/tools/invoice-generator'
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="logo-text">
            <span className="brand-name">Aetherio</span>
            <span className="brand-suffix">Solutions</span>
          </div>
        </Link>
        <nav>
          <ul className={isMenuOpen ? 'show' : ''}>
            <li><Link to="/">Home</Link></li>
            <li className="tools-dropdown">
              <button 
                className="tools-dropdown-btn"
                onClick={() => setIsToolsOpen(!isToolsOpen)}
              >
                Tools
                <svg 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  className={isToolsOpen ? 'rotate' : ''}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`tools-dropdown-menu ${isToolsOpen ? 'show' : ''}`}>
                {tools.map((tool, index) => (
                  <Link 
                    key={index} 
                    to={tool.path}
                    className="tool-item"
                    onClick={() => setIsToolsOpen(false)}
                  >
                    <div className="tool-item-content">
                      <h4>{tool.name}</h4>
                      <p>{tool.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 