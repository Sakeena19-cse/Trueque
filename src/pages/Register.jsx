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
      alert("Please select your purpose.");
      return;
    }

    navigate("/matching");
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        <p className="section-label">
          TRUEQUE REGISTRATION
        </p>

        <h1>Create Your Account</h1>

        <p className="auth-description">
          Join TRUEQUE and exchange skills with others.
        </p>

        {page === 1 && (
          <form className="auth-form" onSubmit={handlePageOne}>

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

            <div className="form-group">
              <label>Second Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your second name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
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

            <button type="submit" className="auth-button">
              Next
            </button>

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

        {page === 2 && (
          <form className="auth-form" onSubmit={handleRegister}>

            <div className="register-page-indicator">
              Page 2 of 2
            </div>

            <div className="form-group">
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

            <div className="form-group">
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