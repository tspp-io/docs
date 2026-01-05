
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Usage from './pages/Usage';
import Installation from './pages/Installation';
import Examples from './pages/Examples';
import Codebase from './pages/Codebase';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="tspp Logo" className="navbar-logo" />
          tspp
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/usage">Usage</Link></li>
          <li><Link to="/installation">Installation</Link></li>
          <li><Link to="/examples">Examples</Link></li>
          <li><Link to="/codebase">Codebase</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/codebase" element={<Codebase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
