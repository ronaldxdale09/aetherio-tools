import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CoverLetterGenerator from './components/tools/CoverLetterGenerator/CoverLetterGenerator';
import './index.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tools/cover-letter-generator" element={<CoverLetterGenerator />} />
      </Routes>
    </Router>
  </React.StrictMode>
);