import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>TRUEQUE</h2>

          <p>
            Exchange skills. Share knowledge. Grow together.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/matching">Matching</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="footer-links">
          <h3>TRUEQUE</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/quiz">Skill Verification</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 TRUEQUE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;