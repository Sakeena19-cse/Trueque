import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">
            EXCHANGE SKILLS. GROW TOGETHER.
          </p>

          <h1>
            Learn. Teach.
            <br />
            <span>Grow Together.</span>
          </h1>

          <p className="hero-description">
            TRUEQUE is a skill exchange platform where people
            connect, share knowledge, teach skills, and learn
            something new without money.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>

            <Link to="/matching" className="btn btn-outline">
              Explore Skills
            </Link>
          </div>
        </div>

        <div className="hero-features">
          <div className="feature-card">
            <h3>Learn Anything</h3>
            <p>Learn new skills from people in the community.</p>
          </div>

          <div className="feature-card">
            <h3>Teach Others</h3>
            <p>Share your knowledge and help others grow.</p>
          </div>

          <div className="feature-card">
            <h3>Find Matches</h3>
            <p>Connect with people who share your interests.</p>
          </div>

          <div className="feature-card">
            <h3>Grow Together</h3>
            <p>Build skills through knowledge exchange.</p>
          </div>
        </div>
      </section>
    </div>
  );
}