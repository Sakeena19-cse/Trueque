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

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <section className="auth-hero">

        <div className="auth-hero-content">

          <p className="section-label">
            TRUEQUE ACCOUNT
          </p>

          <h1>
            Welcome
            <br />
            <span>Back.</span>
          </h1>

          <p>
            Continue your learning journey,
            connect with others, and exchange
            valuable skills through TRUEQUE.
          </p>

        </div>

      </section>


      <section className="login-section">

        <div className="login-card">

          <div className="login-card-header">

            <p className="section-label">
              LOGIN
            </p>

            <h2>
              Sign in to TRUEQUE
            </h2>

            <p>
              Enter your details to continue.
            </p>

          </div>


          <form
            className="professional-auth-form"
            onSubmit={handleSubmit}
          >

            <div className="login-form-grid">

              <div className="auth-field">
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


              <div className="auth-field">
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


              <div className="auth-field">
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


              <div className="auth-field">
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


            <div className="auth-field">
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


            <div className="auth-field">
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


            <div className="auth-field">
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


            <button
              type="submit"
              className="login-submit-button"
            >
              Login →
            </button>


            <div className="login-register-text">

              <p>
                Don't have a TRUEQUE account?
              </p>

              <button
                type="button"
                onClick={() => navigate("/register")}
              >
                Create an account →
              </button>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Login;