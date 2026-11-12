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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [skillType, setSkillType] = useState("All");

  // SAVE DATA
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

  // GET SKILL CATEGORY
  const getSkillCategory = (skill) => {
    const categories = {
      Programming: [
        "Full Stack", "Frontend", "Backend",
        "Web Development", "HTML", "CSS",
        "JavaScript", "React", "Angular", "Vue",
        "Node", "Express", "Python", "Java",
        "C Programming", "C++", "Software Development",
        "Mobile App", "Android", "iOS",
        "Data Structures", "SQL", "MySQL", "MongoDB"
      ],

      Design: [
        "UI/UX", "Graphic Design", "Figma",
        "Canva", "Photoshop", "Photography",
        "Video Editing"
      ],

      Business: [
        "Digital Marketing", "Social Media",
        "SEO", "Content Writing", "Accounting",
        "Business Management", "Excel", "Leadership"
      ],

      Data: [
        "Data Analytics", "Data Science",
        "Machine Learning", "Artificial Intelligence",
        "Deep Learning", "Power BI", "Tableau",
        "Database Management", "Cloud Computing",
        "AWS", "Microsoft Azure", "Cybersecurity",
        "Ethical Hacking"
      ],

      Other: [
        "Communication Skills", "Public Speaking",
        "English Speaking", "Problem Solving",
        "Teaching", "Mathematics"
      ]
    };

    for (const [category, skills] of Object.entries(categories)) {
      if (
        skills.some((item) =>
          skill.toLowerCase().includes(item.toLowerCase())
        )
      ) {
        return category;
      }
    }

    return "Other";
  };

  // FILTER SKILLS
  const filteredSkills = skillList.filter((skill) => {
    const matchesSearch = skill
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      getSkillCategory(skill) === selectedCategory;

    const matchesType =
      skillType === "All" ||
      (skillType === "Learning" &&
        learningSkills.includes(skill)) ||
      (skillType === "Teaching" &&
        teachingSkills.includes(skill));

    return matchesSearch && matchesCategory && matchesType;
  });

  // ADD LEARNING SKILL
  const addLearningSkill = (skill) => {
    setLearningSkills((previous) =>
      previous.includes(skill)
        ? previous
        : [...previous, skill]
    );

    setSelectedSkill(skill);
  };

  // ADD TEACHING SKILL
  const addTeachingSkill = (skill) => {
    setTeachingSkills((previous) =>
      previous.includes(skill)
        ? previous
        : [...previous, skill]
    );

    setSelectedSkill(skill);
  };

  // CREATE MATCH
  const createMatch = (skill) => {
    setMatches((previous) =>
      previous.includes(skill)
        ? previous
        : [...previous, skill]
    );

    setSelectedSkill(skill);
  };

  // SELECT SEARCH SUGGESTION
  const chooseSuggestion = (skill) => {
    setSearch(skill);
    setSelectedSkill(skill);
    setSuggestionsOpen(false);
  };

  // ADD CUSTOM SKILL
  const addCustomSkill = () => {
    const newSkill = search.trim();

    if (!newSkill) return;

    setSelectedSkill(newSkill);
    setSuggestionsOpen(false);
  };

  // CLEAR SEARCH
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
                  if (
                    e.key === "Enter" &&
                    filteredSkills.length > 0
                  ) {
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

            {/* SEARCH SUGGESTIONS */}

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
                    skill.toLowerCase() ===
                    search.trim().toLowerCase()
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

          <p>
            What would you like to do with this skill?
          </p>

          <div className="selected-skill-actions">

            <button
              onClick={() => addLearningSkill(selectedSkill)}
            >
              + Learn
            </button>

            <button
              onClick={() => addTeachingSkill(selectedSkill)}
            >
              + Teach
            </button>

            <button
              onClick={() => createMatch(selectedSkill)}
            >
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

      {/* EXPLORE ALL SKILLS */}

      <section className="explore-skills-section">

        <div className="explore-heading">

          <div>
            <p className="section-label">
              AVAILABLE SKILLS
            </p>

            <h2>Explore All Skills</h2>

            <p>
              Select any skill to learn, teach or find a match.
            </p>
          </div>

        </div>

        {/* SKILL FILTERS */}

        <div className="skill-filter-section">

          <div className="skill-filter-group">

            <label>Filter by Category</label>

            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
            >
              <option value="All">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Data">Data & Technology</option>
              <option value="Business">Business</option>
              <option value="Other">Other Skills</option>
            </select>

          </div>

          <div className="skill-filter-group">

            <label>Filter by Skill Type</label>

            <select
              value={skillType}
              onChange={(e) =>
                setSkillType(e.target.value)
              }
            >
              <option value="All">All Skills</option>
              <option value="Learning">My Learning Skills</option>
              <option value="Teaching">My Teaching Skills</option>
            </select>

          </div>

          <button
            type="button"
            className="reset-skill-filter"
            onClick={() => {
              setSelectedCategory("All");
              setSkillType("All");
              setSearch("");
              setSelectedSkill("");
              setSuggestionsOpen(false);
            }}
          >
            Reset Filters
          </button>

        </div>

        {/* SKILL CARDS */}

        <div className="professional-skills-grid">

          {filteredSkills.length > 0 ? (

            filteredSkills.map((skill, index) => (

              <div
                className="professional-skill-card"
                key={skill}
              >

                <div className="professional-skill-icon">
                  {index % 2 === 0 ? "</>" : "✦"}
                </div>

                <div className="professional-skill-content">

                  <h3>{skill}</h3>

                  <p>
                    Learn, teach and exchange knowledge in {skill}.
                  </p>

                  <div className="skill-card-actions">

                    <button
                      onClick={() => addLearningSkill(skill)}
                    >
                      Learn
                    </button>

                    <button
                      onClick={() => addTeachingSkill(skill)}
                    >
                      Teach
                    </button>

                    <button
                      onClick={() => createMatch(skill)}
                    >
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

            ))

          ) : (

            <p className="no-filtered-skills">
              No skills found. Try another search or category.
            </p>

          )}

        </div>

      </section>

      {/* SELECTED LEARNING AND TEACHING SKILLS */}

      <section className="my-skills-section">

        <div className="my-skills-column">

          <h2>My Learning Skills</h2>

          {learningSkills.length === 0 ? (

            <p>
              You have not selected any learning skills yet.
            </p>

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

            <p>
              You have not selected any teaching skills yet.
            </p>

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