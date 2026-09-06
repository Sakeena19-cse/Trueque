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
    name: 'Priya M.',
    loc: 'Chennai, India',
    wants: 'UI/UX Design',
    offers: 'Content Writing',
  },
  {
    name: 'Karthik S.',
    loc: 'Bangalore, India',
    wants: 'Web Development',
    offers: 'Python Programming',
  },
  {
    name: 'Ananya R.',
    loc: 'Chennai, India',
    wants: 'Basic Spanish',
    offers: 'Graphic Design',
  },
];

export default function Matching() {
  return (
    <div className="container matching-page">

      {/* HERO / SEARCH SECTION
          Existing colour and overall design are kept */}
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

              <h4>
                {skill.name}
              </h4>

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

              {/* Profile */}
              <div className="match-profile">

                <div className="avatar">
                  {match.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div className="profile-info">

                  <h4>
                    {match.name}
                  </h4>

                  <p>
                    📍 {match.loc}
                  </p>

                </div>

              </div>


              {/* Wants */}
              <div className="match-row">

                <span className="match-label">
                  Wants to learn
                </span>

                <span className="skill-chip">
                  {match.wants}
                </span>

              </div>


              {/* Offers */}
              <div className="match-row">

                <span className="match-label">
                  In exchange for
                </span>

                <span className="skill-chip">
                  {match.offers}
                </span>

              </div>


              {/* Buttons */}
              <div className="match-actions">

                <button className="accept-btn">
                  Accept
                </button>

                <button className="decline-btn">
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