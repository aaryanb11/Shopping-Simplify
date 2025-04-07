import React, { useState } from 'react';
import './Navbar.css'; // custom hover effect
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg custom-navbar ${darkMode ? 'bg-dark navbar-dark' : 'bg-body-tertiary navbar-light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            Shopping <span className="text-decoration-underline">Simplify</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link hover-underline" to="/login">Login</Link>
              <Link className="nav-link hover-underline" to="/app-store">App Store</Link>
              <Link className="nav-link hover-underline" to="/pricing">Pricing</Link>
              <Link className="nav-link hover-underline" to="/features">Features</Link>
              <Link className="nav-link hover-underline" to="/faq">Faq</Link>
              <Link className="nav-link hover-underline" to="/contactUs">Contact Us</Link>
              <Link className="nav-link hover-underline" to="/register">Register</Link>
              <button onClick={toggleDarkMode} className="btn btn-outline-secondary ms-3" title="Toggle Dark Mode">
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
