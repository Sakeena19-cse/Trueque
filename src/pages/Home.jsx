import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import skillsImage from "../assets/trueque-skills.png";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HEADER ================= */}
      <header className="home-header">
        <div className="header-container">

          <Link to="/" className="logo">
            TRUEQUE
          </Link>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/matching">Skills</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>

            <Link to="/register" className="signup-button">
              Sign Up
            </Link>
          </nav>

        </div>
      </header>


      {/* ================= HOME / HERO ================= */}
      <main>

        <section className="hero-section">

          <div className="hero-container">

            {/* LEFT SIDE - EXISTING HOME CONTENT */}
            <div className="hero-content">

              <div className="hero-label">
                SKILL EXCHANGE PLATFORM
              </div>

              <h1>
                Learn. Teach.
                <br />
                Grow <span>Together.</span>
              </h1>

              <p>
                Trueque is a platform to learn, teach, and grow
                by exchanging skills with others.
                No money. Just connections.
              </p>

              <div className="hero-buttons">

                <Link to="/register" className="primary-button">
                  Get Started
                </Link>

                <Link to="/matching" className="secondary-button">
                  Explore Skills
                </Link>

              </div>

            </div>


            {/* RIGHT SIDE - YOUR NEW IMAGE */}
            <div className="hero-image">
              <img
                src={skillsImage}
                alt="Trueque skill exchange community"
              />
            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}
        <section className="features-section">

          <div className="feature">

            <div className="feature-icon">
              ♙
            </div>

            <div>
              <h3>Learn Anything</h3>

              <p>
                Explore skills you want to learn
                from real people.
              </p>
            </div>

          </div>


          <div className="feature">

            <div className="feature-icon">
              ♧
            </div>

            <div>
              <h3>Teach & Earn</h3>

              <p>
                Share your skills and help
                others grow.
              </p>
            </div>

          </div>


          <div className="feature">

            <div className="feature-icon">
              ♡
            </div>

            <div>
              <h3>Build Connections</h3>

              <p>
                Make meaningful connections
                with others.
              </p>
            </div>

          </div>


          <div className="feature">

            <div className="feature-icon">
              ✦
            </div>

            <div>
              <h3>Grow Together</h3>

              <p>
                A community built on trust
                and knowledge.
              </p>
            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="site-footer">

        <div className="footer-container">

          {/* FOOTER BRAND */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              TRUEQUE
            </Link>

            <p>
              Exchange skills. Grow together.
            </p>

            <p className="footer-description">
              Trueque is a community-driven platform
              where people teach, learn, and grow
              together through the power of skills.
            </p>

          </div>


          {/* FOOTER LINKS */}
          <div className="footer-links">

            <div className="footer-column">

              <h4>EXPLORE</h4>

              <Link to="/matching">
                Search Skills
              </Link>

              <Link to="/matching">
                Browse Skills
              </Link>

              <Link to="/">
                How It Works
              </Link>

              <Link to="/profile">
                Become a Mentor
              </Link>

            </div>


            <div className="footer-column">

              <h4>COMMUNITY</h4>

              <Link to="/dashboard">
                All Members
              </Link>

              <Link to="/dashboard">
                Success Stories
              </Link>

              <Link to="/">
                Community Guidelines
              </Link>

              <Link to="/">
                Events
              </Link>

            </div>


            <div className="footer-column">

              <h4>SUPPORT</h4>

              <Link to="/">
                Help Center
              </Link>

              <Link to="/">
                FAQs
              </Link>

              <Link to="/">
                Contact Us
              </Link>

              <Link to="/">
                Report an Issue
              </Link>

            </div>


            <div className="footer-column">

              <h4>COMPANY</h4>

              <Link to="/">
                About Us
              </Link>

              <Link to="/">
                Our Mission
              </Link>

              <Link to="/">
                Careers
              </Link>

              <Link to="/">
                Privacy Policy
              </Link>

            </div>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 Trueque. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link to="/">
              Privacy Policy
            </Link>

            <span>|</span>

            <Link to="/">
              Terms of Service
            </Link>

            <span>|</span>

            <Link to="/">
              Cookie Policy
            </Link>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;