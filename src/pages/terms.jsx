import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-container">

        <p className="legal-label">TRUEQUE</p>
        <h1>Terms & Conditions</h1>

        <p className="legal-updated">
          Last Updated: November 2026
        </p>

        <p>
          Welcome to TRUEQUE! By using our platform, you agree
          to follow these Terms & Conditions.
        </p>

        <h2>1. About TRUEQUE</h2>
        <p>
          TRUEQUE is a skill-sharing platform that helps students
          connect with other people to learn and teach different
          skills.
        </p>

        <h2>2. User Registration</h2>
        <p>
          Users should provide accurate registration details,
          maintain their account information and keep their
          passwords confidential.
        </p>

        <h2>3. Learning and Teaching</h2>
        <p>
          Users can choose skills they want to learn or teach.
          They should communicate respectfully and participate
          responsibly in learning sessions.
        </p>

        <h2>4. Skill Verification</h2>
        <p>
          TRUEQUE may provide quizzes or other activities to
          help users demonstrate their knowledge. A quiz result
          should not be treated as a professional certification.
        </p>

        <h2>5. User Conduct</h2>
        <p>
          Users must not harass others, share harmful content,
          misuse personal information or use the platform for
          unlawful activities.
        </p>

        <h2>6. Account Responsibility</h2>
        <p>
          Users are responsible for activities carried out
          through their accounts.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          TRUEQUE may update these terms when necessary.
          Updated terms will be displayed on this page.
        </p>

        <h2>8. Contact</h2>
        <p>
          For questions about these terms, contact the
          TRUEQUE project team.
        </p>

        <Link to="/" className="legal-back-button">
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Terms;