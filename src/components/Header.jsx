import { Link } from "react-router-dom";
import truequeAiLogo from "../assets/trueque-ai-icon.jpg";

export default function Header() {
  return (
    <header className="site-header">

      <Link to="/" className="logo-area">

        <img
          src={truequeAiLogo}
          alt="TRUEQUE AI"
          className="header-ai-logo"
        />

        <span className="logo-text">
          TRUEQUE
        </span>

      </Link>

      <nav className="nav-links">

        <Link to="/">Home</Link>

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