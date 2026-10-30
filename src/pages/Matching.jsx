import React, { useState } from "react";
import { Link } from "react-router-dom";

// Read saved data from localStorage
const getSavedData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

// Save data to localStorage
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const defaultSkills = [
  // Programming
  { name: "Programming", category: "Programming", icon: "💻" },
  { name: "C Programming", category: "Programming", icon: "💻" },
  { name: "C++", category: "Programming", icon: "💻" },
  { name: "Java", category: "Programming", icon: "☕" },
  { name: "Python", category: "Programming", icon: "🐍" },
  { name: "JavaScript", category: "Programming", icon: "🟨" },
  { name: "Data Structures", category: "Programming", icon: "📚" },
  { name: "Data Structures and Algorithms", category: "Programming", icon: "📊" },

  // Web Development
  { name: "Web Development", category: "Web Development", icon: "🌐" },
  { name: "Frontend Development", category: "Web Development", icon: "🎨" },
  { name: "Backend Development", category: "Web Development", icon: "⚙️" },
  { name: "Full Stack Development", category: "Web Development", icon: "🚀" },
  { name: "HTML", category: "Web Development", icon: "🌐" },
  { name: "CSS", category: "Web Development", icon: "🎨" },
  { name: "React.js", category: "Web Development", icon: "⚛️" },
  { name: "Node.js", category: "Web Development", icon: "🟢" },
  { name: "PHP", category: "Web Development", icon: "🐘" },
  { name: "Angular", category: "Web Development", icon: "🅰️" },

  // Database
  { name: "SQL", category: "Database", icon: "🗄️" },
  { name: "MySQL", category: "Database", icon: "🗄️" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "Database Management", category: "Database", icon: "📂" },

  // Data and AI
  { name: "Data Science", category: "Data & AI", icon: "📊" },
  { name: "Data Analytics", category: "Data & AI", icon: "📈" },
  { name: "Machine Learning", category: "Data & AI", icon: "🤖" },
  { name: "Artificial Intelligence", category: "Data & AI", icon: "🧠" },

  // Design
  { name: "UI/UX Design", category: "Design", icon: "✏️" },
  { name: "Graphic Design", category: "Design", icon: "🎨" },
  { name: "Canva", category: "Design", icon: "🖌️" },
  { name: "Figma", category: "Design", icon: "🖼️" },
  { name: "Photoshop", category: "Design", icon: "📷" },

  // Professional Skills
  { name: "Communication", category: "Professional Skills", icon: "💬" },
  { name: "English Speaking", category: "Professional Skills", icon: "🗣️" },
  { name: "Public Speaking", category: "Professional Skills", icon: "🎤" },
  { name: "Leadership", category: "Professional Skills", icon: "⭐" },
  { name: "Teamwork", category: "Professional Skills", icon: "🤝" },
  { name: "Problem Solving", category: "Professional Skills", icon: "🧩" },
  { name: "Interview Preparation", category: "Professional Skills", icon: "💼" },
  { name: "Resume Writing", category: "Professional Skills", icon: "📄" },

  // Other Skills
  { name: "Photography", category: "Other Skills", icon: "📸" },
  { name: "Video Editing", category: "Other Skills", icon: "🎬" },
  { name: "Digital Marketing", category: "Other Skills", icon: "📱" },
  { name: "Content Writing", category: "Other Skills", icon: "✍️" },
  { name: "Excel", category: "Other Skills", icon: "📊" },
  { name: "PowerPoint", category: "Other Skills", icon: "📽️" },
  { name: "Cyber Security", category: "Other Skills", icon: "🔐" },
  { name: "Cloud Computing", category: "Other Skills", icon: "☁️" },
];

function Matching() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const [learningSkills, setLearningSkills] = useState(() =>
    getSavedData("truequeLearningSkills")
  );

  const [teachingSkills, setTeachingSkills] = useState(() =>
    getSavedData("truequeTeachingSkills")
  );

  const [matches, setMatches] = useState(() =>
    getSavedData("truequeMatches")
  );

  const [customSkills, setCustomSkills] = useState(() =>
    getSavedData("truequeCustomSkills")
  );

  const [message, setMessage] = useState("");

  const allSkills = [...defaultSkills, ...customSkills];

  const categories = [
    "All Skills",
    "Programming",
    "Web Development",
    "Database",
    "Data & AI",
    "Design",
    "Professional Skills",
    "Other Skills",
    "My Skills",
  ];

  const filteredSkills = allSkills.filter((skill) => {
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All Skills" ||
      skill.category === activeCategory ||
      (activeCategory === "My Skills" &&
        (learningSkills.includes(skill.name) ||
          teachingSkills.includes(skill.name)));

    return matchesSearch && matchesCategory;
  });

  // Add or remove a learning skill
  const handleLearn = (skillName) => {
    let updatedSkills;

    if (learningSkills.includes(skillName)) {
      updatedSkills = learningSkills.filter(
        (skill) => skill !== skillName
      );
      setMessage(`${skillName} removed from your learning skills.`);
    } else {
      updatedSkills = [...learningSkills, skillName];
      setMessage(`${skillName} added to your learning skills.`);
    }

    setLearningSkills(updatedSkills);
    saveData("truequeLearningSkills", updatedSkills);
  };

  // Add or remove a teaching skill
  const handleTeach = (skillName) => {
    let updatedSkills;

    if (teachingSkills.includes(skillName)) {
      updatedSkills = teachingSkills.filter(
        (skill) => skill !== skillName
      );
      setMessage(`${skillName} removed from your teaching skills.`);
    } else {
      updatedSkills = [...teachingSkills, skillName];
      setMessage(`${skillName} added to your teaching skills.`);
    }

    setTeachingSkills(updatedSkills);
    saveData("truequeTeachingSkills", updatedSkills);
  };

  // Create a match request for a skill
  const handleMatch = (skillName) => {
    if (matches.includes(skillName)) {
      setMessage(`You have already created a match request for ${skillName}.`);
      return;
    }

    const updatedMatches = [...matches, skillName];

    setMatches(updatedMatches);
    saveData("truequeMatches", updatedMatches);

    setMessage(`Your match request for ${skillName} has been recorded.`);
  };

  // Add a skill that is not already in the list
  const handleAddCustomSkill = () => {
    const skillName = search.trim();

    if (!skillName) {
      setMessage("Please enter a skill name first.");
      return;
    }

    const alreadyExists = allSkills.some(
      (skill) =>
        skill.name.toLowerCase() === skillName.toLowerCase()
    );

    if (alreadyExists) {
      setMessage("This skill is already available. Select it from the list.");
      return;
    }

    const newSkill = {
      name: skillName,
      category: "Other Skills",
      icon: "⭐",
    };

    const updatedCustomSkills = [...customSkills, newSkill];

    setCustomSkills(updatedCustomSkills);
    saveData("truequeCustomSkills", updatedCustomSkills);

    setSearch(skillName);
    setActiveCategory("All Skills");
    setMessage(`${skillName} has been added successfully.`);
  };

  return (
    <div className="skills-page">

      {/* HERO AND SEARCH */}
      <section className="skills-hero">
        <div className="skills-hero-content">
          <p className="section-label">FIND A SKILL</p>

          <h1>
            What would you like to
            <br />
            <span>learn or teach?</span>
          </h1>

          <p>
            Explore skills, share your knowledge, and connect
            with learners and teachers through TRUEQUE.
          </p>

          <div className="skill-search-box">
            <input
              type="text"
              placeholder="Search for a skill... e.g. Full Stack, Python, React"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setSearch(search.trim())}
            >
              Search
            </button>

            <button
              type="button"
              className="clear-search-button"
              onClick={() => setSearch("")}
            >
              Clear
            </button>
          </div>

          {search.trim() &&
            !allSkills.some(
              (skill) =>
                skill.name.toLowerCase() === search.trim().toLowerCase()
            ) && (
              <button
                className="add-custom-skill-button"
                onClick={handleAddCustomSkill}
              >
                + Add "{search.trim()}" as a new skill
              </button>
            )}
        </div>
      </section>

      {/* LIVE COUNTS */}
      <section className="dashboard-stats skills-stats">

        <div className="dashboard-stat-card">
          <div className="stat-icon">📚</div>
          <h3>Skills Learning</h3>
          <strong>{learningSkills.length}</strong>
          <p>Skills you have selected to learn</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🎓</div>
          <h3>Skills Teaching</h3>
          <strong>{teachingSkills.length}</strong>
          <p>Skills you have selected to teach</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🤝</div>
          <h3>My Matches</h3>
          <strong>{matches.length}</strong>
          <p>Match requests you have created</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">🏆</div>
          <h3>Verified Skills</h3>
          <strong>{getSavedData("truequeVerifiedSkills").length}</strong>
          <p>Skills successfully verified</p>
        </div>

      </section>

      {/* SKILL CATEGORIES */}
      <section className="explore-skills-section">

        <div className="explore-heading">
          <div>
            <p className="section-label">POPULAR SKILLS</p>
            <h2>Explore All Skills</h2>
          </div>

          <p>
            Choose what you want to learn, teach, or match.
          </p>
        </div>

        <div className="skill-category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "category-active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SKILL CARDS */}
        <div className="professional-skills-grid">

          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => {
              const isLearning = learningSkills.includes(skill.name);
              const isTeaching = teachingSkills.includes(skill.name);
              const hasMatch = matches.includes(skill.name);

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
                    <p>{skill.category}</p>

                    <div className="skill-action-buttons">

                      <button
                        className={`skill-action-button ${
                          isLearning ? "skill-action-active" : ""
                        }`}
                        onClick={() => handleLearn(skill.name)}
                      >
                        {isLearning ? "✓ Learning" : "Learn"}
                      </button>

                      <button
                        className={`skill-action-button ${
                          isTeaching ? "skill-action-active" : ""
                        }`}
                        onClick={() => handleTeach(skill.name)}
                      >
                        {isTeaching ? "✓ Teaching" : "Teach"}
                      </button>

                      <button
                        className={`skill-action-button ${
                          hasMatch ? "skill-action-active" : ""
                        }`}
                        onClick={() => handleMatch(skill.name)}
                      >
                        {hasMatch ? "✓ Requested" : "Create Match"}
                      </button>

                    </div>

                    <Link
                      to="/quiz"
                      className="skill-card-button"
                    >
                      Verify Skill →
                    </Link>

                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-skills">
              <h3>No skills found</h3>
              <p>
                Try another search or add your own skill.
              </p>
            </div>
          )}

        </div>

        {message && (
          <p className="skill-feedback-message" role="status">
            {message}
          </p>
        )}

      </section>

      {/* SELECTED SKILLS SUMMARY */}
      <section className="selected-skills-section">

        <p className="section-label">YOUR SELECTIONS</p>
        <h2>My Skills Summary</h2>

        <div className="selected-skills-grid">

          <div className="selected-skill-box">
            <h3>📚 Skills I'm Learning</h3>

            {learningSkills.length > 0 ? (
              learningSkills.map((skill) => (
                <p key={skill}>✓ {skill}</p>
              ))
            ) : (
              <p>No learning skills selected yet.</p>
            )}
          </div>

          <div className="selected-skill-box">
            <h3>🎓 Skills I Can Teach</h3>

            {teachingSkills.length > 0 ? (
              teachingSkills.map((skill) => (
                <p key={skill}>✓ {skill}</p>
              ))
            ) : (
              <p>No teaching skills selected yet.</p>
            )}
          </div>

          <div className="selected-skill-box">
            <h3>🤝 My Match Requests</h3>

            {matches.length > 0 ? (
              matches.map((skill) => (
                <p key={skill}>✓ {skill}</p>
              ))
            ) : (
              <p>No match requests created yet.</p>
            )}
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="matching-cta">
        <div>
          <p className="section-label">YOUR LEARNING JOURNEY</p>
          <h2>Ready to grow your skills?</h2>
          <p>
            Select your skills and continue building your
            learning and teaching profile.
          </p>
        </div>

        <Link to="/profile" className="matching-cta-button">
          View My Profile →
        </Link>
      </section>

    </div>
  );
}

export default Matching;