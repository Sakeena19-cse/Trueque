import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeImage from "../assets/trueque-hero.png";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-label">
            WELCOME TO TRUEQUE
          </p>

          {/* IMAGE IN MIDDLE */}
          <div className="hero-image-container">
            <img
              src={homeImage}
              alt="TRUEQUE Skill Exchange"
              className="hero-image"
            />
          </div>

          {/* CONTENT BELOW IMAGE */}
          <div className="hero-text">

            <h1>
              "Ctrl+Z your confusion"
              <br />
              <span>"Ctrl+Shift+skills"</span>
            </h1>

            <p className="hero-description">
              Exchange your skills, share your knowledge,
              and connect with people who want to learn
              and grow together.
            </p>

            <div className="hero-buttons">

              <Link
                to="/register"
                className="primary-button"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="secondary-button"
              >
                Login
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* WHY TRUEQUE */}
      <section className="why-section">

        <div className="section-heading">

          <p className="section-label">
            WHY TRUEQUE?
          </p>

          <h2>
            Learn. Teach. Exchange.
          </h2>

          <p>
            One platform to share knowledge and develop
            valuable skills together.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">📚</div>
            <h3>Learn</h3>
            <p>
              Learn new skills from people who have
              experience and knowledge.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🎓</div>
            <h3>Teach</h3>
            <p>
              Share your knowledge and help others
              improve their skills.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔄</div>
            <h3>Exchange</h3>
            <p>
              Exchange skills and create meaningful
              learning connections.
            </p>
          </div>

        </div>

      </section>


      {/* HOW TRUEQUE WORKS */}
      <section className="how-section">

        <div className="section-heading">

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

        <div className="steps-container">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <h3>
              Choose Your Skills
            </h3>

            <p>
              Select the skills you want to learn
              or teach.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <h3>
              Find Your Match
            </h3>

            <p>
              Find people whose skills match
              your learning goals.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <h3>
              Learn & Teach
            </h3>

            <p>
              Connect, exchange knowledge and
              grow together.
            </p>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section className="skills-section">

        <div className="section-heading">

          <p className="section-label">
            EXPLORE SKILLS
          </p>

          <h2>
            Skills You Can Exchange
          </h2>

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
            <p>Design better experiences.</p>
          </div>

          <div className="skill-card">
            <h3>Photography</h3>
            <p>Improve your photography skills.</p>
          </div>

          <div className="skill-card">
            <h3>Communication</h3>
            <p>Improve communication skills.</p>
          </div>

          <div className="skill-card">
            <h3>Digital Marketing</h3>
            <p>Learn modern marketing skills.</p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta-section">

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

        <Link
          to="/register"
          className="primary-button"
        >
          Join TRUEQUE
        </Link>

      </section>

    </div>
  );
}

export default Home;