import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    qualification: "",
    location: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Move to Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Heading */}
        <p className="section-label">
          TRUEQUE LOGIN
        </p>

        <h1>Welcome Back</h1>

        <p className="auth-description">
          Login to continue your TRUEQUE journey.
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

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

          {/* Last Name */}
          <div className="form-group">
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

          {/* Username */}
          <div className="form-group">
            <label>Username</label>

            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
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

          {/* Login Button */}
          <button
            type="submit"
            className="auth-button"
          >
            Login
          </button>

          {/* Register */}
          <p className="auth-footer">
            Don't have an account?{" "}

            <button
              type="button"
              className="text-button"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;