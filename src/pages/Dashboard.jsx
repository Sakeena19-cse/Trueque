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
  const [completedLearningSkills, setCompletedLearningSkills] = useState(() => {
  try {
    return JSON.parse(
      localStorage.getItem("truequeCompletedLearningSkills")
    ) || [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem(
    "truequeCompletedLearningSkills",
    JSON.stringify(completedLearningSkills)
  );
}, [completedLearningSkills]);

const markSkillCompleted = (skill) => {
  setCompletedLearningSkills((previous) =>
    previous.includes(skill)
      ? previous.filter((item) => item !== skill)
      : [...previous, skill]
  );
};

const totalLearningSkills = data.learningSkills.length;

const completedCount = data.learningSkills.filter(
  (skill) => completedLearningSkills.includes(skill)
).length;

const progressPercentage = totalLearningSkills > 0
  ? Math.round((completedCount / totalLearningSkills) * 100)
  : 0;
  const badges = [
  {
    id: 1,
    title: "First Skill",
    description: "Complete your first learning skill.",
    icon: "🌱",
    unlocked: completedCount >= 1,
  },
  {
    id: 2,
    title: "Learning Champion",
    description: "Complete 3 learning skills.",
    icon: "🏆",
    unlocked: completedCount >= 3,
  },
  {
    id: 3,
    title: "Skill Verified",
    description: "Successfully verify a skill.",
    icon: "🎖️",
    unlocked: data.verifiedSkills.length >= 1,
  },
  {
    id: 4,
    title: "Community Helper",
    description: "Add a skill that you can teach.",
    icon: "🤝",
    unlocked:
      data.teachingSkills.length >= 1 || data.matches.length >= 1,
  },
  {
    id: 5,
    title: "Learning Explorer",
    description: "Select your first learning skill.",
    icon: "🚀",
    unlocked: data.learningSkills.length >= 1,
  },
];

const unlockedBadges = badges.filter((badge) => badge.unlocked).length;
  const [showNotifications, setShowNotifications] = useState(false);

const [notifications, setNotifications] = useState(() => {
  try {
    const saved = localStorage.getItem("truequeNotifications");

    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: "Welcome to TRUEQUE!",
        message: "Start your skill-sharing journey today.",
        type: "welcome",
        read: false
      },
      {
        id: 2,
        title: "Explore New Skills",
        message: "Discover skills you can learn and teach.",
        type: "skill",
        read: false
      },
      {
        id: 3,
        title: "Complete Your Profile",
        message: "Add your personal details to your profile.",
        type: "profile",
        read: true
      },
      {
        id: 4,
        title: "Skill Verification",
        message: "Take a quiz to verify your skills.",
        type: "quiz",
        read: false
      }
    ];
  } catch {
    return [];
  }
});

const unreadCount = notifications.filter(
  (notification) => !notification.read
).length;

useEffect(() => {
  localStorage.setItem(
    "truequeNotifications",
    JSON.stringify(notifications)
  );
}, [notifications]);

const markAsRead = (id) => {
  setNotifications((previous) =>
    previous.map((item) =>
      item.id === id ? { ...item, read: true } : item
    )
  );
};

const markAllAsRead = () => {
  setNotifications((previous) =>
    previous.map((item) => ({ ...item, read: true }))
  );
};

const clearNotifications = () => {
  setNotifications([]);
};

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
      {/* NOTIFICATION CENTER */}

<section style={{
  maxWidth: "1200px",
  margin: "25px auto",
  padding: "0 20px"
}}>

  <div style={{
    display: "flex",
    justifyContent: "flex-end",
    position: "relative"
  }}>

    <button
      type="button"
      onClick={() => setShowNotifications(!showNotifications)}
      style={{
        background: "#800020",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "13px 20px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: "bold"
      }}
    >
      🔔 Notifications ({unreadCount})
    </button>

  </div>

  {showNotifications && (
    <div style={{
      background: "white",
      border: "1px solid #eadfce",
      borderRadius: "14px",
      padding: "22px",
      marginTop: "15px",
      boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px"
      }}>
        <h2 style={{ color: "#800020" }}>
          Notification Center
        </h2>

        <div style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap"
        }}>
          <button
            type="button"
            onClick={markAllAsRead}
            style={{
              background: "#f1dfb5",
              color: "#650018",
              border: "none",
              padding: "9px 12px",
              borderRadius: "7px",
              cursor: "pointer"
            }}
          >
            Mark All Read
          </button>

          <button
            type="button"
            onClick={clearNotifications}
            style={{
              background: "#800020",
              color: "white",
              border: "none",
              padding: "9px 12px",
              borderRadius: "7px",
              cursor: "pointer"
            }}
          >
            Clear All
          </button>
        </div>
      </div>

      {notifications.length > 0 ? (
        notifications.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              padding: "16px 10px",
              borderBottom: "1px solid #eee3d8",
              background: item.read ? "white" : "#fff5e8"
            }}
          >
            <div>
              <h3 style={{
                color: "#4a2028",
                margin: "0 0 7px"
              }}>
                {item.title}
                {!item.read && (
                  <span style={{
                    color: "#800020",
                    fontSize: "12px",
                    marginLeft: "8px"
                  }}>
                    ● New
                  </span>
                )}
              </h3>

              <p style={{
                color: "#777",
                margin: 0,
                fontSize: "14px"
              }}>
                {item.message}
              </p>
            </div>

            {!item.read && (
              <button
                type="button"
                onClick={() => markAsRead(item.id)}
                style={{
                  background: "#800020",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "7px",
                  cursor: "pointer",
                  flexShrink: 0
                }}
              >
                Read
              </button>
            )}
          </div>
        ))
      ) : (
        <p style={{ color: "#777", padding: "20px 0" }}>
          No notifications available.
        </p>
      )}

    </div>
  )}

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

      {/* LEARNING PROGRESS TRACKER */}

<section className="learning-progress-section">
  <div className="learning-progress-heading">
    <p className="section-label">YOUR GROWTH</p>
    <h2>Learning Progress Tracker</h2>
    <p>Track your skills and celebrate your learning achievements.</p>
  </div>

  <div className="learning-overview">
    <div>
      <h3>{progressPercentage}%</h3>
      <p>Overall Progress</p>
    </div>

    <div>
      <h3>{completedCount}/{totalLearningSkills}</h3>
      <p>Skills Completed</p>
    </div>

    <div>
      <h3>{totalLearningSkills - completedCount}</h3>
      <p>Skills In Progress</p>
    </div>
  </div>

  <div className="learning-progress-bar">
    <div
      className="learning-progress-fill"
      style={{ width: `${progressPercentage}%` }}
    />
  </div>

  <div className="learning-progress-list">
    {data.learningSkills.length > 0 ? (
      data.learningSkills.map((skill) => {
        const completed = completedLearningSkills.includes(skill);

        return (
          <div className="learning-progress-item" key={skill}>
            <div>
              <h3>{skill}</h3>
              <p>{completed ? "Completed" : "In Progress"}</p>
            </div>

            <button
              type="button"
              onClick={() => markSkillCompleted(skill)}
              className="learning-complete-button"
            >
              {completed ? "Undo" : "Mark Completed"}
            </button>
          </div>
        );
      })
    ) : (
      <p>Select a learning skill to start tracking your progress.</p>
    )}
  </div>
</section>
{/* ACHIEVEMENTS & BADGES */}
<section className="achievements-section">

  <div className="achievements-heading">
    <p className="section-label">YOUR ACHIEVEMENTS</p>
    <h2>Achievements & Badges</h2>
    <p>Celebrate your milestones and unlock new achievements.</p>
  </div>

  <div className="badge-summary">
    <h3>{unlockedBadges}/{badges.length}</h3>
    <p>Badges Unlocked</p>
  </div>

  <div className="achievements-grid">
    {badges.map((badge) => (
      <div
        className={`achievement-card ${
          badge.unlocked ? "badge-unlocked" : "badge-locked"
        }`}
        key={badge.id}
      >
        <div className="achievement-icon">
          {badge.unlocked ? badge.icon : "🔒"}
        </div>

        <h3>{badge.title}</h3>

        <p>{badge.description}</p>

        <span>
          {badge.unlocked ? "✓ Unlocked" : "Locked"}
        </span>
      </div>
    ))}
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