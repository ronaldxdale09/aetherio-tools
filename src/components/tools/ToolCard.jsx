import React from 'react';
import { Link } from 'react-router-dom';
import './ToolCard.css';

const ToolCard = ({ title, description, icon, category, delay }) => {
  // Function to get the category CSS class
  const getCategoryClass = () => {
    if (category.toLowerCase().includes('student')) return 'category-students';
    if (category.toLowerCase().includes('professional')) return 'category-professionals';
    if (category.toLowerCase().includes('freelancer')) return 'category-freelancers';
    if (category.toLowerCase().includes('creative')) return 'category-creatives';
    if (category.toLowerCase().includes('business')) return 'category-business';
    return '';
  };

  // Create URL slug from title
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/tools/${slug}`} className={`tool-card animate-fadeUp ${delay ? `delay-${delay}` : ''}`}>
      <div className={`category-label ${getCategoryClass()}`}>
        {category}
      </div>
      <div className="tool-icon">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default ToolCard;