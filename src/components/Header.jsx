import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/trueque-logo.png";

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">

        {/* TRUEQUE Logo */}
        <Link to="/" className="brand">
          <img
            src={logo}
            alt="Trueque"
            className="brand-logo"
          />

          <span className="brand-name">
            True<span>que</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/search">Search Skills</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        {/* Login / Sign Up */}
        <div className="auth-buttons">
          <Link to="/login" className="login-button">
            Log In
          </Link>

          <Link to="/register" className="signup-button">
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;