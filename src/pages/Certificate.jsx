import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Certificate.css";

function Certificate() {
  const [studentName, setStudentName] = useState("");
  const [skillName, setSkillName] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  const [certificateId] = useState(
    () => `TQ-${Date.now().toString().slice(-8)}`
  );

  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();

    if (!studentName.trim() || !skillName.trim() || !completionDate) {
      alert("Please fill all the required fields.");
      return;
    }

    setGenerated(true);
  };

  const handleDownload = () => {
    window.print();
  };

  const formattedDate = completionDate
    ? new Date(`${completionDate}T00:00:00`).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className="certificate-page">
      

      <main className="certificate-main">
        <div className="certificate-heading">
          <p className="certificate-label">TRUEQUE ACHIEVEMENT</p>
          <h1>Certificate Generator</h1>
          <p>
            Celebrate your learning journey and generate your skill
            completion certificate.
          </p>
        </div>

        {!generated && (
          <form
            className="certificate-form"
            onSubmit={handleGenerate}
          >
            <h2>Enter Your Details</h2>

            <div className="certificate-form-group">
              <label>Student Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </div>

            <div className="certificate-form-group">
              <label>Completed Skill / Course</label>
              <input
                type="text"
                placeholder="Example: React.js Development"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
                required
              />
            </div>

            <div className="certificate-form-group">
              <label>Completion Date</label>
              <input
                type="date"
                value={completionDate}
                onChange={(e) => setCompletionDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <button type="submit" className="generate-certificate-btn">
              Generate Certificate
            </button>
          </form>
        )}

        {generated && (
          <div className="certificate-result">
            <div className="certificate-paper" id="certificate-paper">
              <div className="certificate-border">
                <p className="certificate-brand">TRUEQUE</p>
                <p className="certificate-subtitle">
                  SKILL EXCHANGE PLATFORM
                </p>

                <div className="certificate-divider"></div>

                <h2>CERTIFICATE</h2>
                <h3>OF COMPLETION</h3>

                <p className="certificate-presented">
                  This certificate is proudly presented to
                </p>

                <h1 className="certificate-student-name">
                  {studentName}
                </h1>

                <p className="certificate-description">
                  For successfully completing the learning journey in
                </p>

                <h2 className="certificate-skill-name">
                  {skillName}
                </h2>

                <p className="certificate-description">
                  through the TRUEQUE Skill Exchange Platform.
                </p>

                <div className="certificate-bottom">
                  <div>
                    <div className="certificate-sign-line"></div>
                    <p>TRUEQUE Team</p>
                    <small>Authorized Signature</small>
                  </div>

                  <div className="certificate-seal">
                    <span>TRUEQUE</span>
                    <strong>★</strong>
                    <small>ACHIEVEMENT</small>
                  </div>

                  <div>
                    <div className="certificate-sign-line"></div>
                    <p>{formattedDate}</p>
                    <small>Completion Date</small>
                  </div>
                </div>

                <p className="certificate-id">
                  Certificate ID: {certificateId}
                </p>
              </div>
            </div>

            <div className="certificate-actions">
              <button
                onClick={handleDownload}
                className="download-certificate-btn"
              >
                Download / Save as PDF
              </button>

              <button
                onClick={() => setGenerated(false)}
                className="edit-certificate-btn"
              >
                Edit Details
              </button>
            </div>

            <p className="certificate-note">
              In the print window, choose "Save as PDF" to save your certificate.
            </p>
          </div>
        )}

        <div className="certificate-back-link">
          <Link to="/dashboard">← Back to Dashboard</Link>
        </div>
      </main>

      
    </div>
  );
}

export default Certificate;