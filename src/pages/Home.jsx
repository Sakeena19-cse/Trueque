import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-container">

          {/* IMAGE ON TOP */}
          <div className="hero-image">
            <img
              src="/Trueque-skill.png"
              alt="Trueque skill exchange"
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
              Trueque is a platform to learn, teach, and grow by
              exchanging skills with others. No money. Just connections.
            </p>

            <div className="hero-buttons">

              <Link
                to="/register"
                className="hero-button primary"
              >
                Get Started
              </Link>

              <Link
                to="/matching"
                className="hero-button secondary"
              >
                Explore Skills
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="features-section">
        <div className="features-container">

          <div className="features-heading">

            <p className="section-label">
              WHY TRUEQUE?
            </p>

            <h2>
              Learn. Share. Connect.
            </h2>

            <p>
              Trueque makes it easy to exchange knowledge,
              discover new skills, and connect with people.
            </p>

          </div>


          <div className="features-grid">

            {/* FEATURE 1 */}
            <div className="feature-card">

              <div className="feature-icon">
                ✦
              </div>

              <h3>
                Learn Anything
              </h3>

              <p>
                Explore skills you want to learn from
                real people in the Trueque community.
              </p>

            </div>


            {/* FEATURE 2 */}
            <div className="feature-card">

              <div className="feature-icon">
                ↗
              </div>

              <h3>
                Teach & Share
              </h3>

              <p>
                Share your knowledge and help others
                learn skills you already know.
              </p>

            </div>


            {/* FEATURE 3 */}
            <div className="feature-card">

              <div className="feature-icon">
                ♡
              </div>

              <h3>
                Build Connections
              </h3>

              <p>
                Connect with people who have similar
                interests and learning goals.
              </p>

            </div>


            {/* FEATURE 4 */}
            <div className="feature-card">

              <div className="feature-icon">
                ✧
              </div>

              <h3>
                Grow Together
              </h3>

              <p>
                Build meaningful connections through
                learning and sharing skills.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="cta-container">

          <p className="section-label">
            START YOUR JOURNEY
          </p>

          <h2>
            Exchange Skills.
            <br />
            Grow Together.
          </h2>

          <p>
            Join Trueque and discover a community where
            everyone has something to learn and something to teach.
          </p>

          <Link
            to="/register"
            className="cta-button"
          >
            Join Trueque
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;