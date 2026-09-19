import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import homeImage from "../assets/trueque-hero.png";


function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-label">
            SKILL EXCHANGE PLATFORM
          </p>

          <h1>
            Learn. Teach.
            <br />
            <span>Grow Together.</span>
          </h1>

          <p className="hero-description">
            Exchange your skills, share your knowledge,
            and connect with people who want to learn
            and grow together.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-button">
              Get Started →
            </Link>

            <Link to="/login" className="secondary-button">
              Login
            </Link>
          </div>

        </div>

        <div className="hero-image-container">
          <img
            src={homeImage}
            alt="TRUEQUE skill exchange"
            className="hero-image"
          />
        </div>

      </section>


      {/* ================= WHY TRUEQUE ================= */}
      <section className="why-section">

        <div className="why-intro">

          <p className="section-label">
            WHY TRUEQUE?
          </p>

          <h2>
            Learn. Teach. Exchange.
          </h2>

          <p>
            TRUEQUE makes skill sharing simple,
            meaningful and accessible.
          </p>

        </div>


        <div className="why-cards">

          <div className="why-card">
            <div className="why-icon">📖</div>

            <h3>Learn</h3>

            <p>
              Discover new skills and learn
              from people with real knowledge.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">🎓</div>

            <h3>Teach</h3>

            <p>
              Share your knowledge and
              help others develop their skills.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">⇄</div>

            <h3>Exchange</h3>

            <p>
              Connect with compatible people
              and exchange valuable skills.
            </p>
          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section">

        <div className="how-intro">

          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2>
            How TRUEQUE Works
          </h2>

          <p>
            Start your skill exchange in three simple steps.
          </p>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <div>
              <h3>Choose Skills</h3>

              <p>
                Select the skills you want
                to learn or teach.
              </p>
            </div>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <div>
              <h3>Find Your Match</h3>

              <p>
                Discover people whose skills
                match your interests.
              </p>
            </div>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <div>
              <h3>Learn & Teach</h3>

              <p>
                Connect, exchange knowledge
                and grow together.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPLORE SKILLS ================= */}
      <section className="skills-section">

        <div className="skills-intro">

          <p className="section-label">
            EXPLORE SKILLS
          </p>

          <h2>
            Skills You Can Exchange
          </h2>

          <p>
            Explore different areas of knowledge
            available through TRUEQUE.
          </p>

          <Link
            to="/matching"
            className="skills-button"
          >
            View All Skills →
          </Link>

        </div>


        <div className="skills-grid">

          <div className="skill-card">
            <span> &lt;/&gt; </span>
            <div>
              <h3>Programming</h3>
              <p>Build your coding skills.</p>
            </div>
          </div>


          <div className="skill-card">
            <span>◎</span>
            <div>
              <h3>Web Development</h3>
              <p>Create modern websites.</p>
            </div>
          </div>


          <div className="skill-card">
            <span>✎</span>
            <div>
              <h3>UI/UX Design</h3>
              <p>Design better experiences.</p>
            </div>
          </div>


          <div className="skill-card">
            <span>📷</span>
            <div>
              <h3>Photography</h3>
              <p>Improve your photography skills.</p>
            </div>
          </div>


          <div className="skill-card">
            <span>💬</span>
            <div>
              <h3>Communication</h3>
              <p>Enhance communication skills.</p>
            </div>
          </div>


          <div className="skill-card">
            <span>📈</span>
            <div>
              <h3>Digital Marketing</h3>
              <p>Learn modern marketing skills.</p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div className="cta-content">

          <p className="section-label">
            START YOUR JOURNEY
          </p>

          <h2>
            Your Skills Have Value.
          </h2>

          <p>
            Join TRUEQUE and start exchanging
            knowledge with others.
          </p>

        </div>

        <Link
          to="/register"
          className="cta-button"
        >
          Join TRUEQUE →
        </Link>

      </section>

    </div>
  );
}

export default Home;