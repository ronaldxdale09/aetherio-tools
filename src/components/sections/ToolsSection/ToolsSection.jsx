import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ToolsSection.css';

const ToolsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'All Tools',
    'For Students',
    'For Professionals',
    'For Freelancers',
    'For Creatives',
    'For Business'
  ];

  const tools = [
    {
      name: 'Resume Builder',
      description: 'Create professional resumes with ATS optimization and AI content suggestions.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'professional',
      path: '/tools/resume-builder'
    },
    {
      name: 'Cover Letter Generator',
      description: 'Create a tailored cover letter in minutes with our free, AI-powered builder. No account needed. Perfect for matching your resume and landing more interviews.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'professional',
      path: '/tools/cover-letter-generator'
    },
    {
      name: 'Offline Budget Planner',
      description: 'Create budgets and track expenses with locally stored data and export options.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'freelancer'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Create interactive data visualizations and business analytics dashboards in minutes.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      category: 'business'
    },
    {
      name: 'Solar Calculator',
      description: 'Calculate potential solar savings and ROI based on location and energy usage.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      category: 'general'
    },
    {
      name: 'Business Plan Generator',
      description: 'Create professional business plans with financial projections and market analysis.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      category: 'professional'
    },
    {
      name: 'AI Text Generator',
      description: 'Generate blog posts, social media content, and marketing copy with AI technology.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      category: 'creative'
    },
    {
      name: 'Study Note Organizer',
      description: 'Create, organize, and share study notes with AI-powered summaries and flashcards.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'student'
    },
    {
      name: 'Invoice Generator',
      description: 'Create professional invoices with customizable templates and automatic tax calculations.',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      category: 'freelancer'
    }
  ];

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory.toLowerCase());

  return (
    <div className="tools-section">
      <div className="tools-categories">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-tab ${activeCategory === category.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.toLowerCase())}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="tools-grid">
        {filteredTools.map((tool, index) => (
          <Link 
            to={tool.path}
            key={index} 
            className="tool-card animate-fadeUp" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`category-label category-${tool.category}`}>
              {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
            </div>
            <div className="tool-icon">
              {tool.icon}
            </div>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection; 