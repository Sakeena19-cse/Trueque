import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Whiteboard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [tool, setTool] = useState("draw");
  const [color, setColor] = useState("#800020");
  const [brushSize, setBrushSize] = useState(4);
  const [isDrawing, setIsDrawing] = useState(false);

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
  ]);

  const [newMessage, setNewMessage] = useState("");

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const oldCanvas = document.createElement("canvas");
    oldCanvas.width = canvas.width;
    oldCanvas.height = canvas.height;

    if (canvas.width > 0 && canvas.height > 0) {
      oldCanvas
        .getContext("2d")
        .drawImage(canvas, 0, 0);
    }

    const rect = container.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = 650;

    const context = canvas.getContext("2d");

    context.fillStyle = "#fffdf8";
    context.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    if (oldCanvas.width > 0) {
      context.drawImage(
        oldCanvas,
        0,
        0,
        oldCanvas.width,
        oldCanvas.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    context.lineCap = "round";
    context.lineJoin = "round";
  };

  const getPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = (event) => {
    if (tool !== "draw" && tool !== "eraser") return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const position = getPosition(event);

    context.beginPath();
    context.moveTo(position.x, position.y);

    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const position = getPosition(event);

    context.lineWidth = brushSize;

    if (tool === "eraser") {
      context.strokeStyle = "#fffdf8";
    } else {
      context.strokeStyle = color;
    }

    context.lineTo(position.x, position.y);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;

    setIsDrawing(false);
    saveHistory();
  };

  const saveHistory = () => {
    const canvas = canvasRef.current;

    const image = canvas.toDataURL();

    const newHistory = history.slice(
      0,
      historyIndex + 1
    );

    newHistory.push(image);

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const restoreCanvas = (image) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const img = new Image();

    img.onload = () => {
      context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      context.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height
      );
    };

    img.src = image;
  };

  const undo = () => {
    if (historyIndex <= 0) {
      clearCanvas();
      return;
    }

    const previousIndex = historyIndex - 1;

    restoreCanvas(history[previousIndex]);

    setHistoryIndex(previousIndex);
  };

  const redo = () => {
    if (historyIndex >= history.length - 1) return;

    const nextIndex = historyIndex + 1;

    restoreCanvas(history[nextIndex]);

    setHistoryIndex(nextIndex);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#fffdf8";

    context.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    saveHistory();
  };

  const addText = () => {
    const text = window.prompt(
      "Enter text for the whiteboard:"
    );

    if (!text) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = color;
    context.font = "28px Arial";

    context.fillText(
      text,
      80,
      100 + Math.random() * 300
    );

    saveHistory();
  };

  const downloadBoard = () => {
    const canvas = canvasRef.current;

    const link = document.createElement("a");

    link.download = "trueque-whiteboard.png";

    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      {
        name: "You",
        message: newMessage,
        time: "Now",
      },
    ]);

    setNewMessage("");
  };

  return (
    <div className="trueque-whiteboard-page">

      {/* HEADER */}

      <header className="whiteboard-header">

        <Link
          to="/"
          className="whiteboard-brand"
        >
          TRUEQUE
        </Link>

        <div className="whiteboard-session-title">
          <span className="live-dot"></span>

          <strong>LIVE</strong>

          <div>
            <h3>
              Web Development Basics
            </h3>

            <p>
              with Alex · 45 min left
            </p>
          </div>
        </div>

        <div className="whiteboard-header-actions">
          <span>👥 5</span>
          <span>🔔</span>
          <span>•••</span>
        </div>

      </header>


      {/* MAIN CONTENT */}

      <div className="whiteboard-layout">

        {/* LEFT PANEL */}

        <aside className="whiteboard-left">

          <div className="teacher-card">

            <div className="teacher-photo">
              👩🏻‍🏫
            </div>

            <div className="teacher-label">
              Teacher
            </div>

          </div>


          <div className="info-card">

            <h2>
              Web Development Basics
            </h2>

            <p>
              Learn the fundamentals of building
              modern websites.
            </p>

            <hr />

            <h3>
              📅 Today's Agenda
            </h3>

            <div className="agenda-item completed">
              ● HTML Structure
            </div>

            <div className="agenda-item active">
              ● CSS Styling
            </div>

            <div className="agenda-item">
              ○ JavaScript Basics
            </div>

            <div className="agenda-item">
              ○ Q & A
            </div>

          </div>


          <div className="tip-card">

            <h3>💡 Quick Tips</h3>

            <p>
              Use the whiteboard tools to ask
              questions and share your ideas!
            </p>

          </div>

        </aside>


        {/* CENTER WHITEBOARD */}

        <main className="whiteboard-center">

          <div
            className="canvas-wrapper"
            ref={containerRef}
          >

            <canvas
              ref={canvasRef}
              onPointerDown={startDrawing}
              onPointerMove={draw}
              onPointerUp={stopDrawing}
              onPointerLeave={stopDrawing}
            />

            <div className="board-title">
              Web Development
            </div>

            <div className="board-note">
              Build → Design → Create
            </div>

          </div>


          {/* TOOLBAR */}

          <div className="whiteboard-toolbar">

            <button
              className={
                tool === "draw"
                  ? "tool-button active"
                  : "tool-button"
              }
              onClick={() => setTool("draw")}
            >
              ✎
              <span>Draw</span>
            </button>


            <button
              className={
                tool === "eraser"
                  ? "tool-button active"
                  : "tool-button"
              }
              onClick={() => setTool("eraser")}
            >
              ◇
              <span>Eraser</span>
            </button>


            <button
              className="tool-button"
              onClick={addText}
            >
              T
              <span>Text</span>
            </button>


            <button
              className="tool-button"
              onClick={undo}
            >
              ↶
              <span>Undo</span>
            </button>


            <button
              className="tool-button"
              onClick={redo}
            >
              ↷
              <span>Redo</span>
            </button>


            <button
              className="tool-button"
              onClick={clearCanvas}
            >
              🗑
              <span>Clear</span>
            </button>


            <div className="color-tools">

              {[
                "#800020",
                "#ef4444",
                "#f59e0b",
                "#22c55e",
                "#0ea5e9",
                "#8b5cf6",
                "#111827",
              ].map((item) => (
                <button
                  key={item}
                  className="color-button"
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

              <label>
                Brush
              </label>

              <input
                type="range"
                min="1"
                max="20"
                value={brushSize}
                onChange={(e) =>
                  setBrushSize(
                    Number(e.target.value)
                  )
                }
              />

            </div>

          </div>


          <button
            className="download-button"
            onClick={downloadBoard}
          >
            Download Whiteboard
          </button>

        </main>


        {/* RIGHT PANEL */}

        <aside className="whiteboard-right">

          {/* PARTICIPANTS */}

          <div className="participants-card">

            <h2>
              👥 Participants (5)
            </h2>

            <div className="participant">
              <div className="avatar">👩🏻</div>

              <div>
                <strong>Alex</strong>
                <span>Teacher</span>
              </div>

              <b>♛</b>
            </div>


            <div className="participant">
              <div className="avatar">👩🏻</div>

              <div>
                <strong>Priya</strong>
                <span>Student</span>
              </div>

              <span>🎤</span>
            </div>


            <div className="participant">
              <div className="avatar">👨🏻</div>

              <div>
                <strong>Rahul</strong>
                <span>Student</span>
              </div>

              <span>🎤</span>
            </div>


            <div className="participant">
              <div className="avatar">👩🏽</div>

              <div>
                <strong>Sneha</strong>
                <span>Student</span>
              </div>

              <span>🎤</span>
            </div>


            <div className="participant">
              <div className="avatar">👨🏻</div>

              <div>
                <strong>Arjun</strong>
                <span>Student</span>
              </div>

              <span>🎤</span>
            </div>

          </div>


          {/* CHAT */}

          <div className="chat-card">

            <h2>
              💬 Live Chat
            </h2>

            <div className="chat-messages">

              {messages.map(
                (item, index) => (
                  <div
                    className="chat-message"
                    key={index}
                  >

                    <strong>
                      {item.name}
                    </strong>

                    <p>
                      {item.message}
                    </p>

                    <small>
                      {item.time}
                    </small>

                  </div>
                )
              )}

            </div>


            <div className="chat-input">

              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) =>
                  setNewMessage(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />

              <button
                onClick={sendMessage}
              >
                ➤
              </button>

            </div>

          </div>

        </aside>

      </div>


      {/* FOOTER */}

      <footer className="whiteboard-footer">

        <div>
          🎓
          <span>
            Better Skills
          </span>

          <b>·</b>

          <span>
            Stronger Connections
          </span>

          <b>·</b>

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