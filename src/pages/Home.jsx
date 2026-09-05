import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="trueque-home">

      {/* ================= HEADER ================= */}
      <header className="main-header">
        <div className="header-inner">

          <Link to="/" className="brand">
            Trueque
          </Link>

          <nav className="main-nav">
            <Link to="/" className="nav-active">
              Home
            </Link>

            <Link to="/matching">
              Search Skills
            </Link>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/profile">
              About
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/login" className="login-link">
              Log In
            </Link>

            <Link to="/register" className="signup-link">
              Sign Up
            </Link>
          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main>

        <section className="hero">

          {/* LEFT CONTENT */}
          <div className="hero-left">

            <div className="small-heading">
              EXCHANGE SKILLS. <span>GROW TOGETHER.</span>
            </div>

            <h1>
              Learn.
              <br />
              Teach.
              <br />
              <span>Grow Together.</span>
            </h1>

            <p className="hero-text">
              Trueque is a platform to learn, teach, and grow
              by swapping skills with others. No money.
              Just connections.
            </p>

            <div className="hero-actions">

              <Link to="/register" className="get-started">
                Get Started
              </Link>

              <Link to="/matching" className="explore-skills">
                Explore Skills
              </Link>

            </div>

          </div>


          {/* RIGHT ILLUSTRATION */}
          <div className="hero-right">

            {/* TEACH CIRCLE */}
            <div className="skill-bubble teach-bubble">

              <div className="bubble-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
                  <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
                </svg>
              </div>

              <strong>Teach</strong>
              <small>What You Know</small>

            </div>


            {/* LEFT PERSON */}
            <div className="person person-one">

              <div className="person-hair hair-one"></div>

              <div className="person-face">
                <div className="eye eye-left"></div>
                <div className="eye eye-right"></div>
              </div>

              <div className="person-body body-one"></div>

              <div className="laptop laptop-one">
                <div className="laptop-screen"></div>
                <div className="laptop-base"></div>
              </div>

            </div>


            {/* CENTER */}
            <div className="center-message">
              <span>Skills</span>
              <strong>Connect</strong>
              <span>People</span>
            </div>


            {/* RIGHT PERSON */}
            <div className="person person-two">

              <div className="person-hair hair-two"></div>

              <div className="person-face face-two">
                <div className="eye eye-left"></div>
                <div className="eye eye-right"></div>
              </div>

              <div className="person-body body-two"></div>

              <div className="laptop laptop-two">
                <div className="laptop-screen"></div>
                <div className="laptop-base"></div>
              </div>

            </div>


            {/* LEARN CIRCLE */}
            <div className="skill-bubble learn-bubble">

              <div className="bubble-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 3a7 7 0 0 0-4 12.74V19h8v-3.26A7 7 0 0 0 12 3Z" />
                  <path d="M9 22h6" />
                  <path d="M9.5 12.5c.8.4 1.7.6 2.5.6s1.7-.2 2.5-.6" />
                </svg>
              </div>

              <strong>Learn</strong>
              <small>What You Need</small>

            </div>


            {/* CONNECTION LINES */}
            <div className="connection connection-left"></div>
            <div className="connection connection-right"></div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}
        <section className="features">

          <div className="feature">

            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="9" cy="8" r="3" />
                <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                <path d="M17 11a3 3 0 1 0 0-6" />
                <path d="M18 14c2 .7 3 2.5 3 5" />
              </svg>
            </div>

            <div>
              <h3>Learn Anything</h3>

              <p>
                Explore skills you want to
                learn from real people.
              </p>
            </div>

          </div>


          <div className="feature">

            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 7h14" />
                <path d="M5 12h14" />
                <path d="M5 17h14" />
                <path d="M8 4v16" />
                <path d="M16 4v16" />
              </svg>
            </div>

            <div>
              <h3>Teach & Earn</h3>

              <p>
                Share your skills and
                help others grow.
              </p>
            </div>

          </div>


          <div className="feature">

            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="8" cy="8" r="3" />
                <circle cx="17" cy="8" r="3" />
                <path d="M2.5 20c0-3 2.5-5.5 5.5-5.5S13.5 17 13.5 20" />
                <path d="M12.5 15c1-.8 2.2-1.2 3.5-1.2 3 0 5.5 2.5 5.5 5.5" />
              </svg>
            </div>

            <div>
              <h3>Build Connections</h3>

              <p>
                Make meaningful connections
                with people.
              </p>
            </div>

          </div>


          <div className="feature">

            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 3l2.4 5 5.6.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.6-.8L12 3Z" />
              </svg>
            </div>

            <div>
              <h3>Grow Together</h3>

              <p>
                A community built on
                trust and knowledge.
              </p>
            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="home-footer">

        <div className="footer-content">

          <div className="footer-brand">
            Trueque
          </div>

          <p>
            Exchange skills. Grow together.
          </p>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/matching">Search Skills</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Trueque. All rights reserved.
        </div>

      </footer>

    </div>
  );
}