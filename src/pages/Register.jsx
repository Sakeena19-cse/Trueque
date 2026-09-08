import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
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

  // Page 1 → Page 2
  const handleNext = (e) => {
    e.preventDefault();
    setPage(2);
  };

  // Page 2 → Skill Verification page
  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.purpose) {
      alert("Please select why you use TRUEQUE.");
      return;
    }

    // Move to existing Skills / Matching page
    navigate("/matching");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Heading */}
        <p className="section-label">
          TRUEQUE REGISTRATION
        </p>

        <h1>Create Your Account</h1>

        <p className="auth-description">
          Join TRUEQUE and start your skill exchange journey.
        </p>

        {/* ================= PAGE 1 ================= */}
        {page === 1 && (
          <form className="auth-form" onSubmit={handleNext}>

            <div className="register-page-indicator">
              Page 1 of 2
            </div>

            {/* First Name */}
            <div className="form-group">
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

            {/* Second Name */}
            <div className="form-group">
              <label>Second Name</label>

              <input
                type="text"
                name="secondName"
                placeholder="Enter your second name"
                value={formData.secondName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email ID</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email ID"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile */}
            <div className="form-group">
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

            {/* Qualification */}
            <div className="form-group">
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

            {/* Location */}
            <div className="form-group">
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

            {/* Next Button */}
            <button
              type="submit"
              className="auth-button"
            >
              Next
            </button>

            {/* Login */}
            <p className="auth-footer">
              Already have an account?{" "}

              <button
                type="button"
                className="text-button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </p>

          </form>
        )}

        {/* ================= PAGE 2 ================= */}
        {page === 2 && (
          <form className="auth-form" onSubmit={handleRegister}>

            <div className="register-page-indicator">
              Page 2 of 2
            </div>

            {/* Username */}
            <div className="form-group">
              <label>Username</label>

              <input
                type="text"
                name="username"
                placeholder="Create your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Generate Password */}
            <div className="form-group">
              <label>Generate Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
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

            {/* Purpose Dropdown */}
            <div className="form-group">
              <label>
                Why do you use this website or app?
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

            {/* Buttons */}
            <div className="register-navigation">

              <button
                type="button"
                className="secondary-button"
                onClick={() => setPage(1)}
              >
                Back
              </button>

              <button
                type="submit"
                className="auth-button"
              >
                Continue to Verification
              </button>

            </div>

          </form>
        )}

      </div>
    </div>
  );
}

export default Register;