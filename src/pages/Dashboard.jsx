import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "truequeDashboardData";

const getDashboardData = () => {
  try {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      learningSkills: savedData?.learningSkills || [],
      teachingSkills: savedData?.teachingSkills || [],
      matches: savedData?.matches || [],
      verifiedSkills: savedData?.verifiedSkills || [],
    };
  } catch {
    return {
      learningSkills: [],
      teachingSkills: [],
      matches: [],
      verifiedSkills: [],
    };
  }
};

function Dashboard() {
  const [data, setData] = useState(getDashboardData);

  useEffect(() => {
    const updateDashboard = () => {
      setData(getDashboardData());
    };

    window.addEventListener("storage", updateDashboard);
    window.addEventListener("focus", updateDashboard);

    return () => {
      window.removeEventListener("storage", updateDashboard);
      window.removeEventListener("focus", updateDashboard);
    };
  }, []);

  return (
    <div className="dashboard-page">
      {/* HERO */}
      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <p className="section-label">TRUEQUE DASHBOARD</p>

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

      {/* DYNAMIC STATS */}
      <section className="dashboard-stats">
        <div className="dashboard-stat-card">
          <div className="stat-icon">📚</div>
          <h3>Skills Learning</h3>
          <strong>{String(data.learningSkills.length).padStart(2, "0")}</strong>
          <p>Skills you are learning</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🎓</div>
          <h3>Skills Teaching</h3>
          <strong>{String(data.teachingSkills.length).padStart(2, "0")}</strong>
          <p>Skills you can teach</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🤝</div>
          <h3>My Matches</h3>
          <strong>{String(data.matches.length).padStart(2, "0")}</strong>
          <p>People matched with you</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🏆</div>
          <h3>Verified Skills</h3>
          <strong>{String(data.verifiedSkills.length).padStart(2, "0")}</strong>
          <p>Skills successfully verified</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="dashboard-content">
        {/* LEARNING */}
        <div className="dashboard-section">
          <div className="dashboard-section-heading">
            <div>
              <p className="section-label">LEARNING</p>
              <h2>Skills You're Learning</h2>
            </div>

            <Link to="/matching">Explore Skills →</Link>
          </div>

          <div className="dashboard-card-grid">
            {data.learningSkills.length > 0 ? (
              data.learningSkills.map((skill) => (
                <div className="dashboard-skill-card" key={skill}>
                  <span className="dashboard-card-icon">&lt;/&gt;</span>
                  <div>
                    <h3>{skill}</h3>
                    <p>Continue learning this skill.</p>
                  </div>
                  <span className="progress-text">Learning</span>
                </div>
              ))
            ) : (
              <p>No learning skills selected yet. Explore skills to get started.</p>
            )}
          </div>
        </div>

        {/* TEACHING */}
        <div className="dashboard-section">
          <div className="dashboard-section-heading">
            <div>
              <p className="section-label">TEACHING</p>
              <h2>Skills You Can Teach</h2>
            </div>

            <Link to="/matching">Explore Skills →</Link>
          </div>

          <div className="dashboard-card-grid">
            {data.teachingSkills.length > 0 ? (
              data.teachingSkills.map((skill) => (
                <div className="dashboard-skill-card" key={skill}>
                  <span className="dashboard-card-icon">🎓</span>
                  <div>
                    <h3>{skill}</h3>
                    <p>Share your knowledge with others.</p>
                  </div>
                  <span className="verified-badge">Teaching</span>
                </div>
              ))
            ) : (
              <p>No teaching skills selected yet. Choose a skill you can teach.</p>
            )}
          </div>
        </div>

        {/* MATCHES */}
        <div className="dashboard-section">
          <div className="dashboard-section-heading">
            <div>
              <p className="section-label">CONNECTIONS</p>
              <h2>My Skill Matches</h2>
            </div>

            <Link to="/matching">Find Matches →</Link>
          </div>

          <div className="dashboard-card-grid">
            {data.matches.length > 0 ? (
              data.matches.map((match) => (
                <div className="dashboard-skill-card" key={match}>
                  <span className="dashboard-card-icon">🤝</span>
                  <div>
                    <h3>{match}</h3>
                    <p>Skill match created.</p>
                  </div>
                </div>
              ))
            ) : (
              <p>You haven't created any matches yet.</p>
            )}
          </div>
        </div>

        {/* VERIFIED SKILLS */}
        <div className="dashboard-section">
          <div className="dashboard-section-heading">
            <div>
              <p className="section-label">ACHIEVEMENTS</p>
              <h2>Verified Skills</h2>
            </div>

            <Link to="/quiz">Take a Quiz →</Link>
          </div>

          <div className="dashboard-card-grid">
            {data.verifiedSkills.length > 0 ? (
              data.verifiedSkills.map((skill) => (
                <div className="dashboard-skill-card" key={skill}>
                  <span className="dashboard-card-icon">🏆</span>
                  <div>
                    <h3>{skill}</h3>
                    <p>Successfully passed the skill quiz.</p>
                  </div>
                  <span className="verified-badge">Verified</span>
                </div>
              ))
            ) : (
              <p>No verified skills yet. Pass a skill quiz to earn verification.</p>
            )}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="dashboard-actions">
          <div className="dashboard-action-intro">
            <p className="section-label">QUICK ACTIONS</p>
            <h2>What would you like to do?</h2>
            <p>
              Continue your learning journey or discover someone
              to exchange skills with.
            </p>
          </div>

          <div className="action-buttons">
            <Link to="/matching" className="dashboard-primary-button">
              Find Skill Matches →
            </Link>

            <Link to="/quiz" className="dashboard-secondary-button">
              Verify a Skill
            </Link>

            <Link to="/profile" className="dashboard-secondary-button">
              View My Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;