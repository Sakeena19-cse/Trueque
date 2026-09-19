import React, { useState } from "react";
import { Link } from "react-router-dom";

function Session() {
  const [sessionStarted, setSessionStarted] = useState(false);

  return (
    <div className="session-page">

      <section className="session-hero">
        <div className="session-hero-content">

          <p className="section-label">
            TRUEQUE LEARNING SESSION
          </p>

          <h1>
            Learn Together.
            <br />
            <span>Grow Together.</span>
          </h1>

          <p>
            Connect with your skill partner and
            exchange knowledge through a structured
            TRUEQUE learning session.
          </p>

        </div>
      </section>

      <section className="session-section">

        <div className="session-layout">

          {/* MAIN SESSION CARD */}

          <div className="session-main-card">

            <div className="session-header">

              <div>
                <p className="section-label">
                  UPCOMING SESSION
                </p>

                <h2>
                  Web Development
                </h2>
              </div>

              <span className="session-status">
                Scheduled
              </span>

            </div>

            <div className="session-partner">

              <div className="session-avatar">
                A
              </div>

              <div>
                <p className="partner-label">
                  YOUR SKILL PARTNER
                </p>

                <h3>
                  Alex Kumar
                </h3>

                <p>
                  Web Development Mentor
                </p>
              </div>

            </div>

            <div className="session-details">

              <div className="session-detail">
                <span>DATE</span>
                <strong>20 September 2026</strong>
              </div>

              <div className="session-detail">
                <span>TIME</span>
                <strong>10:00 AM – 11:00 AM</strong>
              </div>

              <div className="session-detail">
                <span>SESSION TYPE</span>
                <strong>Skill Exchange</strong>
              </div>

              <div className="session-detail">
                <span>DURATION</span>
                <strong>60 Minutes</strong>
              </div>

            </div>

            <div className="session-topic">

              <p className="section-label">
                SESSION TOPIC
              </p>

              <h3>
                Introduction to Frontend Development
              </h3>

              <p>
                Learn the fundamentals of building
                modern websites and discuss practical
                frontend development concepts.
              </p>

            </div>

            <div className="session-actions">

              {!sessionStarted ? (
                <button
                  type="button"
                  className="session-start-button"
                  onClick={() => setSessionStarted(true)}
                >
                  Start Session →
                </button>
              ) : (
                <div className="session-active">
                  <span className="live-dot"></span>
                  Session is Active
                </div>
              )}

              <button
                type="button"
                className="session-outline-button"
              >
                View Session Details
              </button>

            </div>

          </div>

          {/* SIDEBAR */}

          <aside className="session-sidebar">

            <div className="session-side-card">

              <p className="section-label">
                SESSION GUIDE
              </p>

              <h2>
                How It Works
              </h2>

              <div className="session-step">

                <span>01</span>

                <div>
                  <h3>Connect</h3>
                  <p>
                    Meet your skill exchange partner.
                  </p>
                </div>

              </div>

              <div className="session-step">

                <span>02</span>

                <div>
                  <h3>Learn & Teach</h3>
                  <p>
                    Share knowledge and practice
                    together.
                  </p>
                </div>

              </div>

              <div className="session-step">

                <span>03</span>

                <div>
                  <h3>Review</h3>
                  <p>
                    Give feedback after completing
                    the session.
                  </p>
                </div>

              </div>

            </div>

            <div className="session-side-card session-review-card">

              <div className="review-icon">
                ★
              </div>

              <h3>
                After Your Session
              </h3>

              <p>
                Complete a quick review and share
                your experience with your partner.
              </p>

              <Link to="/profile">
                View Profile →
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </div>
  );
}

export default Session;
