import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#1e40af',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: '0',
      zIndex: '100'
    }}>
      {/* Logo/Brand */}
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'white',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ marginRight: '0.5rem' }}>Hon.</span>
          <span>Jerusa Shikuku Aleu</span>
        </Link>
      </div>

      {/* Mobile Menu Button (hidden on desktop) */}
      <button style={{
        display: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer'
      }}>
        ☰
      </button>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        gap: '1.5rem'
      }}>
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 0',
          borderBottom: '2px solid transparent',
          transition: 'border-color 0.3s ease',
          ':hover': {
            borderBottom: '2px solid white'
          }
        }}>
          Home
        </Link>
        <Link to="/about" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 0',
          borderBottom: '2px solid transparent',
          transition: 'border-color 0.3s ease',
          ':hover': {
            borderBottom: '2px solid white'
          }
        }}>
          About
        </Link>
        <Link to="/projects" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 0',
          borderBottom: '2px solid transparent',
          transition: 'border-color 0.3s ease',
          ':hover': {
            borderBottom: '2px solid white'
          }
        }}>
          Projects
        </Link>
        <Link to="/manifesto" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 0',
          borderBottom: '2px solid transparent',
          transition: 'border-color 0.3s ease',
          ':hover': {
            borderBottom: '2px solid white'
          }
        }}>
          Manifesto
        </Link>
        <Link to="/contact" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 0',
          borderBottom: '2px solid transparent',
          transition: 'border-color 0.3s ease',
          ':hover': {
            borderBottom: '2px solid white'
          }
        }}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;