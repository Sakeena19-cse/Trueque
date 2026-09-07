import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import skillsImage from "../assets/trueque-skills.png";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-container">

          {/* IMAGE ON TOP */}
          <div className="hero-image">
            <img
              src={skillsImage}
              alt="Trueque skill exchange community"
            />
          </div>

          {/* CONTENT BELOW IMAGE */}
          <div className="hero-content">

            <p className="hero-label">
              SKILL EXCHANGE PLATFORM
            </p>

            <h1>
              Learn. Teach.
              <br />
              Grow Together.
            </h1>

            <p className="hero-description">
              Trueque is a platform to learn, teach, and grow by exchanging
              skills with others. No money. Just connections.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="hero-btn primary">
                Get Started
              </Link>

              <Link to="/matching" className="hero-btn secondary">
                Explore Skills
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="features-section">
        <div className="features-container">

          <div className="section-heading">
            <p className="section-label">WHY TRUEQUE?</p>

            <h2>
              Learn, Share & Grow
              <br />
              Together
            </h2>

            <p>
              Connect with people who have the skills you want
              and share what you know with others.
            </p>
          </div>


          <div className="features-grid">

            {/* CARD 1 */}
            <div className="feature-card">
              <div className="feature-icon">✦</div>

              <h3>Learn Anything</h3>

              <p>
                Explore skills you want to learn from real people
                in the Trueque community.
              </p>
            </div>


            {/* CARD 2 */}
            <div className="feature-card">
              <div className="feature-icon">↗</div>

              <h3>Teach & Earn</h3>

              <p>
                Share your knowledge and help others grow
                by teaching skills you already know.
              </p>
            </div>


            {/* CARD 3 */}
            <div className="feature-card">
              <div className="feature-icon">♡</div>

              <h3>Build Connections</h3>

              <p>
                Meet people with similar interests and make
                meaningful skill-based connections.
              </p>
            </div>


            {/* CARD 4 */}
            <div className="feature-card">
              <div className="feature-icon">✧</div>

              <h3>Grow Together</h3>

              <p>
                Be part of a community built around trust,
                knowledge, and continuous learning.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CALL TO ACTION ================= */}
      <section className="cta-section">
        <div className="cta-container">

          <p className="section-label">
            START YOUR JOURNEY
          </p>

          <h2>
            Your Skills Have
            <br />
            Value.
          </h2>

          <p>
            Whether you want to learn something new or share
            what you know, Trueque is the place to start.
          </p>

          <Link to="/register" className="cta-button">
            Join Trueque
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;