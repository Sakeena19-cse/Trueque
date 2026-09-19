import React, { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Priya",
    lastName: "Dharshini",
    email: "priya@example.com",
    mobile: "9876543210",
    qualification: "Computer Science Engineering",
    location: "Tamil Nadu",
    username: "priya",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="profile-page">

      {/* ================= PROFILE HERO ================= */}

      <section className="profile-hero">

        <div className="profile-hero-content">

          <p className="section-label">
            TRUEQUE PROFILE
          </p>

          <h1>
            My Profile
          </h1>

          <p>
            Manage your personal information and
            showcase the skills you can share with
            the TRUEQUE community.
          </p>

        </div>

      </section>


      {/* ================= PROFILE CONTENT ================= */}

      <section className="profile-content">

        {/* Profile Card */}

        <div className="profile-main-card">

          <div className="profile-card-header">

            <div className="profile-avatar">
              {profile.firstName.charAt(0)}
            </div>

            <div>

              <h2>
                {profile.firstName} {profile.lastName}
              </h2>

              <p>
                @{profile.username}
              </p>

            </div>

            <div className="profile-status">
              Verified
            </div>

          </div>


          {/* Personal Information */}

          <div className="profile-section">

            <div className="profile-section-title">

              <div>
                <p className="section-label">
                  PERSONAL INFORMATION
                </p>

                <h2>
                  Your Details
                </h2>
              </div>

              <button
                type="button"
                className="profile-edit-button"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>

            </div>


            <div className="profile-form-grid">

              <div className="profile-field">
                <label>First Name</label>

                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>


              <div className="profile-field">
                <label>Last Name</label>

                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>


              <div className="profile-field">
                <label>Email ID</label>

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>


              <div className="profile-field">
                <label>Mobile No</label>

                <input
                  type="tel"
                  name="mobile"
                  value={profile.mobile}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>


              <div className="profile-field">
                <label>Qualification</label>

                <input
                  type="text"
                  name="qualification"
                  value={profile.qualification}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>


              <div className="profile-field">
                <label>Location</label>

                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>


              <div className="profile-field">
                <label>Username</label>

                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

            </div>


            {isEditing && (
              <button
                type="button"
                className="profile-save-button"
                onClick={() => setIsEditing(false)}
              >
                Save Changes
              </button>
            )}

          </div>

        </div>


        {/* ================= SKILLS SIDEBAR ================= */}

        <aside className="profile-sidebar">

          <div className="profile-side-card">

            <p className="section-label">
              MY SKILLS
            </p>

            <h2>
              Skills & Verification
            </h2>

            <p>
              Manage the skills you want to learn
              and teach through TRUEQUE.
            </p>


            <div className="profile-skill-item">

              <span className="profile-skill-icon">
                &lt;/&gt;
              </span>

              <div>
                <h3>Programming</h3>
                <span>Verified Skill</span>
              </div>

            </div>


            <div className="profile-skill-item">

              <span className="profile-skill-icon">
                📷
              </span>

              <div>
                <h3>Photography</h3>
                <span>Verified Skill</span>
              </div>

            </div>


            <div className="profile-skill-item">

              <span className="profile-skill-icon">
                ✎
              </span>

              <div>
                <h3>UI/UX Design</h3>
                <span>Learning</span>
              </div>

            </div>

          </div>


          {/* Verification */}

          <div className="profile-verification-card">

            <div className="verification-icon">
              ✓
            </div>

            <h3>
              Skill Verification
            </h3>

            <p>
              Complete quizzes to verify your
              skills and earn verification badges.
            </p>

            <a href="/quiz">
              Take a Quiz →
            </a>

          </div>

        </aside>

      </section>

    </div>
  );
}

export default Profile;