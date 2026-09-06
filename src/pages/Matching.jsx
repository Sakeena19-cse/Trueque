const popularSkills = [
  {
    name: 'Photoshop',
    tag: 'Design',
    level: 'Beginner',
    learners: 12,
  },
  {
    name: 'Python Programming',
    tag: 'Development',
    level: 'Intermediate',
    learners: 18,
  },
  {
    name: 'Content Writing',
    tag: 'Writing',
    level: 'Beginner',
    learners: 9,
  },
  {
    name: 'Public Speaking',
    tag: 'Communication',
    level: 'All Levels',
    learners: 7,
  },
];

const matches = [
  {
    initials: 'PM',
    name: 'Priya M.',
    loc: 'Chennai, India',
    wants: 'UI/UX Design',
    offers: 'Content Writing',
  },
  {
    initials: 'KS',
    name: 'Karthik S.',
    loc: 'Bangalore, India',
    wants: 'Web Development',
    offers: 'Python Programming',
  },
  {
    initials: 'AR',
    name: 'Ananya R.',
    loc: 'Chennai, India',
    wants: 'Basic Spanish',
    offers: 'Graphic Design',
  },
];

export default function Matching() {
  return (
    <div className="container matching-page">

      {/* SEARCH SKILLS */}
      <section className="matching-hero">

        <h1>Search Skills</h1>

        <p className="matching-subtitle">
          Find people to swap skills with
        </p>

        <div className="skill-search">
          <input
            type="text"
            placeholder="Search for skills, e.g., 'Photoshop', 'Python'..."
          />

          <button className="btn btn-primary">
            Search
          </button>
        </div>

      </section>


      {/* POPULAR SKILLS */}
      <section className="skills-section">

        <h3 className="section-title">
          Popular Skills
        </h3>

        <div className="popular-skills-grid">

          {popularSkills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <h4>{skill.name}</h4>

              <p className="skill-category">
                {skill.tag}
              </p>

              <span className="level-badge">
                {skill.level}
              </span>

              <p className="learner-count">
                {skill.learners} learners
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* SUGGESTED MATCHES */}
      <section className="matches-section">

        <h3 className="section-title">
          Suggested Matches
        </h3>

        <div className="matches-grid">

          {matches.map((match) => (
            <div className="match-card" key={match.name}>

              {/* PROFILE */}
              <div className="match-profile">

                <div className="match-avatar">
                  {match.initials}
                </div>

                <div className="profile-info">

                  <h4>{match.name}</h4>

                  <p className="location">
                    📍 {match.loc}
                  </p>

                </div>

              </div>


              {/* WANTS */}
              <div className="match-line">

                <span className="match-label">
                  Wants to learn
                </span>

                <span className="match-chip">
                  {match.wants}
                </span>

              </div>


              {/* OFFERS */}
              <div className="match-line">

                <span className="match-label">
                  In exchange for
                </span>

                <span className="match-chip">
                  {match.offers}
                </span>

              </div>


              {/* ACTION BUTTONS */}
              <div className="match-actions">

                <button className="match-accept">
                  Accept
                </button>

                <button className="match-decline">
                  Decline
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}