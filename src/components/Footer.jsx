import { Link } from "react-router-dom";

export default function Footer() {
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
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/matching">Matching</Link>
          <Link to="/profile">Profile</Link>
        </div>

      </div>

      <div className="footer-bottom">
        Copyright 2026 TRUEQUE. All rights reserved.
      </div>
    </footer>
  );
}