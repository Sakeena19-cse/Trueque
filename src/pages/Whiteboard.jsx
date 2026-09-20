import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Whiteboard.css";

function Whiteboard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [tool, setTool] = useState("draw");
  const [color, setColor] = useState("#800020");
  const [brushSize, setBrushSize] = useState(4);
  const [isDrawing, setIsDrawing] = useState(false);

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [chatMessage, setChatMessage] = useState("");

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

  /* =====================================================
     CANVAS SETUP
  ===================================================== */

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();

    const previousImage =
      canvas.width > 0
        ? canvas.toDataURL()
        : null;

    const ratio = window.devicePixelRatio || 1;

    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
      0,
      0,
      rect.width,
      rect.height
    );

    if (previousImage) {
      const image = new Image();

      image.onload = () => {
        ctx.drawImage(
          image,
          0,
          0,
          rect.width,
          rect.height
        );
      };

      image.src = previousImage;
    }
  };

  useEffect(() => {
    setupCanvas();

    const timer = setTimeout(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const firstImage = canvas.toDataURL();

      setHistory([firstImage]);
      setHistoryIndex(0);
    }, 100);

    window.addEventListener(
      "resize",
      setupCanvas
    );

    return () => {
      clearTimeout(timer);

      window.removeEventListener(
        "resize",
        setupCanvas
      );
    };
  }, []);

  /* =====================================================
     CANVAS POSITION
  ===================================================== */

  const getPosition = (event) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return {
        x: 0,
        y: 0,
      };
    }

    const rect =
      canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (event.touches) {
      clientX =
        event.touches[0].clientX;

      clientY =
        event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  /* =====================================================
     DRAWING
  ===================================================== */

  const startDrawing = (event) => {
    event.preventDefault();

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const position = getPosition(event);

    setIsDrawing(true);

    ctx.beginPath();

    ctx.moveTo(
      position.x,
      position.y
    );
  };

  const draw = (event) => {
    if (!isDrawing) return;

    event.preventDefault();

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const position = getPosition(event);

    ctx.lineWidth =
      tool === "eraser"
        ? brushSize * 4
        : brushSize;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (tool === "eraser") {
      ctx.strokeStyle = "#ffffff";
    } else {
      ctx.strokeStyle = color;
    }

    ctx.lineTo(
      position.x,
      position.y
    );

    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;

    setIsDrawing(false);

    const canvas = canvasRef.current;

    if (!canvas) return;

    const image =
      canvas.toDataURL();

    const newHistory =
      history.slice(
        0,
        historyIndex + 1
      );

    newHistory.push(image);

    setHistory(newHistory);

    setHistoryIndex(
      newHistory.length - 1
    );
  };

  /* =====================================================
     RESTORE CANVAS
  ===================================================== */

  const restoreImage = (imageData) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (
      !canvas ||
      !container ||
      !imageData
    ) {
      return;
    }

    const rect =
      container.getBoundingClientRect();

    const ratio =
      window.devicePixelRatio || 1;

    const ctx =
      canvas.getContext("2d");

    ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    ctx.clearRect(
      0,
      0,
      rect.width,
      rect.height
    );

    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
      0,
      0,
      rect.width,
      rect.height
    );

    const image = new Image();

    image.onload = () => {
      ctx.drawImage(
        image,
        0,
        0,
        rect.width,
        rect.height
      );
    };

    image.src = imageData;
  };

  /* =====================================================
     UNDO
  ===================================================== */

  const undo = () => {
    if (historyIndex <= 0) {
      return;
    }

    const newIndex =
      historyIndex - 1;

    setHistoryIndex(newIndex);

    restoreImage(
      history[newIndex]
    );
  };

  /* =====================================================
     REDO
  ===================================================== */

  const redo = () => {
    if (
      historyIndex >=
      history.length - 1
    ) {
      return;
    }

    const newIndex =
      historyIndex + 1;

    setHistoryIndex(newIndex);

    restoreImage(
      history[newIndex]
    );
  };

  /* =====================================================
     CLEAR BOARD
  ===================================================== */

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const container =
      containerRef.current;

    if (!canvas || !container) {
      return;
    }

    const rect =
      container.getBoundingClientRect();

    const ratio =
      window.devicePixelRatio || 1;

    const ctx =
      canvas.getContext("2d");

    ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    ctx.clearRect(
      0,
      0,
      rect.width,
      rect.height
    );

    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
      0,
      0,
      rect.width,
      rect.height
    );

    const image =
      canvas.toDataURL();

    const newHistory =
      history.slice(
        0,
        historyIndex + 1
      );

    newHistory.push(image);

    setHistory(newHistory);

    setHistoryIndex(
      newHistory.length - 1
    );
  };

  /* =====================================================
     TEXT TOOL
  ===================================================== */

  const addText = () => {
    const text = window.prompt(
      "Enter text for the whiteboard:"
    );

    if (!text) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    ctx.fillStyle = color;

    ctx.font =
      "24px Arial";

    ctx.fillText(
      text,
      60,
      80
    );

    const image =
      canvas.toDataURL();

    const newHistory =
      history.slice(
        0,
        historyIndex + 1
      );

    newHistory.push(image);

    setHistory(newHistory);

    setHistoryIndex(
      newHistory.length - 1
    );
  };

  /* =====================================================
     DOWNLOAD
  ===================================================== */

  const downloadBoard = () => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const link =
      document.createElement("a");

    link.download =
      "trueque-whiteboard.png";

    link.href =
      canvas.toDataURL(
        "image/png"
      );

    link.click();
  };

  /* =====================================================
     CHAT
  ===================================================== */

  const sendMessage = () => {
    if (!chatMessage.trim()) {
      return;
    }

    const newMessage = {
      name: "You",
      message: chatMessage,
      time: "Now",
    };

    setMessages((previous) => [
      ...previous,
      newMessage,
    ]);

    setChatMessage("");
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <div className="live-whiteboard-page">

      {/* ================= HEADER ================= */}

      <header className="live-board-header">

        <Link
          to="/"
          className="live-board-logo"
        >
          <span className="live-logo-icon">
            👥
          </span>

          <span>
            TRUEQUE
          </span>
        </Link>

        <nav className="live-board-nav">
          <span>Learn</span>
          <span>•</span>
          <span>Teach</span>
          <span>•</span>
          <span>Grow</span>
        </nav>

        <div className="live-session-title">

          <div className="live-badge">
            <span></span>
            LIVE
          </div>

          <div>
            <strong>
              Web Development Basics
            </strong>

            <small>
              with Alex • 45 min left
            </small>
          </div>

        </div>

        <div className="header-actions">

          <span>
            👥 5
          </span>

          <span>
            🔔
          </span>

          <span>
            •••
          </span>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="live-board-main">

        {/* ================= LEFT SIDEBAR ================= */}

        <aside className="board-left-sidebar">

          {/* TEACHER VIDEO */}

          <div className="teacher-video">

            <div className="teacher-placeholder">
              👩🏻
            </div>

            <div className="teacher-label">
              Teacher
            </div>

            <div className="teacher-mic">
              🎙
            </div>

          </div>


          {/* LESSON */}

          <div className="lesson-card">

            <h2>
              Web Development Basics
            </h2>

            <p>
              Learn the fundamentals of
              building modern websites.
            </p>

          </div>


          {/* AGENDA */}

          <div className="agenda-card">

            <h3>
              📅 Today's Agenda
            </h3>

            <div className="agenda-item completed">
              <span>✓</span>
              HTML Structure
            </div>

            <div className="agenda-item active">
              <span>●</span>
              CSS Styling
            </div>

            <div className="agenda-item">
              <span>○</span>
              JavaScript Basics
            </div>

            <div className="agenda-item">
              <span>○</span>
              Q &amp; A
            </div>

          </div>


          {/* QUICK TIP */}

          <div className="quick-tip-card">

            <h3>
              💡 Quick Tips
            </h3>

            <p>
              Use the whiteboard tools
              to ask questions and
              share your ideas!
            </p>

            <span className="tip-smile">
              ☺
            </span>

          </div>

        </aside>


        {/* ================= CENTER ================= */}

        <section className="board-center">

          <div
            className="canvas-container"
            ref={containerRef}
          >

            {/* DRAWING CANVAS */}

            <canvas
              ref={canvasRef}
              onMouseDown={
                startDrawing
              }
              onMouseMove={
                draw
              }
              onMouseUp={
                stopDrawing
              }
              onMouseLeave={
                stopDrawing
              }
              onTouchStart={
                startDrawing
              }
              onTouchMove={
                draw
              }
              onTouchEnd={
                stopDrawing
              }
            />


            {/* WHITEBOARD CONTENT */}

            <div className="whiteboard-content">

              <h1>
                Web Development
              </h1>

              <div className="yellow-line"></div>


              <div className="build-flow">

                <span>
                  Build
                </span>

                <strong>
                  →
                </strong>

                <span>
                  Design
                </span>

                <strong>
                  →
                </strong>

                <span>
                  Create
                </span>

              </div>


              {/* HTML */}

              <div className="concept-row">

                <div className="concept-box html-box">

                  <strong>
                    HTML
                  </strong>

                  <span>
                    (Structure)
                  </span>

                </div>

                <div className="concept-arrow">
                  →
                </div>

                <div className="website-box">

                  <div className="browser-dots">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <div className="website-image">
                    🖼️
                  </div>

                  <div className="website-lines">

                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>

                  </div>

                </div>

              </div>


              {/* CSS + JAVASCRIPT */}

              <div className="concept-row">

                <div className="concept-box css-box">

                  <strong>
                    CSS
                  </strong>

                  <span>
                    (Style)
                  </span>

                </div>

                <div className="concept-arrow">
                  →
                </div>

                <div className="concept-box js-box">

                  <strong>
                    JavaScript
                  </strong>

                  <span>
                    (Interactivity)
                  </span>

                </div>

              </div>


              {/* EXAMPLES */}

              <div className="board-example-row">

                <div>

                  <h3>
                    Example:
                  </h3>

                  <div className="code-box">

                    <span>
                      &lt;!DOCTYPE html&gt;
                    </span>

                    <span>
                      &lt;html&gt;
                    </span>

                    <span>
                      &nbsp;&nbsp;&lt;head&gt;
                    </span>

                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &lt;title&gt;
                      My Website
                      &lt;/title&gt;
                    </span>

                    <span>
                      &nbsp;&nbsp;&lt;/head&gt;
                    </span>

                    <span>
                      &nbsp;&nbsp;&lt;body&gt;
                    </span>

                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &lt;h1&gt;
                      Hello TRUEQUE!
                      &lt;/h1&gt;
                    </span>

                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &lt;p&gt;
                      Learn • Teach • Grow
                      &lt;/p&gt;
                    </span>

                    <span>
                      &nbsp;&nbsp;&lt;/body&gt;
                    </span>

                    <span>
                      &lt;/html&gt;
                    </span>

                  </div>

                </div>


                <div className="css-example">

                  <h3>
                    CSS Example:
                  </h3>

                  <div className="css-code-box">

                    <span>
                      h1 {"{"}
                    </span>

                    <span>
                      &nbsp;&nbsp;
                      color: #800020;
                    </span>

                    <span>
                      &nbsp;&nbsp;
                      font-size: 32px;
                    </span>

                    <span>
                      &nbsp;&nbsp;
                      text-align: center;
                    </span>

                    <span>
                      {"}"}
                    </span>

                  </div>

                </div>

              </div>


              {/* NOTE */}

              <div className="board-note">

                <strong>
                  Together they make
                  a complete website!
                </strong>

              </div>


              {/* STICKY NOTE */}

              <div className="sticky-note">

                Small steps
                <br />
                create
                <br />
                big websites!
                <br />

                <span>
                  ☺
                </span>

              </div>


              <div className="practice-text">
                Practice → Build → Be Better ♥
              </div>

            </div>

          </div>


          {/* ================= TOOLBAR ================= */}

          <div className="whiteboard-toolbar">

            <button
              type="button"
              className={
                tool === "draw"
                  ? "tool-button active"
                  : "tool-button"
              }
              onClick={() =>
                setTool("draw")
              }
            >
              ✎
              <small>
                Draw
              </small>
            </button>


            <button
              type="button"
              className={
                tool === "eraser"
                  ? "tool-button active"
                  : "tool-button"
              }
              onClick={() =>
                setTool("eraser")
              }
            >
              ◇
              <small>
                Eraser
              </small>
            </button>


            <button
              type="button"
              className="tool-button"
              onClick={addText}
            >
              T
              <small>
                Text
              </small>
            </button>


            <button
              type="button"
              className="tool-button"
              onClick={undo}
            >
              ↶
              <small>
                Undo
              </small>
            </button>


            <button
              type="button"
              className="tool-button"
              onClick={redo}
            >
              ↷
              <small>
                Redo
              </small>
            </button>


            <button
              type="button"
              className="tool-button"
              onClick={clearBoard}
            >
              🗑
              <small>
                Clear
              </small>
            </button>


            <div className="toolbar-divider"></div>


            {/* COLORS */}

            <div className="color-options">

              {[
                "#800020",
                "#e63946",
                "#f4a261",
                "#2a9d8f",
                "#2196f3",
                "#7b2cbf",
                "#222222",
              ].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={
                    color === item
                      ? "color-dot selected"
                      : "color-dot"
                  }
                  style={{
                    backgroundColor:
                      item,
                  }}
                  onClick={() => {
                    setColor(item);
                    setTool("draw");
                  }}
                  aria-label={`Choose ${item}`}
                ></button>
              ))}

            </div>


            {/* BRUSH */}

            <div className="brush-control">

              <span>
                Brush
              </span>

              <input
                type="range"
                min="1"
                max="15"
                value={brushSize}
                onChange={(event) =>
                  setBrushSize(
                    Number(
                      event.target.value
                    )
                  )
                }
              />

            </div>


            {/* DOWNLOAD */}

            <button
              type="button"
              className="download-button"
              onClick={downloadBoard}
            >
              Download
            </button>

          </div>

        </section>


        {/* ================= RIGHT SIDEBAR ================= */}

        <aside className="board-right-sidebar">

          {/* PARTICIPANTS */}

          <div className="participants-card">

            <h3>
              👥 Participants (5)
            </h3>

            {participants.map(
              (person) => (
                <div
                  className="participant"
                  key={person.name}
                >

                  <div className="participant-avatar">
                    {person.avatar}
                  </div>

                  <div className="participant-info">

                    <strong>
                      {person.name}
                    </strong>

                    <span>
                      ({person.role})
                    </span>

                  </div>

                  {person.teacher ? (
                    <span className="crown">
                      👑
                    </span>
                  ) : (
                    <span className="mute">
                      🎙
                    </span>
                  )}

                </div>
              )
            )}

          </div>


          {/* LIVE CHAT */}

          <div className="chat-card">

            <h3>
              💬 Live Chat
            </h3>

            <div className="chat-messages">

              {messages.map(
                (message, index) => (
                  <div
                    className="chat-message"
                    key={index}
                  >

                    <div className="chat-avatar">
                      👤
                    </div>

                    <div>

                      <strong>
                        {message.name}
                      </strong>

                      <div className="message-bubble">
                        {message.message}
                      </div>

                      <small>
                        {message.time}
                      </small>

                    </div>

                  </div>
                )
              )}

            </div>


            {/* CHAT INPUT */}

            <div className="chat-input-area">

              <input
                type="text"
                placeholder="Type a message..."
                value={chatMessage}
                onChange={(event) =>
                  setChatMessage(
                    event.target.value
                  )
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter"
                  ) {
                    sendMessage();
                  }
                }}
              />

              <button
                type="button"
                onClick={sendMessage}
              >
                ➤
              </button>

            </div>

          </div>

        </aside>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="live-board-footer">

        <div>

          <span>
            🎓
          </span>

          <span>
            Better Skills
          </span>

          <b>
            ·
          </b>

          <span>
            Stronger Connections
          </span>

          <b>
            ·
          </b>

          <span>
            A Brighter Future
          </span>

        </div>

        <Link
          to="/session"
          className="end-session-button"
        >
          ☎ End Session
        </Link>

      </footer>

    </div>
  );
}

export default Whiteboard;