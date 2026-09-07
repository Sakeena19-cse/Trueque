import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="site-header">

      {/* TRUEQUE - LEFT */}
      <Link
  to="/"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  }}
>
  <img
    src={logo}
    alt="Trueque logo"
    style={{
      height: "42px",
      width: "42px",
      objectFit: "contain",
      borderRadius: "50%",
    }}
  />
  <span
    style={{
      fontSize: "22px",
      fontWeight: "700",
      color: "inherit",
    }}
  >
    TRUEQUE
  </span>
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