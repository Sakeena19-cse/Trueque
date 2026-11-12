import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="logo">
          TRUEQUE
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/matching">Matching</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/reviews">Reviews</Link>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}