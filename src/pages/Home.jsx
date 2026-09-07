import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/trueque-hero.png";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="home-page">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section
        style={{
          background: "var(--tan)",
          padding: "35px 20px 75px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >

          {/* HERO IMAGE - LONG & CENTERED */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "35px",
            }}
          >
            <img
              src={heroImage}
              alt="TRUEQUE Skill Exchange"
              style={{
                width: "100%",
                maxWidth: "1000px",
                height: "420px",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                borderRadius: "24px",
              }}
            />
          </div>

          {/* HERO CONTENT - BELOW IMAGE */}
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >

            {/* Small Label */}
            <div
              style={{
                display: "inline-block",
                padding: "9px 22px",
                borderRadius: "30px",
                background: "rgba(13, 27, 42, 0.10)",
                color: "var(--oxford-blue)",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                marginBottom: "18px",
              }}
            >
              SKILL EXCHANGE PLATFORM
            </div>

            {/* Main Heading */}
            <h1
              style={{
                color: "var(--oxford-blue)",
                fontSize: "58px",
                lineHeight: "1.1",
                fontWeight: "700",
                margin: "0 0 20px",
              }}
            >
              "Ctrl+Z your confusion. Ctrl+Shift+skills."
            </h1>

            {/* Description */}
            <p
              style={{
                color: "var(--oxford-blue)",
                fontSize: "19px",
                lineHeight: "1.7",
                maxWidth: "700px",
                margin: "0 auto 30px",
              }}
            >
              Connect with people, exchange your skills, share
              knowledge, and grow together with TRUEQUE.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/matching"
                className="btn btn-primary"
              >
                Explore Skills
              </Link>

              <Link
                to="/register"
                className="btn btn-secondary"
              >
                Join TRUEQUE
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          WHY TRUEQUE
      ========================== */}
      <section
        style={{
          background: "var(--oxford-blue)",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >

          <div
            style={{
              textAlign: "center",
              marginBottom: "45px",
            }}
          >
            <h2
              style={{
                color: "var(--gold)",
                fontSize: "38px",
                marginBottom: "12px",
              }}
            >
              Why TRUEQUE?
            </h2>

            <p
              style={{
                color: "#ffffff",
                fontSize: "17px",
              }}
            >
              A simple way to learn, teach, and exchange skills.
            </p>
          </div>


          {/* FEATURE CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "25px",
            }}
          >

            {/* Learn */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--dark-blue), var(--surface))",
                padding: "30px",
                textAlign: "center",
                borderRadius: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "15px",
                }}
              >
                📚
              </div>

              <h3
                style={{
                  color: "var(--gold)",
                  marginBottom: "12px",
                }}
              >
                Learn
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  lineHeight: "1.6",
                }}
              >
                Discover new skills and learn from people
                who have experience in what you want to know.
              </p>
            </div>


            {/* Teach */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--dark-blue), var(--surface))",
                padding: "30px",
                textAlign: "center",
                borderRadius: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "15px",
                }}
              >
                🎓
              </div>

              <h3
                style={{
                  color: "var(--gold)",
                  marginBottom: "12px",
                }}
              >
                Teach
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  lineHeight: "1.6",
                }}
              >
                Share your knowledge and help others improve
                their skills through meaningful exchanges.
              </p>
            </div>


            {/* Exchange */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--dark-blue), var(--surface))",
                padding: "30px",
                textAlign: "center",
                borderRadius: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "15px",
                }}
              >
                🔄
              </div>

              <h3
                style={{
                  color: "var(--gold)",
                  marginBottom: "12px",
                }}
              >
                Exchange
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  lineHeight: "1.6",
                }}
              >
                Connect with the right people and exchange
                skills without traditional barriers.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          HOW TRUEQUE WORKS
      ========================== */}
      <section
        style={{
          background: "var(--tan)",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >

          <div
            style={{
              textAlign: "center",
              marginBottom: "45px",
            }}
          >
            <h2
              style={{
                color: "var(--oxford-blue)",
                fontSize: "38px",
                marginBottom: "12px",
              }}
            >
              How TRUEQUE Works
            </h2>

            <p
              style={{
                color: "var(--oxford-blue)",
                fontSize: "17px",
              }}
            >
              Start your skill exchange in three simple steps.
            </p>
          </div>


          {/* STEPS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "25px",
            }}
          >

            {/* STEP 1 */}
            <div
              style={{
                background: "var(--oxford-blue)",
                padding: "30px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  background: "var(--gold)",
                  color: "var(--oxford-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                1
              </div>

              <h3
                style={{
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                Create Your Profile
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  lineHeight: "1.6",
                }}
              >
                Add your skills and tell the community
                what you can teach and what you want to learn.
              </p>
            </div>


            {/* STEP 2 */}
            <div
              style={{
                background: "var(--oxford-blue)",
                padding: "30px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  background: "var(--gold)",
                  color: "var(--oxford-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                2
              </div>

              <h3
                style={{
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                Find a Match
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  lineHeight: "1.6",
                }}
              >
                Find people whose skills match your
                learning goals.
              </p>
            </div>


            {/* STEP 3 */}
            <div
              style={{
                background: "var(--oxford-blue)",
                padding: "30px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  background: "var(--gold)",
                  color: "var(--oxford-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                3
              </div>

              <h3
                style={{
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                Start Exchanging
              </h3>

              <p
                style={{
                  color: "#ffffff",
                  lineHeight: "1.6",
                }}
              >
                Connect, learn, teach, and grow together
                through skill exchange.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FINAL CTA
      ========================== */}
      <section
        style={{
          background: "var(--oxford-blue)",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "750px",
            margin: "0 auto",
          }}
        >

          <h2
            style={{
              color: "var(--gold)",
              fontSize: "40px",
              marginBottom: "18px",
            }}
          >
            Ready to Exchange Your Skills?
          </h2>

          <p
            style={{
              color: "#ffffff",
              fontSize: "18px",
              lineHeight: "1.7",
              marginBottom: "30px",
            }}
          >
            Join TRUEQUE and discover a community where
            everyone can learn and everyone can teach.
          </p>

          <Link
            to="/matching"
            className="btn btn-primary"
          >
            Start Exploring
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;