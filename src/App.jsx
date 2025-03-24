// src/App.jsx
import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection/HeroSection';
import WhyChooseUs from './components/sections/WhyChooseUs/WhyChooseUs';
import ToolsSection from './components/sections/ToolsSection/ToolsSection';
import './App.css';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ToolsSection />
      <WhyChooseUs />
    </Layout>
  );
}

export default App;
