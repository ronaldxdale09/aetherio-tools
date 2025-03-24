// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ToolsSection from './components/sections/ToolsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <ToolsSection />
        <WhyChooseUs />

      </main>
      <Footer />
    </div>
  );
}

export default App;
