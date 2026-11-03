import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-container">

        <p className="legal-label">TRUEQUE</p>
        <h1>Privacy Policy</h1>

        <p className="legal-updated">
          Last Updated: November 2026
        </p>

        <p>
          Welcome to TRUEQUE! Your privacy is important to us.
          This Privacy Policy explains how TRUEQUE handles
          information when you use our skill-sharing platform.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          TRUEQUE may collect information such as your name,
          email address, phone number, qualification, location,
          username and skills that you choose to provide.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information to create your profile,
          display your skills, help you find learning partners
          and improve your experience on TRUEQUE.
        </p>

        <h2>3. Information Sharing</h2>
        <p>
          Profile and skill information may be visible to other
          platform users to support skill matching. We do not
          promise that information entered into the platform
          is completely private from other users.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We aim to protect user information. However, no
          online platform can guarantee complete security.
        </p>

        <h2>5. User Responsibilities</h2>
        <p>
          Please provide accurate information and avoid sharing
          passwords or sensitive personal information with others.
        </p>

        <h2>6. Contact</h2>
        <p>
          For privacy-related questions, contact the TRUEQUE
          project team.
        </p>

        <Link to="/" className="legal-back-button">
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Privacy;