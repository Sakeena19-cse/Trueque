import { Link } from "react-router-dom";

export default function Dashboard() {
  const username = localStorage.getItem("truequeUser") || "Learner";

  const features = [
    {
      title: "Find Matches",
      description: "Discover people who can exchange skills with you.",
      link: "/matching",
      action: "Explore Matches",
    },
    {
      title: "My Skills",
      description: "Manage your teaching and learning skills.",
      link: "/skills",
      action: "View Skills",
    },
    {
      title: "My Sessions",
      description: "View and manage your learning sessions.",
      link: "/session",
      action: "View Sessions",
    },
    {
      title: "Take a Quiz",
      description: "Test your knowledge and verify your skills.",
      link: "/quiz",
      action: "Start Quiz",
    },
    {
      title: "My Calendar",
      description: "Check your upcoming session schedule.",
      link: "/calendar",
      action: "View Calendar",
    },
    {
      title: "My Progress",
      description: "Track your learning journey and achievements.",
      link: "/progress",
      action: "View Progress",
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="page-container">

        <div className="dashboard-welcome">
          <div>
            <p className="dashboard-label">YOUR LEARNING SPACE</p>

            <h1>
              Welcome back, <span>{username}!</span>
            </h1>

            <p>
              Continue learning, share your knowledge and grow
              with the TRUEQUE community.
            </p>
          </div>

          <Link to="/profile" className="btn btn-primary">
            My Profile
          </Link>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h2>0</h2>
            <p>Skills Learning</p>
          </div>

          <div className="stat-card">
            <h2>0</h2>
            <p>Skills Teaching</p>
          </div>

          <div className="stat-card">
            <h2>0</h2>
            <p>Completed Sessions</p>
          </div>

          <div className="stat-card">
            <h2>0</h2>
            <p>Achievements</p>
          </div>
        </div>

        <section className="dashboard-section">
          <div className="section-heading">
            <h2>Explore TRUEQUE</h2>
            <p>Everything you need in one place.</p>
          </div>

          <div className="dashboard-grid">
            {features.map((feature, index) => (
              <div className="dashboard-card" key={index}>
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <Link to={feature.link}>
                  {feature.action} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-bottom">
          <div className="dashboard-bottom-card">
            <h3>Ready to Exchange Skills?</h3>

            <p>
              Find your perfect learning partner and start
              exchanging knowledge today.
            </p>

            <Link to="/matching" className="btn btn-primary">
              Find Your Match
            </Link>
          </div>

          <div className="dashboard-bottom-card">
            <h3>Share Your Knowledge</h3>

            <p>
              Add your skills and help others learn something new.
            </p>

            <Link to="/skills" className="btn btn-outline">
              Add Your Skills
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}