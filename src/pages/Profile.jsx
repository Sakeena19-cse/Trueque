import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const savedProfile = JSON.parse(
    localStorage.getItem("truequeProfile") || "{}"
  );

  const [profile, setProfile] = useState({
    firstName: savedProfile.firstName || "",
    lastName: savedProfile.lastName || "",
    email: savedProfile.email || "",
    phone: savedProfile.phone || "",
    qualification: savedProfile.qualification || "",
    location: savedProfile.location || "",
    username: savedProfile.username || "",
    bio: savedProfile.bio || "",
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedProfile = {
      ...savedProfile,
      ...profile,
    };

    localStorage.setItem(
      "truequeProfile",
      JSON.stringify(updatedProfile)
    );

    setEditing(false);
    setMessage("Profile updated successfully!");
  };

  const fullName =
    `${profile.firstName} ${profile.lastName}`.trim() || "TRUEQUE Member";

  return (
    <div className="profile-page">
      <div className="page-container">

        <div className="profile-heading">
          <div>
            <p className="profile-label">YOUR ACCOUNT</p>
            <h1>My Profile</h1>
            <p>Manage your personal information and learning identity.</p>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              setEditing(!editing);
              setMessage("");
            }}
          >
            {editing ? "Cancel Editing" : "Edit Profile"}
          </button>
        </div>

        <div className="profile-layout">

          <div className="profile-sidebar card">
            <div className="profile-avatar">
              {fullName.charAt(0).toUpperCase()}
            </div>

            <h2>{fullName}</h2>
            <p className="profile-username">
              @{profile.username || "username"}
            </p>

            <div className="profile-divider"></div>

            <p>{profile.qualification || "Qualification not added"}</p>
            <p>{profile.location || "Location not added"}</p>

            <Link to="/skills" className="btn btn-outline profile-skill-btn">
              Manage Skills
            </Link>
          </div>

          <div className="profile-details card">
            <h2>Personal Information</h2>

            {message && (
              <p className="profile-success">{message}</p>
            )}

            <form onSubmit={handleSave}>
              <div className="profile-form-grid">

                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="form-group">
                  <label>Qualification</label>
                  <select
                    name="qualification"
                    value={profile.qualification}
                    onChange={handleChange}
                    disabled={!editing}
                  >
                    <option value="">Select Qualification</option>
                    <option value="School Student">School Student</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="Working Professional">
                      Working Professional
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={profile.username}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="form-group">
                  <label>About Me</label>
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    disabled={!editing}
                    placeholder="Tell others about yourself..."
                    rows="3"
                  />
                </div>

              </div>

              {editing && (
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}