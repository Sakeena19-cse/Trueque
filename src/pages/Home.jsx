import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* HEADER */}
      <header className="home-header">
        <div className="logo">Trueque</div>

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/matching">Search Skills</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">About</Link>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Log In
          </Link>

          <Link to="/register" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </header>

      {/* HERO */}
      <main>

        <section className="hero-section">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <p className="small-heading">
              EXCHANGE SKILLS. <span>GROW TOGETHER.</span>
            </p>

            <h1>
              Learn. Teach.
              <br />
              Grow <span>Together.</span>
            </h1>

            <p className="hero-description">
              Trueque is a platform to learn, teach, and grow
              by swapping skills with others. No money.
              <br />
              Just connections.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="primary-btn">
                Get Started
              </Link>

              <Link to="/matching" className="secondary-btn">
                Explore Skills
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE ILLUSTRATION */}
          <div className="skill-illustration">

            <div className="circle-item teach-circle">
              <div className="circle-icon">▢</div>
              <strong>Teach</strong>
              <small>What You Know</small>
            </div>

            <div className="circle-item learn-circle">
              <div className="circle-icon">♧</div>
              <strong>Learn</strong>
              <small>What You Need</small>
            </div>

            <div className="people-area">

              <div className="person person-left">
                <div className="person-head"></div>
                <div className="person-body"></div>
                <div className="laptop"></div>
              </div>

              <div className="center-text">
                <strong>Skills</strong>
                <strong>Connect</strong>
                <strong>People</strong>
              </div>

              <div className="person person-right">
                <div className="person-head"></div>
                <div className="person-body"></div>
                <div className="laptop"></div>
              </div>

            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section">

          <div className="feature">
            <div className="feature-icon">♙</div>
            <div>
              <h3>Learn Anything</h3>
              <p>
                Explore skills you want to
                learn from real people.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">♧</div>
            <div>
              <h3>Teach & Earn</h3>
              <p>
                Share your skills and
                help others grow.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">♧</div>
            <div>
              <h3>Build Connections</h3>
              <p>
                Make meaningful
                connections worldwide.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">♙</div>
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

      {/* FOOTER */}
      <footer className="home-footer">

        <h2>Trueque</h2>

        <p>Exchange skills. Grow together.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/matching">Search Skills</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">About</Link>
          <Link to="/profile">Contact</Link>
        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Trueque. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;