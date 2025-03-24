import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tools from './pages/Tools';
import About from './pages/About';
import ResumeBuilder from './pages/toolPages/ResumeBuilder';
import BudgetPlanner from './pages/toolPages/BudgetPlanner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools/resume-builder" element={<ResumeBuilder />} />
        <Route path="/tools/budget-planner" element={<BudgetPlanner />} />
      </Routes>
    </Router>
  );
}

export default App; 