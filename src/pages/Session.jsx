import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiFetch, isLoggedIn } from "../api";

function Session() {
  const { id } = useParams();

  const [session, setSession] = useState(null);
  const [partner, setPartner] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // RATING & REVIEWS
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const [reviews, setReviews] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("truequeReviews")
      ) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "truequeReviews",
      JSON.stringify(reviews)
    );
  }, [reviews]);

  const submitReview = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a star rating.");
      return;
    }

    if (!reviewText.trim()) {
      alert("Please write your feedback.");
      return;
    }

    const newReview = {
      id: Date.now(),
      partner: partner || "Skill Partner",
      sessionId: id || session?.id || "general",
      rating,
      comment: reviewText.trim(),
      date: new Date().toLocaleDateString()
    };

    setReviews((previous) => [newReview, ...previous]);

    setRating(0);
    setReviewText("");

    alert("Your review has been submitted successfully!");
  };
  // SESSION BOOKING CALENDAR

const [currentMonth, setCurrentMonth] = useState(new Date());

const [selectedDate, setSelectedDate] = useState("");

const [selectedTime, setSelectedTime] = useState("");

const [bookings, setBookings] = useState(() => {
  try {
    return JSON.parse(
      localStorage.getItem("truequeSessionBookings")
    ) || [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem(
    "truequeSessionBookings",
    JSON.stringify(bookings)
  );
}, [bookings]);

  useEffect(() => {
    if (!isLoggedIn()) {
      setLoading(false);
      return;
      
    }
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
    // CALENDAR DATE LOGIC

const year = currentMonth.getFullYear();
const month = currentMonth.getMonth();

const firstDay = new Date(year, month, 1).getDay();

const daysInMonth = new Date(year, month + 1, 0).getDate();

const calendarDays = [
  ...Array(firstDay).fill(null),
  ...Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  ),
];

const monthName = currentMonth.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});

const previousMonth = () => {
  setCurrentMonth(
    new Date(year, month - 1, 1)
  );
};

const nextMonth = () => {
  setCurrentMonth(
    new Date(year, month + 1, 1)
  );
};

const handleDateSelect = (day) => {
  if (!day) return;

  const selected = new Date(year, month, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selected < today) return;

  const formattedDate = [
    year,
    String(month + 1).padStart(2, "0"),
    String(day).padStart(2, "0"),
  ].join("-");

  setSelectedDate(formattedDate);
  setSelectedTime("");
};

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
          {/* SESSION BOOKING CALENDAR */}

<div style={{
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  marginBottom: "30px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.06)"
}}>

  <p className="section-label">PLAN YOUR LEARNING</p>

  <h2 style={{ color: "#800020" }}>
    Session Booking Calendar
  </h2>

  <p>Select a date for your skill exchange session.</p>

  {/* MONTH NAVIGATION */}

  <div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0"
  }}>

    <button type="button" onClick={previousMonth}>
      ← Previous
    </button>

    <h3 style={{ color: "#800020" }}>
      {monthName}
    </h3>

    <button type="button" onClick={nextMonth}>
      Next →
    </button>

  </div>

  {/* WEEK DAYS */}

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "6px",
    textAlign: "center"
  }}>

    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
      <strong key={day} style={{
        color: "#800020",
        padding: "10px 0"
      }}>
        {day}
      </strong>
    ))}

    {/* CALENDAR DATES */}

    {calendarDays.map((day, index) => {

      const dateString = day
        ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
        : "";

      const isPast = day
        ? new Date(year, month, day) <
          new Date(new Date().setHours(0, 0, 0, 0))
        : false;

      const isSelected = selectedDate === dateString;

      return (
        <button
          key={index}
          type="button"
          disabled={!day || isPast}
          onClick={() => handleDateSelect(day)}
          style={{
            padding: "12px 2px",
            border: "1px solid #eadfce",
            borderRadius: "8px",
            background: isSelected ? "#800020" : "#FFF5E1",
            color: isSelected ? "#fff" : "#4A2028",
            cursor: !day || isPast ? "not-allowed" : "pointer",
            opacity: isPast || !day ? 0.35 : 1,
            fontWeight: isSelected ? "bold" : "normal"
          }}
        >
          {day || ""}
        </button>
      );
    })}

  </div>

  {/* SELECTED DATE */}

  <p style={{
    marginTop: "20px",
    color: "#800020",
    fontWeight: "bold"
  }}>
    {selectedDate
      ? `Selected Date: ${selectedDate}`
      : "Please select a session date."}
  </p>

</div>

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
                <div className="trueque-review-section">

  <p className="section-label">SHARE YOUR EXPERIENCE</p>
  <h2>Rate Your Learning Session</h2>

  <p>
    Share your experience and help your skill partner improve.
  </p>

  <form onSubmit={submitReview}>

    <label className="review-form-label">
      Your Rating
    </label>

    <div className="review-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          className={rating >= star ? "active-star" : ""}
          aria-label={`${star} star rating`}
        >
          ★
        </button>
      ))}
    </div>

    <p className="selected-rating">
      {rating > 0 ? `${rating} out of 5 stars` : "Select your rating"}
    </p>

    <label className="review-form-label">
      Write Your Feedback
    </label>

    <textarea
      value={reviewText}
      onChange={(e) => setReviewText(e.target.value)}
      placeholder="Share your learning experience..."
      rows="4"
      required
    />

    <button type="submit" className="review-submit-button">
      Submit Review →
    </button>

  </form>
</div>
              </>
            )}

          </div>
          {/* SUBMITTED REVIEWS */}

<div className="trueque-reviews-display">

  <p className="section-label">COMMUNITY FEEDBACK</p>
  <h2>Submitted Reviews</h2>

  {reviews.length > 0 ? (
    reviews.map((item) => (
      <div className="trueque-review-card" key={item.id}>

        <div className="review-card-header">
          <h3>{item.partner}</h3>

          <span className="review-date">
            {item.date}
          </span>
        </div>

        <div className="review-card-stars">
          {"★".repeat(item.rating)}
          {"☆".repeat(5 - item.rating)}
        </div>

        <p>{item.comment}</p>

      </div>
    ))
  ) : (
    <p>No reviews submitted yet. Be the first to share your experience!</p>
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