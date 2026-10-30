import React, { useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "truequeDashboardData";

const getDashboardData = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      learningSkills: saved?.learningSkills || [],
      teachingSkills: saved?.teachingSkills || [],
      matches: saved?.matches || [],
      verifiedSkills: saved?.verifiedSkills || [],
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

const saveSkillAction = (category, skillName) => {
  const data = getDashboardData();

  if (!data[category].includes(skillName)) {
    data[category] = [...data[category], skillName];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event("focus"));
    return true;
  }

  return false;
};

function Matching() {
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  const skills = [
    {
      name: "Programming",
      icon: "</>",
      description: "Learn coding, programming languages and software development.",
    },
    {
      name: "Web Development",
      icon: "◎",
      description: "Build websites and learn modern web technologies.",
    },
    {
      name: "UI/UX Design",
      icon: "✎",
      description: "Learn user interface and user experience design.",
    },
    {
      name: "Photography",
      icon: "📷",
      description: "Improve photography and creative visual skills.",
    },
    {
      name: "Communication",
      icon: "💬",
      description: "Develop communication and presentation skills.",
    },
    {
      name: "Digital Marketing",
      icon: "📈",
      description: "Learn social media, branding and digital marketing.",
    },
  ];

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAction = (category, skillName, actionName) => {
    const added = saveSkillAction(category, skillName);

    setNotice(
      added
        ? `${skillName} added to ${actionName} successfully!`
        : `${skillName} is already in your ${actionName} list.`
    );
  };

  return (
    <div className="skills-page">
      {/* HERO */}
      <section className="skills-hero">
        <div className="skills-hero-content">
          <p className="section-label">TRUEQUE SKILLS</p>

          <h1>
            Explore Skills.
            <br />
            <span>Find Your Match.</span>
          </h1>

          <p>
            Discover skills you want to learn, find people
            who can teach them, and share the knowledge
            you already have.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="skills-search-section">
        <div className="skills-search-container">
          <p className="section-label">FIND A SKILL</p>

          <h2>What would you like to learn?</h2>

          <div className="skill-search-box">
            <input
              type="text"
              placeholder="Search for a skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="button">Search</button>
          </div>

          {notice && (
            <p role="status" style={{ marginTop: "15px" }}>
              {notice}
            </p>
          )}
        </div>
      </section>

      {/* SKILLS */}
      <section className="explore-skills-section">
        <div className="explore-heading">
          <div>
            <p className="section-label">POPULAR SKILLS</p>
            <h2>Explore Skills</h2>
          </div>

          <p>Choose a skill and start your learning journey.</p>
        </div>

        <div className="professional-skills-grid">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <div
                className="professional-skill-card"
                key={skill.name}
              >
                <div className="professional-skill-icon">
                  {skill.icon}
                </div>

                <div className="professional-skill-content">
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginTop: "15px",
                    }}
                  >
                    <button
                      type="button"
                      className="skill-card-button"
                      onClick={() =>
                        handleAction(
                          "learningSkills",
                          skill.name,
                          "learning skills"
                        )
                      }
                    >
                      Learn
                    </button>

                    <button
                      type="button"
                      className="skill-card-button"
                      onClick={() =>
                        handleAction(
                          "teachingSkills",
                          skill.name,
                          "teaching skills"
                        )
                      }
                    >
                      Teach
                    </button>

                    <button
                      type="button"
                      className="skill-card-button"
                      onClick={() =>
                        handleAction(
                          "matches",
                          skill.name,
                          "matches"
                        )
                      }
                    >
                      Create Match
                    </button>
                  </div>

                  <Link
                    to="/quiz"
                    className="skill-card-button"
                    style={{
                      display: "inline-block",
                      marginTop: "12px",
                    }}
                  >
                    Verify Skill →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-skills">
              <h3>No skills found</h3>
              <p>Try searching for another skill.</p>
            </div>
          )}
        </div>
      </section>

      {/* MATCH CTA */}
      <section className="matching-cta">
        <div>
          <p className="section-label">SKILL MATCHING</p>

          <h2>Ready to find your skill match?</h2>

          <p>
            Connect with people who can teach what
            you want to learn and share what you know.
          </p>
        </div>

        <Link
          to="/dashboard"
          className="matching-cta-button"
        >
          View Dashboard →
        </Link>
      </section>
    </div>
  );
}

export default Matching;