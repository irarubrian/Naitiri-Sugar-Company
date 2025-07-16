import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import AboutUS from './pages/AboutUS';
import Projects from './pages/Project';
import Manifesto from './pages/Manifesto';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '6rem 2rem 2rem 2rem', fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>MCA Portfolio App</h1>
        <div style={{ fontSize: '1.1rem', color: '#444', marginTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUS />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
