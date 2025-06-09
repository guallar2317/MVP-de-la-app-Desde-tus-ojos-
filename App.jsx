import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Simulation from './pages/Simulation';
import Result from './pages/Result';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulacion" element={<Simulation />} />
        <Route path="/resultado" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
