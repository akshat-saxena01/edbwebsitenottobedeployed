import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 bg-hero-pattern">
        <Navbar />
        <div className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;