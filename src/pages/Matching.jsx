import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "truequeDashboardData";

const defaultSkills = [
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

function getSavedData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    return {
      skills: saved?.skills || defaultSkills,
      learning: saved?.learning || [],
      teaching: saved?.teaching || [],
      matches: saved?.matches || [],
      verified: saved?.verified || [],
    };
  } catch {
    return {
      skills: defaultSkills,
      learning: [],
      teaching: [],
      matches: [],
      verified: [],
    };
  }
}

function Matching() {
  const [data, setData] = useState(getSavedData);
  const [search, setSearch] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [message, setMessage] = useState("");

  // Save the student's skills and choices
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  // Add a new skill entered by the student
  const handleAddSkill = (e) => {
    e.preventDefault();

    const skillName = newSkill.trim();

    if (!skillName) {
      setMessage("Please enter a skill name.");
      return;
    }

    const alreadyExists = data.skills.some(
      (skill) =>
        skill.name.toLowerCase() === skillName.toLowerCase()
    );

    if (alreadyExists) {
      setMessage("This skill is already available.");
      return;
    }

    const newSkillItem = {
      name: skillName,
      icon: "✦",
      description:
        newDescription.trim() ||
        `Explore and develop your ${skillName} skills.`,
    };

    setData((previous) => ({
      ...previous,
      skills: [...previous.skills, newSkillItem],
    }));

    setNewSkill("");
    setNewDescription("");
    setMessage(`${skillName} has been added successfully!`);
  };

  // Add a skill to the student's learning list
  const handleLearn = (skillName) => {
    setData((previous) => {
      if (previous.learning.includes(skillName)) {
        setMessage("This skill is already in your learning list.");
        return previous;
      }

      setMessage(`${skillName} added to Skills Learning.`);

      return {
        ...previous,
        learning: [...previous.learning, skillName],
      };
    });
  };

  // Add a skill to the student's teaching list
  const handleTeach = (skillName) => {
    setData((previous) => {
      if (previous.teaching.includes(skillName)) {
        setMessage("This skill is already in your teaching list.");
        return previous;
      }

      setMessage(`${skillName} added to Skills Teaching.`);

      return {
        ...previous,
        teaching: [...previous.teaching, skillName],
      };
    });
  };

  // Create a frontend match for the selected skill
  const handleCreateMatch = (skillName) => {
    setData((previous) => {
      if (previous.matches.includes(skillName)) {
        setMessage("A match for this skill already exists.");
        return previous;
      }

      setMessage(`A match for ${skillName} has been created.`);

      return {
        ...previous,
        matches: [...previous.matches, skillName],
      };
    });
  };

  const filteredSkills = data.skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

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
            Discover skills you want to learn, share what you know,
            and connect with people through skill exchange.
          </p>
        </div>
      </section>

      {/* ADD NEW SKILL */}
      <section className="add-skill-section">
        <div className="add-skill-container">
          <p className="section-label">PERSONALIZE YOUR JOURNEY</p>

          <h2>Add a Skill</h2>

          <p>
            Can't find the skill you need? Add your own skill to TRUEQUE.
          </p>

          <form className="add-skill-form" onSubmit={handleAddSkill}>
            <input
              type="text"
              placeholder="Enter skill name (e.g. Python, Baking, Excel)"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />

            <input
              type="text"
              placeholder="Short description (optional)"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />

            <button type="submit">+ Add Skill</button>
          </form>

          {message && (
            <p className="skill-action-message">{message}</p>
          )}
        </div>
      </section>

      {/* SEARCH */}
      <section className="skills-search-section">
        <div className="skills-search-container">
          <p className="section-label">FIND A SKILL</p>

          <h2>What would you like to learn or teach?</h2>

          <div className="skill-search-box">
            <input
              type="text"
              placeholder="Search for a skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="button" onClick={() => setSearch("")}>
              Clear
            </button>
          </div>
        </div>
      </section>

      {/* SKILL COUNTS */}
      <section className="my-skill-summary">
        <div>
          <strong>{data.learning.length}</strong>
          <span>Skills Learning</span>
        </div>

        <div>
          <strong>{data.teaching.length}</strong>
          <span>Skills Teaching</span>
        </div>

        <div>
          <strong>{data.matches.length}</strong>
          <span>My Matches</span>
        </div>

        <div>
          <strong>{data.verified.length}</strong>
          <span>Verified Skills</span>
        </div>
      </section>

      {/* SKILL CARDS */}
      <section className="explore-skills-section">
        <div className="explore-heading">
          <div>
            <p className="section-label">AVAILABLE SKILLS</p>
            <h2>Explore All Skills</h2>
          </div>

          <p>
            Select how you want to participate in each skill.
          </p>
        </div>

        <div className="professional-skills-grid">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => {
              const isLearning = data.learning.includes(skill.name);
              const isTeaching = data.teaching.includes(skill.name);
              const isMatched = data.matches.includes(skill.name);

              return (
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

                    <div className="skill-action-buttons">
                      <button
                        type="button"
                        className={isLearning ? "skill-action active" : "skill-action"}
                        onClick={() => handleLearn(skill.name)}
                      >
                        {isLearning ? "✓ Learning" : "Learn"}
                      </button>

                      <button
                        type="button"
                        className={isTeaching ? "skill-action active" : "skill-action"}
                        onClick={() => handleTeach(skill.name)}
                      >
                        {isTeaching ? "✓ Teaching" : "Teach"}
                      </button>

                      <button
                        type="button"
                        className={isMatched ? "skill-action active" : "skill-action"}
                        onClick={() => handleCreateMatch(skill.name)}
                      >
                        {isMatched ? "✓ Matched" : "Create Match"}
                      </button>
                    </div>

                    <Link
                      to="/quiz"
                      className="verify-skill-link"
                    >
                      Verify Skill →
                    </Link>

                    {(isLearning || isTeaching || isMatched) && (
                      <div className="skill-status">
                        {isLearning && <span>Learning</span>}
                        {isTeaching && <span>Teaching</span>}
                        {isMatched && <span>Match Created</span>}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-skills">
              <h3>No skills found</h3>
              <p>Try another search or add this skill above.</p>
            </div>
          )}
        </div>
      </section>

      {/* STUDENT'S SELECTED SKILLS */}
      <section className="student-selected-skills">
        <p className="section-label">YOUR ACTIVITY</p>
        <h2>My Skills and Matches</h2>

        <div className="selected-skill-columns">
          <div className="selected-skill-box">
            <h3>Skills I'm Learning</h3>
            {data.learning.length ? (
              data.learning.map((skill) => (
                <p key={skill}>✓ {skill}</p>
              ))
            ) : (
              <p>No learning skills selected yet.</p>
            )}
          </div>

          <div className="selected-skill-box">
            <h3>Skills I'm Teaching</h3>
            {data.teaching.length ? (
              data.teaching.map((skill) => (
                <p key={skill}>✓ {skill}</p>
              ))
            ) : (
              <p>No teaching skills selected yet.</p>
            )}
          </div>

          <div className="selected-skill-box">
            <h3>My Matches</h3>
            {data.matches.length ? (
              data.matches.map((skill) => (
                <p key={skill}>🤝 {skill}</p>
              ))
            ) : (
              <p>No matches created yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="matching-cta">
        <div>
          <p className="section-label">KEEP GROWING</p>
          <h2>Ready to continue your journey?</h2>
          <p>
            Check your progress and manage your TRUEQUE profile.
          </p>
        </div>

        <Link to="/dashboard" className="matching-cta-button">
          Go to Dashboard →
        </Link>
      </section>
    </div>
  );
}

export default Matching;