import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/trueque-hero.png";

export default function Home() {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}

      <section
  style={{
    background: "var(--tan)",
    padding: "80px 0",
  }}
>
  <div
    className="container"
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "50px",
    }}
  >
    {/* Left side - Text */}
    <div>
      <p
        style={{
          color: "var(--dark-blue)",
          fontWeight: "600",
          fontSize: "18px",
          marginBottom: "15px",
        }}
      >
        Skill Exchange Platform
      </p>

      <h1
        style={{
          color: "var(--oxford-blue)",
          fontSize: "52px",
          lineHeight: "1.1",
          marginBottom: "20px",
        }}
      >
        Learn. Teach. Exchange.
      </h1>

      <p
        style={{
          color: "var(--oxford-blue)",
          fontSize: "18px",
          lineHeight: "1.7",
          maxWidth: "550px",
          marginBottom: "30px",
        }}
      >
        Connect with people, exchange skills, share knowledge,
        and grow together with TRUEQUE.
      </p>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <Link to="/matching" className="btn btn-primary">
          Explore Skills
        </Link>

        <Link to="/register" className="btn btn-secondary">
          Join TRUEQUE
        </Link>
      </div>
    </div>

    {/* Right side - TRUEQUE picture */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={heroImage}
        alt="TRUEQUE Skill Exchange"
        style={{
          width: "100%",
          maxWidth: "550px",
          height: "auto",
          display: "block",
          borderRadius: "20px",
        }}
      />
    </div>
  </div>
</section>


      {/* ================= WHY TRUEQUE ================= */}

      <section
        style={{
          padding: "50px 24px",
        }}
      >

        <div className="container">

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >

            <h2
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-heading)",
                marginBottom: "10px",
              }}
            >
              Why TRUEQUE?
            </h2>

            <p
              style={{
                color: "#ffffff",
                maxWidth: "650px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              TRUEQUE makes learning more meaningful by helping
              students exchange knowledge and skills with each other.
            </p>

          </div>


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
                padding: "25px",
                minHeight: "175px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",
                border:
                  "1px solid rgba(255,255,255,0.30)",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.12)",
              }}
            >

              <div
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "12px",
                }}
              >
                📚
              </div>

              <h3
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "8px",
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
                Discover new skills and learn directly
                from people who already know them.
              </p>

            </div>


            {/* TEACH */}

            <div
              style={{
                padding: "25px",
                minHeight: "175px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",
                border:
                  "1px solid rgba(255,255,255,0.30)",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.12)",
              }}
            >

              <div
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "12px",
                }}
              >
                💡
              </div>

              <h3
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "8px",
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
                Share what you know and help another
                student develop their skills.
              </p>

            </div>


            {/* EXCHANGE */}

            <div
              style={{
                padding: "25px",
                minHeight: "175px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",
                border:
                  "1px solid rgba(255,255,255,0.30)",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.12)",
              }}
            >

              <div
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "12px",
                }}
              >
                🤝
              </div>

              <h3
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "8px",
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
                Exchange skills with others and grow
                together through peer-to-peer learning.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW TRUEQUE WORKS ================= */}

      <section
        style={{
          padding: "20px 24px 50px",
        }}
      >

        <div className="container">

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >

            <h2
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-heading)",
                marginBottom: "10px",
              }}
            >
              How TRUEQUE Works
            </h2>

            <p
              style={{
                color: "#ffffff",
                margin: 0,
              }}
            >
              Exchange skills in three simple steps.
            </p>

          </div>


          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >

            <div
              style={{
                padding: "22px",
                textAlign: "center",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",
                border:
                  "1px solid rgba(255,255,255,0.30)",
              }}
            >
              <h3 style={{ color: "var(--gold)" }}>
                01
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Choose a Skill
              </p>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "0.82rem",
                }}
              >
                Find something you want to learn.
              </p>
            </div>


            <div
              style={{
                padding: "22px",
                textAlign: "center",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",
                border:
                  "1px solid rgba(255,255,255,0.30)",
              }}
            >
              <h3 style={{ color: "var(--gold)" }}>
                02
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Find a Match
              </p>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "0.82rem",
                }}
              >
                Connect with someone who matches your needs.
              </p>
            </div>


            <div
              style={{
                padding: "22px",
                textAlign: "center",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))",
                border:
                  "1px solid rgba(255,255,255,0.30)",
              }}
            >
              <h3 style={{ color: "var(--gold)" }}>
                03
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Start Exchanging
              </p>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "0.82rem",
                }}
              >
                Learn, teach and grow together.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}

      <section
        style={{
          padding: "20px 24px 60px",
        }}
      >

        <div
          className="container"
          style={{
            textAlign: "center",
          }}
        >

          <h2
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-heading)",
              marginBottom: "10px",
            }}
          >
            Ready to exchange your skills?
          </h2>

          <p
            style={{
              color: "#ffffff",
              marginBottom: "22px",
            }}
          >
            Find a skill, meet a learner, and start exchanging knowledge.
          </p>

          <Link
            to="/matching"
            className="btn btn-primary"
            style={{
              textDecoration: "none",
            }}
          >
            Start Exploring
          </Link>

        </div>

      </section>


      {/* ================= RESPONSIVE ================= */}

      <style>
        {`
          @media (max-width: 850px) {

            .home-hero .container {
              grid-template-columns: 1fr !important;
              text-align: center;
            }

            .home-hero .container > div:first-child {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .home-hero .container > div:last-child {
              margin-top: 10px;
            }

            .container > div {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 600px) {

            .home-hero {
              padding: 45px 16px !important;
            }

            .home-hero img {
              max-width: 100% !important;
            }
          }
        `}
      </style>

    </div>
  );
}