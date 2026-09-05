import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        TR<span>U</span>QUE
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/matching">Matching</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>

        <Link to="/register" className="nav-button">
          Get Started
        </Link>
      </nav>
    </header>
  );
}