import React from "react";
import { Link } from "react-router-dom";

const activity = [
  {
    icon: "JS",
    title: "JavaScript Learning",
    desc: "Continue your progress and improve your skills.",
    status: "In Progress",
  },
  {
    icon: "⇄",
    title: "Skill Exchange",
    desc: "You recently connected with a new learner.",
    status: "Completed",
  },
  {
    icon: "KS",
    title: "Knowledge Sharing",
    desc: "Share your knowledge and learn from others.",
    status: "In Progress",
  },
];

function Dashboard() {
  return (
    <main className="dashboard-page">

      {/* Small intro text */}
      <p className="dashboard-intro">
        Your completed learning sessions.
      </p>

      {/* QUICK ACTIONS */}
      <section className="dashboard-section">
        <p className="dashboard-label">QUICK ACTIONS</p>

        <h1 className="dashboard-title">
          Continue Your Journey
        </h1>

        <div className="quick-actions">

          <Link to="/search-skills" className="quick-action-btn">
            <span className="action-icon">⌕</span>
            <span>Find a Skill</span>
          </Link>

          <Link to="/matching" className="quick-action-btn">
            <span className="action-icon">♣</span>
            <span>Find a Match</span>
          </Link>

          <Link to="/profile" className="quick-action-btn">
            <span className="action-icon">♙</span>
            <span>View Profile</span>
          </Link>

        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="dashboard-section recent-section">

        <p className="dashboard-label">RECENT ACTIVITY</p>

        <h2 className="dashboard-title">
          Your Recent Activity
        </h2>

        <div className="activity-list">

          {activity.map((item, index) => (
            <div className="activity-card" key={index}>

              <div className="activity-icon">
                {item.icon}
              </div>

              <div className="activity-content">
                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <div className="activity-status">
                  <span className="status-dot"></span>
                  {item.status}
                </div>
              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Dashboard;


