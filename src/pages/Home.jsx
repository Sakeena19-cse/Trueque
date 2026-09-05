import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">

          <span className="hero-label">
            SKILL EXCHANGE PLATFORM
          </span>

          <h1>
            Exchange Skills.
            <br />
            <span>Grow Together.</span>
          </h1>

          <p className="hero-description">
            TRUEQUE is a modern skill-sharing platform where people
            exchange knowledge, discover new talents, and learn from
            one another.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-button">
              Get Started
            </Link>

            <Link to="/matching" className="secondary-button">
              Explore Skills
            </Link>
          </div>

          <div className="hero-trust">
            <div>
              <strong>01</strong>
              <span>Discover Skills</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Find Your Match</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Start Learning</span>
            </div>
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-card main-card">

            <div className="card-top">
              <span>YOUR SKILL</span>
              <span className="card-dot">●</span>
            </div>

            <h3>UI / UX Design</h3>

            <p>
              Share your creativity and help others design better
              digital experiences.
            </p>

            <div className="skill-tag-row">
              <span>Design</span>
              <span>Creative</span>
            </div>

          </div>

          <div className="floating-card floating-one">
            <span>✦</span>
            <div>
              <strong>New Match</strong>
              <small>Photography ↔ Design</small>
            </div>
          </div>

          <div className="floating-card floating-two">
            <strong>92%</strong>
            <span>Match Score</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">

        <div className="section-heading">
          <span className="section-label">HOW IT WORKS</span>

          <h2>
            Learning becomes better
            <br />
            when we share.
          </h2>

          <p>
            TRUEQUE makes skill exchange simple, personal,
            and meaningful.
          </p>
        </div>

        <div className="steps-container">

          <div className="step-card">
            <span className="step-number">01</span>

            <div className="step-icon">✦</div>

            <h3>Create Your Profile</h3>

            <p>
              Tell the community what you know and what you
              would love to learn.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>

            <div className="step-icon">⌕</div>

            <h3>Find Your Match</h3>

            <p>
              Discover people whose skills and interests
              complement yours.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>

            <div className="step-icon">↗</div>

            <h3>Exchange & Grow</h3>

            <p>
              Connect, share knowledge, and build valuable
              skills together.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">

        <div className="skills-heading">
          <div>
            <span className="section-label">POPULAR SKILLS</span>

            <h2>What would you like to learn?</h2>
          </div>

          <Link to="/matching" className="text-link">
            View all skills →
          </Link>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">◈</div>
            <h3>Design</h3>
            <p>UI/UX, Graphic Design & more</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⌘</div>
            <h3>Technology</h3>
            <p>Programming, Web & Software</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">◎</div>
            <h3>Languages</h3>
            <p>English, Spanish & more</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">◇</div>
            <h3>Photography</h3>
            <p>Camera, Editing & Creativity</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">♢</div>
            <h3>Business</h3>
            <p>Marketing, Finance & Strategy</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">✧</div>
            <h3>Music</h3>
            <p>Instruments, Singing & Production</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">

        <div>
          <span className="section-label">START YOUR JOURNEY</span>

          <h2>
            You have something
            <br />
            worth sharing.
          </h2>

          <p>
            Join TRUEQUE and turn your knowledge into
            meaningful connections.
          </p>
        </div>

        <Link to="/register" className="cta-button">
          Join TRUEQUE →
        </Link>

      </section>

    </div>
  );
}

export default Home;