import React, { useState } from "react";
import { Link } from "react-router-dom";

function Session() {
  const [form, setForm] = useState({
    partner: "",
    skill: "",
    date: "",
    time: "",
    mode: "Online",
    notes: "",
  });

  const [sessions, setSessions] = useState(() => {
    return JSON.parse(localStorage.getItem("truequeSessions") || "[]");
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (
      !form.partner.trim() ||
      !form.skill.trim() ||
      !form.date ||
      !form.time
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const newSession = {
      id: Date.now(),
      ...form,
      status: "Upcoming",
    };

    const updatedSessions = [...sessions, newSession];

    setSessions(updatedSessions);
    localStorage.setItem(
      "truequeSessions",
      JSON.stringify(updatedSessions)
    );

    setForm({
      partner: "",
      skill: "",
      date: "",
      time: "",
      mode: "Online",
      notes: "",
    });

    setMessage("Session saved successfully!");
  };

  const cancelSession = (id) => {
    const updatedSessions = sessions.filter(
      (session) => session.id !== id
    );

    setSessions(updatedSessions);

    localStorage.setItem(
      "truequeSessions",
      JSON.stringify(updatedSessions)
    );
  };

  return (
    <main className="session-page">
      <section className="session-heading">
        <span className="section-label">LEARN TOGETHER</span>
        <h1>Book Your Learning Session</h1>
        <p>
          Connect with your skill exchange partner and schedule
          your next learning session.
        </p>
      </section>

      <div className="session-layout">
        <section className="session-form-card">
          <h2>Schedule a Session</h2>

          <form onSubmit={handleBooking}>
            <div className="form-group">
              <label>Partner Name *</label>
              <input
                type="text"
                name="partner"
                value={form.partner}
                onChange={handleChange}
                placeholder="Enter partner name"
                required
              />
            </div>

            <div className="form-group">
              <label>Skill to Learn *</label>
              <input
                type="text"
                name="skill"
                value={form.skill}
                onChange={handleChange}
                placeholder="Example: React.js"
                required
              />
            </div>

            <div className="session-form-row">
              <div className="form-group">
                <label>Date *</label>
                <input
                  type="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Time *</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Session Mode</label>

              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            <div className="form-group">
              <label>Additional Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Write your learning goals..."
                rows="4"
              />
            </div>

            {message && (
              <p className="session-message">{message}</p>
            )}

            <button type="submit" className="session-submit">
              Book Session
            </button>
          </form>
        </section>

        <section className="session-list-card">
          <div className="session-list-heading">
            <div>
              <span className="section-label">YOUR SCHEDULE</span>
              <h2>Upcoming Sessions</h2>
            </div>

            <span className="session-count">
              {sessions.length} Sessions
            </span>
          </div>

          {sessions.length === 0 ? (
            <div className="session-empty">
              <div className="session-empty-icon">📅</div>
              <h3>No Sessions Yet</h3>
              <p>
                Book your first learning session to get started.
              </p>
            </div>
          ) : (
            <div className="session-list">
              {sessions
                .slice()
                .sort((a, b) =>
                  `${a.date} ${a.time}`.localeCompare(
                    `${b.date} ${b.time}`
                  )
                )
                .map((session) => (
                  <article
                    className="session-item"
                    key={session.id}
                  >
                    <div className="session-date">
                      <span>{session.date}</span>
                      <strong>{session.time}</strong>
                    </div>

                    <div className="session-details">
                      <h3>{session.skill}</h3>
                      <p>Partner: {session.partner}</p>
                      <span className="session-mode">
                        {session.mode}
                      </span>

                      {session.notes && (
                        <p className="session-notes">
                          {session.notes}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      className="session-cancel"
                      onClick={() => cancelSession(session.id)}
                    >
                      Cancel
                    </button>
                  </article>
                ))}
            </div>
          )}

          <Link to="/calendar" className="session-calendar-link">
            View Session Calendar →
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Session;