import { useState } from "react";
import { Link } from "react-router-dom";

const sampleUsers = [
  {
    id: 1,
    name: "Arun Kumar",
    qualification: "Undergraduate",
    location: "Chennai",
    teaching: ["React.js", "Web Development", "Java Programming"],
    learning: ["UI/UX Design", "Python Programming"],
  },
  {
    id: 2,
    name: "Priya S",
    qualification: "Undergraduate",
    location: "Coimbatore",
    teaching: ["UI/UX Design", "Graphic Design"],
    learning: ["React.js", "Web Development"],
  },
  {
    id: 3,
    name: "Rahul M",
    qualification: "Postgraduate",
    location: "Chennai",
    teaching: ["Python Programming", "Data Analysis"],
    learning: ["Java Programming", "English Speaking"],
  },
  {
    id: 4,
    name: "Divya R",
    qualification: "Working Professional",
    location: "Madurai",
    teaching: ["Digital Marketing", "Content Writing"],
    learning: ["Photography", "Video Editing"],
  },
];

export default function Matching() {
  const savedSkills = JSON.parse(
    localStorage.getItem("truequeSkills") ||
      '{"teaching":[],"learning":[]}'
  );

  const [search, setSearch] = useState("");
  const [filterSkill, setFilterSkill] = useState("All");

  const userSkills = savedSkills.learning || [];

  const filteredUsers = sampleUsers
    .map((user) => {
      const matchedSkills = user.teaching.filter((skill) =>
        userSkills.includes(skill)
      );

      return {
        ...user,
        matchedSkills,
      };
    })
    .filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.teaching.some((skill) =>
          skill.toLowerCase().includes(search.toLowerCase())
        );

      const matchesFilter =
        filterSkill === "All" ||
        user.teaching.includes(filterSkill);

      return (
        matchesSearch &&
        matchesFilter &&
        user.matchedSkills.length > 0
      );
    });

  const allSkills = [
    ...new Set(sampleUsers.flatMap((user) => user.teaching)),
  ];

  return (
    <div className="matching-page">
      <div className="page-container">

        <div className="matching-heading">
          <p className="matching-label">CONNECT AND LEARN</p>
          <h1>Find Your Perfect Match</h1>
          <p>
            Connect with people who can teach the skills you
            want to learn.
          </p>
        </div>

        <div className="matching-search card">
          <input
            type="text"
            placeholder="Search by name or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filterSkill}
            onChange={(e) => setFilterSkill(e.target.value)}
          >
            <option value="All">All Skills</option>

            {allSkills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        {userSkills.length === 0 && (
          <div className="no-matches card">
            <h2>Select Your Learning Skills</h2>
            <p>
              Choose the skills you want to learn before finding
              your matching partners.
            </p>
            <Link to="/skills" className="btn btn-primary">
              Select Skills
            </Link>
          </div>
        )}

        {userSkills.length > 0 && (
          <>
            <div className="matching-results-heading">
              <h2>Recommended Partners</h2>
              <p>{filteredUsers.length} matching profiles found</p>
            </div>

            <div className="matching-grid">
              {filteredUsers.map((user) => (
                <div className="matching-card" key={user.id}>
                  <div className="matching-avatar">
                    {user.name.charAt(0)}
                  </div>

                  <h3>{user.name}</h3>

                  <p className="matching-location">
                    {user.location}
                  </p>

                  <p className="matching-qualification">
                    {user.qualification}
                  </p>

                  <div className="matching-divider"></div>

                  <h4>Skills You Can Learn</h4>

                  <div className="matching-tags">
                    {user.matchedSkills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <h4>Other Teaching Skills</h4>

                  <div className="matching-tags">
                    {user.teaching.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <Link
                    to="/session"
                    className="btn btn-primary matching-button"
                  >
                    Book a Session
                  </Link>
                </div>
              ))}
            </div>

            {filteredUsers.length === 0 && (
              <div className="no-matches card">
                <h2>No Matching Partners Found</h2>
                <p>
                  Try another skill or update your learning
                  preferences.
                </p>
                <Link to="/skills" className="btn btn-outline">
                  Update Skills
                </Link>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}