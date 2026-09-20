import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Whiteboard.css";

function Whiteboard() {
  const canvasRef = useRef(null);
  const boardRef = useRef(null);

  const [tool, setTool] = useState("draw");
  const [color, setColor] = useState("#800020");
  const [brushSize, setBrushSize] = useState(4);
  const [drawing, setDrawing] = useState(false);

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [chatText, setChatText] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "Priya",
      message: "This is really helpful!",
      time: "10:24 AM",
    },
    {
      name: "Rahul",
      message: "Can you explain CSS a bit more?",
      time: "10:26 AM",
    },
    {
      name: "Alex",
      message: "Sure! Let me show you an example.",
      time: "10:27 AM",
    },
    {
      name: "Sneha",
      message: "This is so cool!",
      time: "10:28 AM",
    },
  ]);

  const participants = [
    {
      name: "Alex",
      role: "Teacher",
      avatar: "👩🏻",
      teacher: true,
    },
    {
      name: "Priya",
      role: "Student",
      avatar: "👩🏻",
    },
    {
      name: "Rahul",
      role: "Student",
      avatar: "👨🏻",
    },
    {
      name: "Sneha",
      role: "Student",
      avatar: "👩🏽",
    },
    {
      name: "Arjun",
      role: "Student",
      avatar: "👨🏽",
    },
  ];

  /* ---------------- CANVAS SETUP ---------------- */

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const board = boardRef.current;

    if (!canvas || !board) return;

    const rect = board.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;

    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  };

  useEffect(() => {
    setupCanvas();

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      saveHistory();
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ---------------- DRAWING ---------------- */

  const getPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const startDrawing = (event) => {
    if (tool === "text") return;

    event.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const position = getPosition(event);

    ctx.beginPath();
    ctx.moveTo(position.x, position.y);

    ctx.strokeStyle = tool === "eraser" ? "#fffdf7" : color;
    ctx.lineWidth = tool === "eraser" ? brushSize * 3 : brushSize;

    setDrawing(true);
  };

  const draw = (event) => {
    if (!drawing) return;

    event.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const position = getPosition(event);

    ctx.lineTo(position.x, position.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!drawing) return;

    setDrawing(false);
    saveHistory();
  };

  /* ---------------- HISTORY ---------------- */

  const saveHistory = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const image = canvas.toDataURL();

    setHistory((previous) => {
      const newHistory = previous.slice(0, historyIndex + 1);
      newHistory.push(image);

      return newHistory.slice(-20);
    });

    setHistoryIndex((previous) => Math.min(previous + 1, 19));
  };

  const restoreImage = (image) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const ratio = window.devicePixelRatio || 1;

      ctx.drawImage(
        img,
        0,
        0,
        canvas.width / ratio,
        canvas.height / ratio
      );
    };

    img.src = image;
  };

  const undo = () => {
    if (historyIndex <= 0) {
      clearCanvasWithoutHistory();
      return;
    }

    const newIndex = historyIndex - 1;

    setHistoryIndex(newIndex);
    restoreImage(history[newIndex]);
  };

  const redo = () => {
    if (historyIndex >= history.length - 1) return;

    const newIndex = historyIndex + 1;

    setHistoryIndex(newIndex);
    restoreImage(history[newIndex]);
  };

  const clearCanvasWithoutHistory = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const clearBoard = () => {
    clearCanvasWithoutHistory();
    saveHistory();
  };

  /* ---------------- TEXT ---------------- */

  const addText = () => {
    const text = window.prompt("Enter text for the whiteboard:");

    if (!text) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const textX = 100;
    const textY = 120;

    ctx.font = "600 22px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, textX, textY);

    saveHistory();
  };

  /* ---------------- DOWNLOAD ---------------- */

  const downloadBoard = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const link = document.createElement("a");

    link.download = "trueque-whiteboard.png";
    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  /* ---------------- CHAT ---------------- */

  const sendMessage = (event) => {
    event.preventDefault();

    if (!chatText.trim()) return;

    setMessages((previous) => [
      ...previous,
      {
        name: "You",
        message: chatText,
        time: "Now",
      },
    ]);

    setChatText("");
  };

  return (
    <div className="live-whiteboard-page">

      {/* ================= HEADER ================= */}

      <header className="live-board-header">

        <Link to="/" className="live-board-logo">
          <div className="live-logo-icon">TQ</div>

          <div>
            <div className="live-logo-name">TRUEQUE</div>
            <div className="live-logo-subtitle">
              Skill Exchange Platform
            </div>
          </div>
        </Link>

        <div className="live-session-title">
          <span className="live-badge">
            <span className="live-dot"></span>
            LIVE
          </span>

          <span>Web Development Session</span>
        </div>

        <div className="header-actions">
          <span className="viewer-count">
            👥 5 participants
          </span>

          <Link to="/session" className="leave-button">
            Leave Session
          </Link>
        </div>

      </header>

      {/* ================= MAIN ================= */}

      <main className="live-board-main">

        {/* ================= LEFT SIDEBAR ================= */}

        <aside className="board-left-sidebar">

          <div className="teacher-video">

            <div className="teacher-placeholder">

              <div className="teacher-avatar">
                👩🏻‍🏫
              </div>

              <div className="teacher-camera-icon">
                ●
              </div>

              <div className="teacher-label">
                Alex
                <span>Teacher</span>
              </div>

            </div>

            <div className="teacher-mic">
              🎤
            </div>

          </div>

          <div className="lesson-card">

            <div className="lesson-label">
              CURRENT LESSON
            </div>

            <h2>Introduction to Web Development</h2>

            <p>
              Learn how HTML, CSS and JavaScript
              work together to create modern websites.
            </p>

            <div className="lesson-progress">
              <div className="progress-top">
                <span>Lesson Progress</span>
                <strong>65%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-value"></div>
              </div>
            </div>

          </div>

          <div className="agenda-card">

            <h3>Today's Agenda</h3>

            <div className="agenda-item completed">
              <span>✓</span>
              <div>
                <strong>Introduction</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="agenda-item active">
              <span>2</span>
              <div>
                <strong>HTML & CSS</strong>
                <small>In progress</small>
              </div>
            </div>

            <div className="agenda-item">
              <span>3</span>
              <div>
                <strong>JavaScript</strong>
                <small>Upcoming</small>
              </div>
            </div>

            <div className="agenda-item">
              <span>4</span>
              <div>
                <strong>Mini Project</strong>
                <small>Upcoming</small>
              </div>
            </div>

          </div>

          <div className="quick-tip-card">

            <div className="tip-icon">
              💡
            </div>

            <div>
              <strong>Quick Tip</strong>

              <p>
                Ask questions anytime through
                the live chat.
              </p>
            </div>

          </div>

        </aside>

        {/* ================= CENTER ================= */}

        <section className="board-center">

          <div className="board-heading">

            <div>
              <span className="board-small-title">
                LIVE WHITEBOARD
              </span>

              <h1>
                Web Development
              </h1>
            </div>

            <div className="board-status">
              ● Teaching Live
            </div>

          </div>

          {/* ================= WHITEBOARD ================= */}

          <div
            className="canvas-container"
            ref={boardRef}
          >

            <canvas
              ref={canvasRef}
              onPointerDown={startDrawing}
              onPointerMove={draw}
              onPointerUp={stopDrawing}
              onPointerLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />

            {/* STATIC TEACHING CONTENT */}

            <div className="whiteboard-content">

              <div className="board-title-area">

                <span>LESSON 02</span>

                <h2>
                  Build • Design • Create
                </h2>

                <div className="yellow-line"></div>

                <p>
                  How HTML, CSS & JavaScript
                  work together
                </p>

              </div>

              {/* BUILD FLOW */}

              <div className="build-flow">

                <div className="concept-box html-box">

                  <div className="concept-icon">
                    &lt;/&gt;
                  </div>

                  <h3>HTML</h3>

                  <span>Structure</span>

                </div>

                <div className="concept-arrow">
                  →
                </div>

                <div className="concept-box css-box">

                  <div className="concept-icon">
                    🎨
                  </div>

                  <h3>CSS</h3>

                  <span>Style</span>

                </div>

                <div className="concept-arrow">
                  →
                </div>

                <div className="concept-box js-box">

                  <div className="concept-icon">
                    JS
                  </div>

                  <h3>JavaScript</h3>

                  <span>Interactivity</span>

                </div>

              </div>

              {/* WEBSITE ILLUSTRATION */}

              <div className="website-section">

                <div className="website-box">

                  <div className="browser-header">

                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-address">
                      mywebsite.com
                    </div>

                  </div>

                  <div className="website-body">

                    <div className="website-nav">
                      <div className="fake-logo">
                        TQ
                      </div>

                      <div className="fake-links">
                        <span>Home</span>
                        <span>About</span>
                        <span>Skills</span>
                      </div>
                    </div>

                    <div className="website-hero">

                      <div className="hero-lines">

                        <div className="big-line"></div>
                        <div className="small-line"></div>

                        <div className="fake-button">
                          Explore
                        </div>

                      </div>

                      <div className="hero-image">
                        <div className="image-circle">
                          &lt;/&gt;
                        </div>
                      </div>

                    </div>

                    <div className="website-cards">

                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                  </div>

                </div>

                <div className="website-label">
                  Complete Website
                </div>

              </div>

              {/* CODE EXAMPLES */}

              <div className="board-example-row">

                <div className="code-box">

                  <div className="code-header">
                    HTML
                  </div>

                  <div className="code-content">
                    <div>
                      &lt;h1&gt;Hello World!&lt;/h1&gt;
                    </div>

                    <div>
                      &lt;p&gt;Welcome to TRUEQUE&lt;/p&gt;
                    </div>

                    <div>
                      &lt;button&gt;Learn More&lt;/button&gt;
                    </div>
                  </div>

                </div>

                <div className="code-box css-code-box">

                  <div className="code-header">
                    CSS
                  </div>

                  <div className="code-content">

                    <div>
                      .button {"{"}
                    </div>

                    <div className="code-indent">
                      background: burgundy;
                    </div>

                    <div className="code-indent">
                      color: white;
                    </div>

                    <div>{"}"}</div>

                  </div>

                </div>

              </div>

              {/* BOTTOM NOTES */}

              <div className="board-bottom-area">

                <div className="board-note">

                  <strong>
                    Remember:
                  </strong>

                  <span>
                    HTML = Structure
                  </span>

                  <span>
                    CSS = Style
                  </span>

                  <span>
                    JavaScript = Behaviour
                  </span>

                </div>

                <div className="sticky-note">

                  <div className="sticky-pin">
                    📌
                  </div>

                  <strong>
                    Small steps create
                    big websites!
                  </strong>

                  <span>
                    Practice → Build → Improve
                  </span>

                </div>

              </div>

              <div className="board-footer-message">
                Together they make a complete website ♥
              </div>

            </div>

          </div>

          {/* ================= TOOLBAR ================= */}

          <div className="whiteboard-toolbar">

            <button
              className={`tool-button ${
                tool === "draw" ? "selected" : ""
              }`}
              onClick={() => setTool("draw")}
            >
              ✎
              <small>Draw</small>
            </button>

            <button
              className={`tool-button ${
                tool === "eraser" ? "selected" : ""
              }`}
              onClick={() => setTool("eraser")}
            >
              ◇
              <small>Eraser</small>
            </button>

            <button
              className="tool-button"
              onClick={() => {
                setTool("text");
                addText();
              }}
            >
              T
              <small>Text</small>
            </button>

            <div className="toolbar-divider"></div>

            <button
              className="tool-button"
              onClick={undo}
            >
              ↶
              <small>Undo</small>
            </button>

            <button
              className="tool-button"
              onClick={redo}
            >
              ↷
              <small>Redo</small>
            </button>

            <button
              className="tool-button"
              onClick={clearBoard}
            >
              🗑
              <small>Clear</small>
            </button>

            <div className="toolbar-divider"></div>

            <div className="color-options">

              {[
                "#800020",
                "#1f3c88",
                "#111111",
                "#d4a72c",
                "#2e7d32",
                "#d64545",
              ].map((item) => (
                <button
                  key={item}
                  className={`color-dot ${
                    color === item ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: item,
                  }}
                  onClick={() => {
                    setColor(item);
                    setTool("draw");
                  }}
                />
              ))}

            </div>

            <div className="brush-control">

              <span>Brush</span>

              <input
                type="range"
                min="1"
                max="15"
                value={brushSize}
                onChange={(event) =>
                  setBrushSize(Number(event.target.value))
                }
              />

            </div>

            <button
              className="download-button"
              onClick={downloadBoard}
            >
              ↓ Download
            </button>

          </div>

        </section>

        {/* ================= RIGHT SIDEBAR ================= */}

        <aside className="board-right-sidebar">

          {/* PARTICIPANTS */}

          <div className="participants-card">

            <div className="side-card-header">

              <div>
                <h3>Participants</h3>
                <span>5 people online</span>
              </div>

              <span className="online-dot"></span>

            </div>

            <div className="participants-list">

              {participants.map((person) => (
                <div
                  className="participant"
                  key={person.name}
                >

                  <div
                    className={`participant-avatar ${
                      person.teacher ? "teacher" : ""
                    }`}
                  >
                    {person.avatar}

                    <span className="participant-online"></span>
                  </div>

                  <div className="participant-info">

                    <strong>
                      {person.name}
                    </strong>

                    <span>
                      {person.role}
                    </span>

                  </div>

                  {person.teacher && (
                    <span className="teacher-tag">
                      TEACHER
                    </span>
                  )}

                </div>
              ))}

            </div>

          </div>

          {/* CHAT */}

          <div className="chat-card">

            <div className="chat-header">

              <div>
                <h3>Live Chat</h3>
                <span>Ask questions & share ideas</span>
              </div>

              <span>💬</span>

            </div>

            <div className="chat-messages">

              {messages.map((message, index) => (
                <div
                  className="chat-message"
                  key={index}
                >

                  <div className="chat-avatar">
                    {message.name === "Alex"
                      ? "👩🏻"
                      : message.name === "Rahul"
                      ? "👨🏻"
                      : "👩🏻"}
                  </div>

                  <div className="chat-content">

                    <div className="chat-name-row">

                      <strong>
                        {message.name}
                      </strong>

                      <span>
                        {message.time}
                      </span>

                    </div>

                    <div className="message-bubble">
                      {message.message}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            <form
              className="chat-input-area"
              onSubmit={sendMessage}
            >

              <input
                type="text"
                placeholder="Type your message..."
                value={chatText}
                onChange={(event) =>
                  setChatText(event.target.value)
                }
              />

              <button type="submit">
                ➤
              </button>

            </form>

          </div>

        </aside>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="live-board-footer">

        <div>
          <strong>TRUEQUE</strong>

          <span>
            Exchange skills. Share knowledge. Grow together.
          </span>
        </div>

        <div className="footer-session-status">
          <span className="footer-live-dot"></span>
          Session is live
        </div>

        <Link
          to="/session"
          className="end-session-button"
        >
          End Session
        </Link>

      </footer>

    </div>
  );
}

export default Whiteboard;