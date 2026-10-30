import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const skillList = [
  "Full Stack Developer",
  "Full Stack Web Development",
  "Full Stack JavaScript",
  "MERN Stack Development",
  "MEAN Stack Development",
  "Frontend Development",
  "Backend Development",
  "Web Development",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Python",
  "Java",
  "C Programming",
  "C++ Programming",
  "Data Structures",
  "Software Development",
  "Mobile App Development",
  "Android Development",
  "iOS Development",
  "UI/UX Design",
  "Graphic Design",
  "Figma",
  "Canva",
  "Adobe Photoshop",
  "Photography",
  "Video Editing",
  "Digital Marketing",
  "Social Media Marketing",
  "SEO",
  "Content Writing",
  "Communication Skills",
  "Public Speaking",
  "English Speaking",
  "Leadership",
  "Problem Solving",
  "Data Analytics",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Deep Learning",
  "SQL",
  "MySQL",
  "MongoDB",
  "Database Management",
  "Cloud Computing",
  "AWS",
  "Microsoft Azure",
  "Cybersecurity",
  "Ethical Hacking",
  "Excel",
  "Power BI",
  "Tableau",
  "Python for Data Science",
  "Teaching",
  "Mathematics",
  "Accounting",
  "Business Management"
];

function getSavedData(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function Matching() {
  const [search, setSearch] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const [learningSkills, setLearningSkills] = useState(
    () => getSavedData("truequeLearningSkills")
  );

  const [teachingSkills, setTeachingSkills] = useState(
    () => getSavedData("truequeTeachingSkills")
  );

  const [matches, setMatches] = useState(
    () => getSavedData("truequeMatches")
  );

  const [selectedSkill, setSelectedSkill] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "truequeLearningSkills",
      JSON.stringify(learningSkills)
    );
  }, [learningSkills]);

  useEffect(() => {
    localStorage.setItem(
      "truequeTeachingSkills",
      JSON.stringify(teachingSkills)
    );
  }, [teachingSkills]);

  useEffect(() => {
    localStorage.setItem(
      "truequeMatches",
      JSON.stringify(matches)
    );
  }, [matches]);

  const filteredSkills = skillList.filter((skill) =>
    skill.toLowerCase().includes(search.trim().toLowerCase())
  );

  const addLearningSkill = (skill) => {
    setLearningSkills((previous) =>
      previous.includes(skill) ? previous : [...previous, skill]
    );
    setSelectedSkill(skill);
  };

  const addTeachingSkill = (skill) => {
    setTeachingSkills((previous) =>
      previous.includes(skill) ? previous : [...previous, skill]
    );
    setSelectedSkill(skill);
  };

  const createMatch = (skill) => {
    setMatches((previous) =>
      previous.includes(skill) ? previous : [...previous, skill]
    );
    setSelectedSkill(skill);
  };

  const chooseSuggestion = (skill) => {
    setSearch(skill);
    setSelectedSkill(skill);
    setSuggestionsOpen(false);
  };

  const addCustomSkill = () => {
    const newSkill = search.trim();

    if (!newSkill) return;

    setSelectedSkill(newSkill);
    setSuggestionsOpen(false);
  };

  const clearSearch = () => {
    setSearch("");
    setSelectedSkill("");
    setSuggestionsOpen(false);
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

          <div className="skill-search-wrapper">

            <div className="skill-search-box">

              <input
                type="text"
                placeholder="Search any skill..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSuggestionsOpen(true);
                  setSelectedSkill("");
                }}
                onFocus={() => setSuggestionsOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filteredSkills.length > 0) {
                    chooseSuggestion(filteredSkills[0]);
                  }
                  if (e.key === "Escape") {
                    setSuggestionsOpen(false);
                  }
                }}
              />

              <button
                type="button"
                onClick={() => setSuggestionsOpen(true)}
              >
                Search
              </button>

              <button
                type="button"
                className="skill-clear-button"
                onClick={clearSearch}
              >
                Clear
              </button>

            </div>

            {/* GOOGLE-STYLE SUGGESTIONS */}

            {suggestionsOpen && search.trim() !== "" && (
              <div className="skill-suggestions">

                {filteredSkills.length > 0 ? (
                  filteredSkills.slice(0, 8).map((skill) => (
                    <button
                      type="button"
                      className="skill-suggestion-item"
                      key={skill}
                      onClick={() => chooseSuggestion(skill)}
                    >
                      <span>🔍</span>
                      {skill}
                    </button>
                  ))
                ) : (
                  <p className="no-suggestion">
                    No existing skill found. You can add your own.
                  </p>
                )}

                {!skillList.some(
                  (skill) =>
                    skill.toLowerCase() === search.trim().toLowerCase()
                ) && (
                  <button
                    type="button"
                    className="add-custom-skill"
                    onClick={addCustomSkill}
                  >
                    + Add "{search.trim()}" as a new skill
                  </button>
                )}

              </div>
            )}

          </div>

        </div>
      </section>

      {/* STUDENT COUNTS */}

      <section className="skill-stat-section">

        <div className="skill-stat-card">
          <strong>{learningSkills.length}</strong>
          <p>Skills Learning</p>
        </div>

        <div className="skill-stat-card">
          <strong>{teachingSkills.length}</strong>
          <p>Skills Teaching</p>
        </div>

        <div className="skill-stat-card">
          <strong>{matches.length}</strong>
          <p>My Matches</p>
        </div>

        <div className="skill-stat-card">
          <strong>0</strong>
          <p>Verified Skills</p>
        </div>

      </section>

      {/* SELECTED SKILL ACTIONS */}

      {selectedSkill && (
        <section className="selected-skill-section">

          <h2>{selectedSkill}</h2>
          <p>What would you like to do with this skill?</p>

          <div className="selected-skill-actions">

            <button onClick={() => addLearningSkill(selectedSkill)}>
              + Learn
            </button>

            <button onClick={() => addTeachingSkill(selectedSkill)}>
              + Teach
            </button>

            <button onClick={() => createMatch(selectedSkill)}>
              + Create Match
            </button>

            <Link to="/quiz">
              Verify Skill →
            </Link>

          </div>

          <button
            className="close-selected-skill"
            onClick={() => setSelectedSkill("")}
          >
            Close
          </button>

        </section>
      )}

      {/* ALL SKILLS */}

      <section className="explore-skills-section">

        <div className="explore-heading">
          <div>
            <p className="section-label">AVAILABLE SKILLS</p>
            <h2>Explore All Skills</h2>
          </div>

          <p>
            Select any skill to learn, teach or find a match.
          </p>
        </div>

        <div className="professional-skills-grid">

          {skillList.map((skill, index) => (
            <div className="professional-skill-card" key={skill}>

              <div className="professional-skill-icon">
                {index % 2 === 0 ? "</>" : "✦"}
              </div>

              <div className="professional-skill-content">

                <h3>{skill}</h3>

                <p>
                  Learn, teach and exchange knowledge in {skill}.
                </p>

                <div className="skill-card-actions">

                  <button onClick={() => addLearningSkill(skill)}>
                    Learn
                  </button>

                  <button onClick={() => addTeachingSkill(skill)}>
                    Teach
                  </button>

                  <button onClick={() => createMatch(skill)}>
                    Create Match
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
          ))}

        </div>

      </section>

      {/* SELECTED LEARNING AND TEACHING SKILLS */}

      <section className="my-skills-section">

        <div className="my-skills-column">
          <h2>My Learning Skills</h2>

          {learningSkills.length === 0 ? (
            <p>You have not selected any learning skills yet.</p>
          ) : (
            learningSkills.map((skill) => (
              <div className="my-skill-item" key={skill}>
                <span>{skill}</span>
                <button
                  onClick={() =>
                    setLearningSkills((previous) =>
                      previous.filter((item) => item !== skill)
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="my-skills-column">
          <h2>My Teaching Skills</h2>

          {teachingSkills.length === 0 ? (
            <p>You have not selected any teaching skills yet.</p>
          ) : (
            teachingSkills.map((skill) => (
              <div className="my-skill-item" key={skill}>
                <span>{skill}</span>
                <button
                  onClick={() =>
                    setTeachingSkills((previous) =>
                      previous.filter((item) => item !== skill)
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

      </section>

    </div>
  );
}

export default Matching;