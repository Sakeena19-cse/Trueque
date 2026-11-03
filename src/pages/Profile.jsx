import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [isEditing, setIsEditing] = useState(true);
  const [message, setMessage] = useState("");

  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("truequeProfile");

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          qualification: "",
          location: "",
          username: "",
          photo: "",
        };
  });

  const [formData, setFormData] = useState(profile);
  const [learningSkills, setLearningSkills] = useState(() => {
  try {
    return JSON.parse(
      localStorage.getItem("truequeLearningSkills") || "[]"
    );
  } catch {
    return [];
  }
});

const [teachingSkills, setTeachingSkills] = useState(() => {
  try {
    return JSON.parse(
      localStorage.getItem("truequeTeachingSkills") || "[]"
    );
  } catch {
    return [];
  }
});

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setMessage("Please select a valid image.");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        setMessage("Image size should be below 2 MB.");
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({
          ...formData,
          photo: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.email.trim() ||
        !formData.mobile.trim()) {
      setMessage("Please fill all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setMessage("Enter a valid 10-digit mobile number.");
      return;
    }

    localStorage.setItem(
      "truequeProfile",
      JSON.stringify(formData)
    );

    setProfile(formData);
    setIsEditing(false);
    setMessage("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
    setMessage("");
  };

  const displayName =
    `${profile.firstName} ${profile.lastName}`.trim();

  return (
    <div className="profile-page">

      <section className="profile-hero">
        <div className="profile-hero-content">
          <p className="section-label">TRUEQUE PROFILE</p>
          <h1>My Profile</h1>
          <p>
            Manage your personal information and showcase
            your learning and teaching interests.
          </p>
        </div>
      </section>

      <section className="profile-content">

        <div className="profile-main-card">

          <div className="profile-card-header">

            <div className="profile-avatar">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%"
                  }}
                />
              ) : (
                displayName
                  ? displayName.charAt(0).toUpperCase()
                  : "?"
              )}
            </div>

            <div>
              <h2>{displayName || "Student Name"}</h2>
              <p>
                {profile.username
                  ? `@${profile.username}`
                  : "@username"}
              </p>
            </div>

            <div className="profile-status">
              Profile
            </div>

          </div>

          <div className="profile-section">

            <div className="profile-section-title">
              <div>
                <p className="section-label">
                  PERSONAL INFORMATION
                </p>
                <h2>Your Details</h2>
              </div>

              {!isEditing && (
                <button
                  type="button"
                  className="profile-edit-button"
                  onClick={() => {
                    setFormData(profile);
                    setIsEditing(true);
                    setMessage("");
                  }}
                >
                  Edit Profile
                </button>
              )}
            </div>

            {message && (
              <p role="status" style={{ marginBottom: "15px" }}>
                {message}
              </p>
            )}

            <form onSubmit={handleSave}>

              {isEditing && (
                <div className="profile-field">
                  <label>Profile Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhoto}
                  />
                  <small>Maximum image size: 2 MB</small>
                </div>
              )}

              <div className="profile-form-grid">

                <div className="profile-field">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="profile-field">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="profile-field">
                  <label>Email ID *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="profile-field">
                  <label>Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="profile-field">
                  <label>Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Enter qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="profile-field">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="profile-field">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Create username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

              </div>

              {isEditing && (
                <div style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "25px",
                  flexWrap: "wrap"
                }}>
                  <button
                    type="submit"
                    className="profile-save-button"
                  >
                    Save Changes →
                  </button>

                  <button
                    type="button"
                    className="profile-edit-button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}

            </form>
          </div>
        </div>

        <aside className="profile-sidebar">
          
          <div className="profile-side-card">

  <p className="section-label">MY SKILLS</p>
  <h2>Skills & Verification</h2>

  <p>
    Your learning and teaching skills in TRUEQUE.
  </p>

  <h3 style={{ marginTop: "22px" }}>
    📚 Skills I Want to Learn
  </h3>

  {learningSkills.length > 0 ? (
    learningSkills.map((skill, index) => (
      <div className="profile-skill-item" key={index}>
        <span className="profile-skill-icon">📖</span>
        <div>
          <h3>{skill}</h3>
          <span>Learning</span>
        </div>
      </div>
    ))
  ) : (
    <p>No learning skills added yet.</p>
  )}

  <h3 style={{ marginTop: "25px" }}>
    🎓 Skills I Can Teach
  </h3>

  {teachingSkills.length > 0 ? (
    teachingSkills.map((skill, index) => (
      <div className="profile-skill-item" key={index}>
        <span className="profile-skill-icon">⭐</span>
        <div>
          <h3>{skill}</h3>
          <span>Teaching</span>
        </div>
      </div>
    ))
  ) : (
    <p>No teaching skills added yet.</p>
  )}

  <Link to="/matching">
    Manage My Skills →
  </Link>

</div>

         

          <div className="profile-verification-card">
            <div className="verification-icon">✓</div>
            <h3>Skill Verification</h3>
            <p>
              Complete quizzes to verify your skills
              and earn verification badges.
            </p>
            <Link to="/quiz">Take a Quiz →</Link>
          </div>

        </aside>
      </section>
    </div>
  );
}

export default Profile;