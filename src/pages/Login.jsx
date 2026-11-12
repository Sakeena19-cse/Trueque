import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, saveTokens, clearTokens } from "../api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Clear any old tokens first: an expired one would make the login call fail.
    clearTokens();

    try {
      const res = await fetch(`${API_URL}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setError("Invalid username or password.");
        return;
      }

      saveTokens(await res.json());
      navigate("/dashboard");
    } catch {
      setError("Cannot reach the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-hero">
        <div className="auth-hero-content">
          <p className="section-label">TRUEQUE ACCOUNT</p>

          <h1>
            Welcome
            <br />
            <span>Back.</span>
          </h1>

          <p>
            Continue your learning journey, connect with others, and
            exchange valuable skills through TRUEQUE.
          </p>
        </div>
      </section>

      <section className="login-section">
        <div className="login-card">
          <div className="login-card-header">
            <p className="section-label">LOGIN</p>
            <h2>Sign in to TRUEQUE</h2>
            <p>Enter your details to continue.</p>
          </div>

          <form className="professional-auth-form" onSubmit={handleSubmit}>
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

            {error && <p className="auth-error">{error}</p>}

            <button
              type="submit"
              className="login-submit-button"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login →"}
            </button>

            <div className="login-register-text">
              <p>Don't have a TRUEQUE account?</p>
              <button type="button" onClick={() => navigate("/register")}>
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