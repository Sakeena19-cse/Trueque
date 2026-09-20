import React, { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(true);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    qualification: "",
    location: "",
    username: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-page">

      {/* PROFILE HERO */}

      <section className="profile-hero">
        <div className="profile-hero-content">

          <p className="section-label">
            TRUEQUE PROFILE
          </p>

          <h1>
            My Profile
          </h1>

          <p>
            Add your personal information and
            showcase the skills you want to learn
            and teach through TRUEQUE.
          </p>

        </div>
      </section>


      {/* PROFILE CONTENT */}

      <section className="profile-content">

        {/* MAIN PROFILE CARD */}

        <div className="profile-main-card">

          {/* PROFILE HEADER */}

          <div className="profile-card-header">

            <div className="profile-avatar">
              {profile.firstName
                ? profile.firstName.charAt(0).toUpperCase()
                : "?"}
            </div>

            <div>
              <h2>
                {profile.firstName ||
                  profile.lastName
                  ? `${profile.firstName} ${profile.lastName}`
                  : "Student Name"}
              </h2>

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


          {/* PERSONAL INFORMATION */}

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

              {!isEditing && (
                <button
                  type="button"
                  className="profile-edit-button"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}

            </div>


            {/* FORM */}

            <div className="profile-form-grid">

              {/* FIRST NAME */}

              <div className="profile-field">

                <label>
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={profile.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

              </div>


              {/* LAST NAME */}

              <div className="profile-field">

                <label>
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={profile.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

              </div>


              {/* EMAIL */}

              <div className="profile-field">

                <label>
                  Email ID
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email ID"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

              </div>


              {/* MOBILE */}

              <div className="profile-field">

                <label>
                  Mobile No
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={profile.mobile}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

              </div>


              {/* QUALIFICATION */}

              <div className="profile-field">

                <label>
                  Qualification
                </label>

                <input
                  type="text"
                  name="qualification"
                  placeholder="Enter your qualification"
                  value={profile.qualification}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

              </div>


              {/* LOCATION */}

              <div className="profile-field">

                <label>
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  value={profile.location}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

              </div>


              {/* USERNAME */}

              <div className="profile-field">

                <label>
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  placeholder="Create your username"
                  value={profile.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

              </div>

            </div>


            {/* SAVE BUTTON */}

            {isEditing && (
              <button
                type="button"
                className="profile-save-button"
                onClick={handleSave}
              >
                Save Profile →
              </button>
            )}

          </div>

        </div>


        {/* RIGHT SIDEBAR */}

        <aside className="profile-sidebar">

          {/* SKILLS */}

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
                <h3>
                  Programming
                </h3>

                <span>
                  Skill to verify
                </span>
              </div>

            </div>


            <div className="profile-skill-item">

              <span className="profile-skill-icon">
                📷
              </span>

              <div>
                <h3>
                  Photography
                </h3>

                <span>
                  Skill to verify
                </span>
              </div>

            </div>


            <div className="profile-skill-item">

              <span className="profile-skill-icon">
                ✎
              </span>

              <div>
                <h3>
                  UI/UX Design
                </h3>

                <span>
                  Learning
                </span>
              </div>

            </div>

          </div>


          {/* VERIFICATION CARD */}

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