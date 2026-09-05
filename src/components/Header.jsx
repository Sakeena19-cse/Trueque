import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">

      {/* TRUEQUE - LEFT */}
      <Link to="/" className="logo">
        TRUEQUE
      </Link>

      {/* NAVIGATION - RIGHT */}
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

    </header>
  );
}