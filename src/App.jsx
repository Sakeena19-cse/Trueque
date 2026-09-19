import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">

      {/* TRUEQUE Logo */}
      <Link to="/" className="logo">
        TRUEQUE
      </Link>

      {/* Navigation */}
      <nav className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/matching">
          Skills
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/quiz">
          Quiz
        </Link>

        <Link to="/session">
          Session
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link
          to="/register"
          className="nav-button"
        >
          Sign Up
        </Link>

      </nav>

    </header>
  );
}

export default Header;