import React, { useState } from "react";

function Certificate() {
  const profile = JSON.parse(
    localStorage.getItem("truequeProfile") || "{}"
  );

  const [studentName, setStudentName] = useState(
    `${profile.firstName || ""} ${profile.lastName || ""}`.trim()
  );

  const [skill, setSkill] = useState("");
  const [instructor, setInstructor] = useState("");
  const [completionDate, setCompletionDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleDownload = () => {
    if (!studentName.trim() || !skill.trim() || !instructor.trim()) {
      alert("Please enter your name, skill and instructor name.");
      return;
    }

    const certificate = document.getElementById(
      "trueque-certificate"
    );

    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      alert("Please allow pop-ups to download your certificate.");
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>TRUEQUE Certificate</title>
          <style>
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 35px;
              font-family: Georgia, serif;
              background: white;
            }

            .certificate {
              width: 100%;
              min-height: 650px;
              padding: 55px 35px;
              border: 10px double #142B4A;
              text-align: center;
              color: #0B1B30;
            }

            h1 {
              font-size: 42px;
              color: #142B4A;
              margin: 15px 0;
            }

            h2 {
              font-size: 25px;
              color: #142B4A;
              margin: 35px 0;
            }

            .name {
              font-size: 32px;
              font-weight: bold;
              border-bottom: 2px solid #142B4A;
              display: inline-block;
              padding: 10px 35px;
            }

            .skill {
              font-size: 25px;
              font-weight: bold;
              color: #142B4A;
            }

            .details {
              margin-top: 65px;
              display: flex;
              justify-content: space-around;
              gap: 20px;
            }

            .details div {
              border-top: 1px solid #142B4A;
              padding-top: 12px;
              min-width: 180px;
            }

            @media print {
              body {
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="certificate">
            ${certificate.innerHTML}
          </div>
          <script>
            window.onload = function() {
              window.print();
            };
          <\/script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <main className="certificate-page">
      <section className="certificate-heading">
        <span className="section-label">YOUR ACHIEVEMENT</span>
        <h1>Certificate Generator</h1>
        <p>
          Create a certificate preview for a completed skill
          learning activity.
        </p>
      </section>

      <section className="certificate-content">
        <div className="certificate-form">
          <h2>Certificate Details</h2>

          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter student name"
            />
          </div>

          <div className="form-group">
            <label>Completed Skill</label>
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Example: React.js"
            />
          </div>

          <div className="form-group">
            <label>Instructor Name</label>
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              placeholder="Enter instructor name"
            />
          </div>

          <div className="form-group">
            <label>Completion Date</label>
            <input
              type="date"
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="certificate-download"
            onClick={handleDownload}
          >
            Download / Print Certificate
          </button>
        </div>

        <div className="certificate-preview">
          <div
            className="certificate-design"
            id="trueque-certificate"
          >
            <p className="certificate-brand">TRUEQUE</p>

            <div className="certificate-divider"></div>

            <h2>CERTIFICATE</h2>
            <h3>OF COMPLETION</h3>

            <p className="certificate-intro">
              This certificate is presented to
            </p>

            <h1 className="certificate-student">
              {studentName || "Student Name"}
            </h1>

            <p className="certificate-description">
              for completing the learning activity in
            </p>

            <h2 className="certificate-skill">
              {skill || "Your Skill"}
            </h2>

            <p className="certificate-description">
              through the TRUEQUE Skill Exchange Learning Platform.
            </p>

            <div className="certificate-signatures">
              <div>
                <strong>{instructor || "Instructor Name"}</strong>
                <span>Instructor</span>
              </div>

              <div>
                <strong>
                  {completionDate
                    ? new Date(
                        `${completionDate}T00:00:00`
                      ).toLocaleDateString("en-IN")
                    : "Completion Date"}
                </strong>
                <span>Date of Completion</span>
              </div>
            </div>

            <p className="certificate-footer">
              Learn. Teach. Grow Together.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Certificate;