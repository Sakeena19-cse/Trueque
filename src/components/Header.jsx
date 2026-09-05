import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        <Link to="/" className="brand">
          <span className="brand-main">TRU</span>
          <span className="brand-accent">E</span>
          <span className="brand-main">QUE</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/matching">Skills</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>

          <Link to="/register" className="nav-button">
            Sign Up
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;