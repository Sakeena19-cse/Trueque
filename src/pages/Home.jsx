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
    padding: "70px 0",
  }}
>
  <div
    className="container"
    style={{
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      alignItems: "center",
      gap: "60px",
      minHeight: "520px",
    }}
  >
    {/* LEFT - CONTENT */}
    <div
      style={{
        maxWidth: "560px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "8px 18px",
          borderRadius: "30px",
          background: "rgba(13, 27, 42, 0.1)",
          color: "var(--oxford-blue)",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "1px",
          marginBottom: "22px",
        }}
      >
        SKILL EXCHANGE PLATFORM
      </div>

      <h1
        style={{
          color: "var(--oxford-blue)",
          fontSize: "58px",
          lineHeight: "1.08",
          margin: "0 0 22px",
          fontWeight: "700",
        }}
      >
        Learn.
        <br />
        Teach.
        <br />
        <span style={{ color: "var(--dark-blue)" }}>
          Exchange.
        </span>
      </h1>

      <p
        style={{
          color: "var(--oxford-blue)",
          fontSize: "18px",
          lineHeight: "1.7",
          maxWidth: "500px",
          margin: "0 0 32px",
        }}
      >
        Connect with people, exchange your skills, share
        knowledge, and grow together with TRUEQUE.
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Link to="/matching" className="btn btn-primary">
          Explore Skills
        </Link>

        <Link to="/register" className="btn btn-secondary">
          Join TRUEQUE
        </Link>
      </div>
    </div>

    {/* RIGHT - PICTURE */}
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
          maxWidth: "600px",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  </div>

  {/* MOBILE RESPONSIVE */}
  <style>{`
    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr !important;
        gap: 35px !important;
        text-align: center !important;
      }

      .container > div:first-child {
        text-align: center !important;
        margin: auto;
      }

      .container h1 {
        font-size: 44px !important;
      }

      .container p {
        margin-left: auto !important;
        margin-right: auto !important;
      }

      .container > div:last-child {
        order: -1;
      }
    }
  `}</style>
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