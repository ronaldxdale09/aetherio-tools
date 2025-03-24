import React, { useState, useEffect } from 'react';
import ToolCard from './ToolCard';
import './ToolsGrid.css';
import { toolsData } from '../../data/toolsData';

const categories = [
  "All Tools",
  "For Students",
  "For Professionals",
  "For Freelancers",
  "For Creatives",
  "For Business"
];

const ToolsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All Tools");
  const [visibleTools, setVisibleTools] = useState(toolsData);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    // Reset visibility for animation
    setVisibleTools([]);
    
    // Filter tools based on category
    setTimeout(() => {
      if (category === "All Tools") {
        setVisibleTools(toolsData);
      } else {
        const categoryKey = category.toLowerCase().replace('for ', '');
        const filtered = toolsData.filter(tool => 
          tool.category.toLowerCase().includes(categoryKey)
        );
        setVisibleTools(filtered);
      }
    }, 300);
  };

  return (
    <div>
      <div className="tools-categories">
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="tools-grid">
        {visibleTools.map((tool, index) => (
          <ToolCard 
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            category={tool.category}
            delay={index % 3 + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid;
