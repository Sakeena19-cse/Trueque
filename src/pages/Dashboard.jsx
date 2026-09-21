import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* ================= HERO ================= */}
      <section className="dashboard-hero">

        <div className="dashboard-hero-content">
          <p className="section-label">
            TRUEQUE DASHBOARD
          </p>

          <h1>
            Welcome to Your
            <br />
            <span>Learning Journey.</span>
          </h1>

          <p>
            Manage your skills, discover new learning
            opportunities, connect with people and
            continue growing with TRUEQUE.
          </p>
        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="dashboard-stats">

        <div className="dashboard-stat-card">
          <div className="stat-icon">📚</div>
          <h3>Skills Learning</h3>
          <strong>04</strong>
          <p>Skills you are learning</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🎓</div>
          <h3>Skills Teaching</h3>
          <strong>03</strong>
          <p>Skills you can teach</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🤝</div>
          <h3>My Matches</h3>
          <strong>06</strong>
          <p>People matched with you</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🏆</div>
          <h3>Verified Skills</h3>
          <strong>02</strong>
          <p>Skills successfully verified</p>
        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="dashboard-content">

        {/* Learning */}
        <div className="dashboard-section">

          <div className="dashboard-section-heading">
            <div>
              <p className="section-label">
                LEARNING
              </p>

              <h2>
                Skills You're Learning
              </h2>
            </div>

            <Link to="/matching">
              Explore Skills →
            </Link>
          </div>


          <div className="dashboard-card-grid">

            <div className="dashboard-skill-card">
              <span className="dashboard-card-icon">
                &lt;/&gt;
              </span>

              <div>
                <h3>Programming</h3>
                <p>Continue learning coding skills.</p>
              </div>

              <span className="progress-text">
                65%
              </span>
            </div>


            <div className="dashboard-skill-card">
              <span className="dashboard-card-icon">
                ✎
              </span>

              <div>
                <h3>UI/UX Design</h3>
                <p>Improve your design knowledge.</p>
              </div>

              <span className="progress-text">
                40%
              </span>
            </div>

          </div>

        </div>


        {/* Teaching */}
        <div className="dashboard-section">

          <div className="dashboard-section-heading">

            <div>
              <p className="section-label">
                TEACHING
              </p>

              <h2>
                Skills You Can Teach
              </h2>
            </div>

            <Link to="/profile">
              View Profile →
            </Link>

          </div>


          <div className="dashboard-card-grid">

            <div className="dashboard-skill-card">
              <span className="dashboard-card-icon">
                📷
              </span>

              <div>
                <h3>Photography</h3>
                <p>Share your photography knowledge.</p>
              </div>

              <span className="verified-badge">
                Verified
              </span>
            </div>


            <div className="dashboard-skill-card">
              <span className="dashboard-card-icon">
                💬
              </span>

              <div>
                <h3>Communication</h3>
                <p>Help others improve communication.</p>
              </div>

              <span className="verified-badge">
                Verified
              </span>
            </div>

          </div>

        </div>


        {/* Quick Actions */}
        <div className="dashboard-actions">

          <div className="dashboard-action-intro">

            <p className="section-label">
              QUICK ACTIONS
            </p>

            <h2>
              What would you like to do?
            </h2>

            <p>
              Continue your learning journey or
              discover someone to exchange skills with.
            </p>

          </div>


          <div className="action-buttons">

            <Link
              to="/matching"
              className="dashboard-primary-button"
            >
              Find Skill Matches →
            </Link>

            <Link
              to="/quiz"
              className="dashboard-secondary-button"
            >
              Verify a Skill
            </Link>

            <Link
              to="/profile"
              className="dashboard-secondary-button"
            >
              View My Profile
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;