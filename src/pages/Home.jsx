import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">

          <p className="hero-label">
            WELCOME TO TRUEQUE
          </p>

          <h1>
            Exchange Skills.
            <br />
            <span>Grow Together.</span>
          </h1>

          <p className="hero-description">
            TRUEQUE is a skill exchange platform where
            people can learn from each other, share their
            knowledge and grow together.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-button">
              Get Started
            </Link>

            <Link to="/login" className="secondary-button">
              Login
            </Link>
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="how-section">

        <div className="section-heading">
          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2>
            Learn. Teach. Exchange.
          </h2>

          <p>
            TRUEQUE makes skill sharing simple and meaningful.
          </p>
        </div>

        <div className="steps-container">

          <div className="step-card">
            <div className="step-number">01</div>

            <h3>Choose Your Skills</h3>

            <p>
              Select the skills you want to learn,
              teach, or both.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>

            <h3>Find Your Match</h3>

            <p>
              Discover people whose skills match
              your learning goals.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>

            <h3>Learn & Teach</h3>

            <p>
              Connect with your match and exchange
              knowledge through sessions.
            </p>
          </div>

        </div>

      </section>


      {/* POPULAR SKILLS */}
      <section className="skills-section">

        <div className="section-heading">
          <p className="section-label">
            SKILLS
          </p>

          <h2>
            Explore Skills
          </h2>

          <p>
            Discover different areas of knowledge
            available through TRUEQUE.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Build your coding skills.</p>
          </div>

          <div className="skill-card">
            <h3>Web Development</h3>
            <p>Create modern websites.</p>
          </div>

          <div className="skill-card">
            <h3>UI/UX Design</h3>
            <p>Design better user experiences.</p>
          </div>

          <div className="skill-card">
            <h3>Photography</h3>
            <p>Learn creative photography.</p>
          </div>

          <div className="skill-card">
            <h3>Communication</h3>
            <p>Improve your communication skills.</p>
          </div>

          <div className="skill-card">
            <h3>Digital Marketing</h3>
            <p>Learn modern marketing skills.</p>
          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}
      <section className="cta-section">

        <div>
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

          <Link to="/register" className="primary-button">
            Join TRUEQUE
          </Link>
        </div>

      </section>

    </div>
  );
}

export default Home;