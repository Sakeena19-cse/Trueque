import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* ================= HERO SECTION ================= */}

      <section
        className="dashboard-hero"
        style={{
          background: "var(--tan)",
          padding: "55px 24px",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "var(--oxford-blue)",
              marginBottom: "10px",
              fontFamily: "var(--font-heading)",
            }}
          >
            Welcome to TRUEQUE
          </h1>

          <p
            style={{
              color: "var(--oxford-blue)",
              fontSize: "1rem",
              margin: 0,
            }}
          >
            Learn, teach and exchange skills with others.
          </p>
        </div>
      </section>

      {/* ================= DASHBOARD CONTENT ================= */}

      <div
        className="container"
        style={{
          padding: "40px 24px",
        }}
      >

        {/* ================= CONTINUE YOUR JOURNEY ================= */}

        <section style={{ marginBottom: "42px" }}>

          <h2
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-heading)",
              marginBottom: "20px",
            }}
          >
            Continue your journey
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >

            {/* FIND A SKILL */}

            <Link
              to="/matching"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  minHeight: "145px",
                  padding: "22px",

                  borderRadius: "14px",

                  background:
                    "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",

                  border:
                    "1px solid rgba(255,255,255,0.30)",

                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.12)",

                  boxSizing: "border-box",

                  cursor: "pointer",

                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >

                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",

                    background: "var(--oxford-blue)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "var(--gold)",
                    fontWeight: 700,
                    fontSize: "1.1rem",

                    marginBottom: "15px",
                  }}
                >
                  🔍
                </div>

                <h3
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.05rem",
                    marginBottom: "7px",
                  }}
                >
                  Find a Skill
                </h3>

                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "0.82rem",
                    margin: 0,
                  }}
                >
                  Search for skills you want to learn.
                </p>

              </div>
            </Link>


            {/* FIND A MATCH */}

            <Link
              to="/matching"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  minHeight: "145px",
                  padding: "22px",

                  borderRadius: "14px",

                  background:
                    "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",

                  border:
                    "1px solid rgba(255,255,255,0.30)",

                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.12)",

                  boxSizing: "border-box",

                  cursor: "pointer",

                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >

                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",

                    background: "var(--oxford-blue)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "var(--gold)",
                    fontWeight: 700,
                    fontSize: "1.1rem",

                    marginBottom: "15px",
                  }}
                >
                  🤝
                </div>

                <h3
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.05rem",
                    marginBottom: "7px",
                  }}
                >
                  Find a Match
                </h3>

                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "0.82rem",
                    margin: 0,
                  }}
                >
                  Find people who can exchange skills with you.
                </p>

              </div>
            </Link>


            {/* VIEW PROFILE */}

            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  minHeight: "145px",
                  padding: "22px",

                  borderRadius: "14px",

                  background:
                    "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",

                  border:
                    "1px solid rgba(255,255,255,0.30)",

                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.12)",

                  boxSizing: "border-box",

                  cursor: "pointer",

                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >

                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",

                    background: "var(--oxford-blue)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "var(--gold)",
                    fontWeight: 700,
                    fontSize: "1.1rem",

                    marginBottom: "15px",
                  }}
                >
                  👤
                </div>

                <h3
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.05rem",
                    marginBottom: "7px",
                  }}
                >
                  View Profile
                </h3>

                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "0.82rem",
                    margin: 0,
                  }}
                >
                  Manage your profile and skills.
                </p>

              </div>
            </Link>

          </div>

        </section>


        {/* ================= SKILL EXCHANGE ================= */}

        <section>

          <h2
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-heading)",
              marginBottom: "20px",
            }}
          >
            Skill Exchange
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >

            {/* LEARN */}

            <div
              style={{
                minHeight: "150px",
                padding: "22px",

                borderRadius: "14px",

                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",

                border:
                  "1px solid rgba(255,255,255,0.30)",

                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.12)",

                boxSizing: "border-box",
              }}
            >

              <h3
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "10px",
                }}
              >
                Learn
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Learn new skills from students and
                skilled learners in the TRUEQUE community.
              </p>

            </div>


            {/* TEACH */}

            <div
              style={{
                minHeight: "150px",
                padding: "22px",

                borderRadius: "14px",

                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",

                border:
                  "1px solid rgba(255,255,255,0.30)",

                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.12)",

                boxSizing: "border-box",
              }}
            >

              <h3
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "10px",
                }}
              >
                Teach
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Share your knowledge and help others
                improve their skills.
              </p>

            </div>


            {/* EXCHANGE */}

            <div
              style={{
                minHeight: "150px",
                padding: "22px",

                borderRadius: "14px",

                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",

                border:
                  "1px solid rgba(255,255,255,0.30)",

                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.12)",

                boxSizing: "border-box",
              }}
            >

              <h3
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "10px",
                }}
              >
                Exchange
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Exchange your skills with others and
                grow together through learning.
              </p>

            </div>

          </div>

        </section>


        {/* ================= RESPONSIVE ================= */}

        <style>
          {`
            @media (max-width: 800px) {

              .container {
                padding: 32px 18px !important;
              }

              .dashboard-hero {
                padding: 45px 18px !important;
              }

              .container > section > div {
                grid-template-columns: 1fr !important;
              }

            }

            @media (max-width: 600px) {

              .container {
                padding: 28px 16px !important;
              }

              .dashboard-hero {
                padding: 40px 16px !important;
              }

            }

            a > div {
              transition:
                transform 0.2s ease,
                box-shadow 0.2s ease;
            }

            a > div:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.18);
            }
          `}
        </style>

      </div>

    </div>
  );
}