import React from 'react';
import Hero from '../components/home/Hero';
import ToolsSection from '../components/sections/ToolsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import AboutSection from '../components/sections/AboutSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <ToolsSection />
      <FeaturesSection />
      <AboutSection />
    </main>
  );
};

export default Home;