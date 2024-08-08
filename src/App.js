import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import './App.css';
import History from './components/AboutHistory';
import Team from './components/AboutTeam';
import Values from './components/AboutValues';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />
          <Route path="/values" element={<Values />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
