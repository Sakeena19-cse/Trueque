import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    qualification: "",
    location: "",
    username: "",
    password: "",
    confirmPassword: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePageOne = (e) => {
    e.preventDefault();
    setPage(2);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.purpose) {
      alert("Please select why you want to use TRUEQUE.");
      return;
    }

    navigate("/matching");
  };

  return (
    <div className="register-page">

      {/* LEFT SIDE */}
      <section className="register-intro">
        <div className="register-intro-content">

          <p className="section-label">TRUEQUE REGISTRATION</p>

          <h1>
            Create Your
            <br />
            <span>TRUEQUE Account.</span>
          </h1>

          <p>
            Join a community where people learn,
            teach and exchange valuable skills
            with each other.
          </p>

          <div className="register-benefits">

            <div className="register-benefit">
              <span>01</span>
              <div>
                <h3>Create Your Profile</h3>
                <p>
                  Add your personal and educational
                  information.
                </p>
              </div>
            </div>

            <div className="register-benefit">
              <span>02</span>
              <div>
                <h3>Choose Your Purpose</h3>
                <p>
                  Tell us whether you want to learn,
                  teach or do both.
                </p>
              </div>
            </div>

            <div className="register-benefit">
              <span>03</span>
              <div>
                <h3>Verify Your Skills</h3>
                <p>
                  Choose skills and complete quizzes
                  to earn verification badges.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="register-form-section">

        <div className="register-card">

          {/* PROGRESS */}
          <div className="register-progress">

            <div
              className={`progress-step ${
                page === 1 ? "active" : "completed"
              }`}
            >
              <span>01</span>
              <p>Personal Details</p>
            </div>

            <div className="progress-line"></div>

            <div
              className={`progress-step ${
                page === 2 ? "active" : ""
              }`}
            >
              <span>02</span>
              <p>Account Details</p>
            </div>

          </div>

          {/* PAGE 1 */}
          {page === 1 && (
            <form
              className="register-form"
              onSubmit={handlePageOne}
            >

              <div className="register-heading">
                <p className="section-label">STEP 01</p>
                <h2>Personal Information</h2>
                <p>
                  Tell us a little about yourself.
                </p>
              </div>

              <div className="register-form-grid">

                <div className="register-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="register-field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="register-field">
                  <label>Email ID</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="register-field">
                  <label>Mobile No</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="register-field">
                  <label>Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Enter your qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="register-field">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter your location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <button
                type="submit"
                className="register-next-button"
              >
                Continue to Account →
              </button>

              <div className="register-login-text">
                <p>Already have a TRUEQUE account?</p>

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Login →
                </button>
              </div>

            </form>
          )}

          {/* PAGE 2 */}
          {page === 2 && (
            <form
              className="register-form"
              onSubmit={handleRegister}
            >

              <div className="register-heading">
                <p className="section-label">STEP 02</p>
                <h2>Account Details</h2>
                <p>
                  Complete your account setup to continue.
                </p>
              </div>

              <div className="register-form-grid">

                <div className="register-field">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Create a username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="register-field">
                  <label>Generate Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="register-field">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="register-purpose">

                <label>
                  Why do you want to use TRUEQUE?
                </label>

                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select your purpose
                  </option>

                  <option value="learn">
                    I want to learn skills
                  </option>

                  <option value="teach">
                    I want to teach skills
                  </option>

                  <option value="both">
                    I want to learn and teach
                  </option>
                </select>

              </div>

              <div className="verification-info">

                <div className="verification-info-icon">
                  ✓
                </div>

                <div>
                  <h3>Next: Skill Verification</h3>

                  <p>
                    After registration, you can choose
                    your skills, take a quiz and complete
                    verification to receive a skill badge.
                  </p>
                </div>

              </div>

              <div className="register-action-row">

                <button
                  type="button"
                  className="register-back-button"
                  onClick={() => setPage(1)}
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="register-next-button"
                >
                  Create Account →
                </button>

              </div>

            </form>
          )}

        </div>

      </section>

    </div>
  );
}

export default Register;