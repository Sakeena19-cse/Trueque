import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            SkillSwap
          </Link>

          <p className="footer-tagline">
            Exchange skills. Grow together.
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/matching">Search Skills</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Contact</Link>
        </nav>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2026 SkillSwap. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;