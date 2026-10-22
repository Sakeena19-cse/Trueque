import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { apiFetch, isLoggedIn } from "../api";

function Session() {
  const { id } = useParams();

  const [session, setSession] = useState(null);
  const [partner, setPartner] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) return;
    let cancelled = false;

    async function load() {
      try {
        let sessionData = null;

        if (id) {
          const res = await apiFetch(`/matches/sessions/${id}/`);
          if (!res.ok) throw new Error("Session not found.");
          sessionData = await res.json();
        } else {
          const res = await apiFetch("/matches/sessions/");
          if (!res.ok) throw new Error("Could not load your sessions.");
          const data = await res.json();
          const list = Array.isArray(data) ? data : data.results || [];
          sessionData = list.find((s) => s.status === "scheduled") || null;
        }

        if (!sessionData) {
          if (!cancelled) setSession(null);
          return;
        }

        const [matchRes, meRes] = await Promise.all([
          apiFetch(`/matches/matches/${sessionData.match}/`),
          apiFetch("/auth/me/"),
        ]);

        let partnerName = "";
        if (matchRes.ok && meRes.ok) {
          const match = await matchRes.json();
          const me = await meRes.json();
          partnerName =
            match.user1_username === me.username
              ? match.user2_username
              : match.user1_username;
        }

        if (!cancelled) {
          setSession(sessionData);
          setPartner(partnerName);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Something went wrong.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  const when = session ? new Date(session.scheduled_time) : null;
  const dateText = when
    ? when.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
  const timeText = when
    ? when.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
    : "";
  const statusText = session
    ? session.status.charAt(0).toUpperCase() + session.status.slice(1)
    : "";

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

            {loading && <p>Loading your session...</p>}

            {!loading && error && <p className="auth-error">{error}</p>}

            {!loading && !error && !session && (
              <div>
                <p className="section-label">NO UPCOMING SESSION</p>
                <h2>You have no scheduled sessions yet.</h2>
                <p>Find a skill partner to book your first one.</p>
                <Link to="/matching" className="session-whiteboard-button">
                  Find a Match →
                </Link>
              </div>
            )}

            {!loading && !error && session && (
              <>
                <div className="session-header">

                  <div>
                    <p className="section-label">
                      UPCOMING SESSION
                    </p>

                    <h2>
                      {partner ? `Session with ${partner}` : "Skill Exchange Session"}
                    </h2>
                  </div>

                  <span className="session-status">
                    {statusText}
                  </span>

                </div>

                <div className="session-partner">

                  <div className="session-avatar">
                    {partner ? partner.charAt(0).toUpperCase() : "?"}
                  </div>

                  <div>
                    <p className="partner-label">
                      YOUR SKILL PARTNER
                    </p>

                    <h3>
                      {partner || "Your partner"}
                    </h3>
                  </div>

                </div>

                <div className="session-details">

                  <div className="session-detail">
                    <span>DATE</span>
                    <strong>{dateText}</strong>
                  </div>

                  <div className="session-detail">
                    <span>TIME</span>
                    <strong>{timeText}</strong>
                  </div>

                  <div className="session-detail">
                    <span>SESSION TYPE</span>
                    <strong>Skill Exchange</strong>
                  </div>

                  <div className="session-detail">
                    <span>STATUS</span>
                    <strong>{statusText}</strong>
                  </div>

                </div>

                {session.notes && (
                  <div className="session-topic">
                    <p className="section-label">
                      SESSION NOTES
                    </p>
                    <p>{session.notes}</p>
                  </div>
                )}

                <div className="session-actions">

                  <a
                    href={session.video_call_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="session-start-button"
                  >
                    Join Video Call →
                  </a>

                  <Link
                    to="/whiteboard"
                    className="session-whiteboard-button"
                  >
                    Open Whiteboard →
                  </Link>

                </div>
              </>
            )}

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