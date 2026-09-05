import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            TRUEQUE
          </Link>

          <p>
            Exchange skills, share knowledge, and grow together.
            TRUEQUE connects people through meaningful skill exchange.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/matching">Skills</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="footer-column">
          <h3>Account</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>
          <Link to="/quiz">Skill Quiz</Link>
          <Link to="/session">Sessions</Link>
        </div>

        <div className="footer-column">
          <h3>TRUEQUE</h3>

          <p>Learn something new.</p>
          <p>Teach what you know.</p>
          <p>Connect with people.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TRUEQUE. All rights reserved.</p>

        <div>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;