import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>TRUEQUE</h2>
          <p>Exchange Skills. Grow Together.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/help">Help & FAQ</Link>
          <Link to="/matching">Explore Skills</Link>
          <Link to="/reviews">Reviews</Link>
        </div>

        <p className="footer-copyright">
          © 2026 TRUEQUE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}