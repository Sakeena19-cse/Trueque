import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Whiteboard() {
  const canvasRef = useRef(null);

  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("#800020");
  const [brushSize, setBrushSize] = useState(5);

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const drawing = useRef(false);

  // --------------------------------------------------
  // CANVAS SETUP
  // --------------------------------------------------

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.width = 1200;
    canvas.height = 650;

    const context = canvas.getContext("2d");

    context.fillStyle = "#FFFFFF";
    context.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    context.lineCap = "round";
    context.lineJoin = "round";

    saveCanvas();
  }, []);

  // --------------------------------------------------
  // SAVE CANVAS TO HISTORY
  // --------------------------------------------------

  const saveCanvas = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const image = canvas.toDataURL();

    setHistory((previousHistory) => {
      const newHistory = previousHistory.slice(
        0,
        historyIndex + 1
      );

      newHistory.push(image);

      return newHistory;
    });

    setHistoryIndex((previousIndex) => previousIndex + 1);
  };

  // --------------------------------------------------
  // GET MOUSE / TOUCH POSITION
  // --------------------------------------------------

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

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  // --------------------------------------------------
  // START DRAWING
  // --------------------------------------------------

  const startDrawing = (event) => {
    event.preventDefault();

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (tool === "text") {
      addText(event);
      return;
    }

    const { x, y } = getPosition(event);

    drawing.current = true;

    context.beginPath();
    context.moveTo(x, y);
  };

  // --------------------------------------------------
  // DRAW
  // --------------------------------------------------

  const draw = (event) => {
    event.preventDefault();

    if (!drawing.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const { x, y } = getPosition(event);

    context.lineWidth = brushSize;
    context.lineCap = "round";
    context.lineJoin = "round";

    if (tool === "eraser") {
      context.globalCompositeOperation =
        "destination-out";
      context.strokeStyle = "rgba(0,0,0,1)";
    } else if (tool === "highlighter") {
      context.globalCompositeOperation = "source-over";
      context.strokeStyle = color;
      context.globalAlpha = 0.25;
    } else {
      context.globalCompositeOperation = "source-over";
      context.strokeStyle = color;
      context.globalAlpha = 1;
    }

    context.lineTo(x, y);
    context.stroke();
  };

  // --------------------------------------------------
  // STOP DRAWING
  // --------------------------------------------------

  const stopDrawing = (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!drawing.current) return;

    drawing.current = false;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.closePath();
    context.globalAlpha = 1;
    context.globalCompositeOperation =
      "source-over";

    saveCanvas();
  };

  // --------------------------------------------------
  // TEXT TOOL
  // --------------------------------------------------

  const addText = (event) => {
    const text = window.prompt(
      "Enter the text you want to add:"
    );

    if (!text) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const { x, y } = getPosition(event);

    context.globalCompositeOperation =
      "source-over";

    context.globalAlpha = 1;

    context.fillStyle = color;
    context.font = `${Math.max(
      18,
      brushSize * 5
    )}px Arial`;

    context.fillText(text, x, y);

    saveCanvas();
  };

  // --------------------------------------------------
  // CLEAR BOARD
  // --------------------------------------------------

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.globalCompositeOperation =
      "source-over";

    context.globalAlpha = 1;

    context.fillStyle = "#FFFFFF";

    context.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    saveCanvas();
  };

  // --------------------------------------------------
  // UNDO
  // --------------------------------------------------

  const undo = () => {
    if (historyIndex <= 0) return;

    const newIndex = historyIndex - 1;

    setHistoryIndex(newIndex);

    restoreCanvas(history[newIndex]);
  };

  // --------------------------------------------------
  // REDO
  // --------------------------------------------------

  const redo = () => {
    if (historyIndex >= history.length - 1) {
      return;
    }

    const newIndex = historyIndex + 1;

    setHistoryIndex(newIndex);

    restoreCanvas(history[newIndex]);
  };

  // --------------------------------------------------
  // RESTORE CANVAS
  // --------------------------------------------------

  const restoreCanvas = (imageData) => {
    const canvas = canvasRef.current;

    const image = new Image();

    image.onload = () => {
      const context = canvas.getContext("2d");

      context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      context.drawImage(
        image,
        0,
        0,
        canvas.width,
        canvas.height
      );
    };

    image.src = imageData;
  };

  // --------------------------------------------------
  // DOWNLOAD WHITEBOARD
  // --------------------------------------------------

  const downloadBoard = () => {
    const canvas = canvasRef.current;

    const link = document.createElement("a");

    link.download = "trueque-whiteboard.png";

    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  // --------------------------------------------------
  // COLOR CHANGE
  // --------------------------------------------------

  const colors = [
    "#800020",
    "#D4A72C",
    "#000000",
    "#1E3A8A",
    "#166534",
    "#B91C1C",
  ];

  return (
    <div className="whiteboard-page">

      {/* HERO */}

      <section className="whiteboard-hero">
        <div className="whiteboard-hero-content">

          <div>
            <p className="section-label">
              TRUEQUE LEARNING TOOL
            </p>

            <h1>
              Collaborative
              <br />
              <span>Whiteboard.</span>
            </h1>

            <p>
              Draw ideas, explain concepts and
              share knowledge during your
              TRUEQUE learning session.
            </p>
          </div>

          <Link
            to="/session"
            className="whiteboard-back-button"
          >
            ← Back to Session
          </Link>

        </div>
      </section>

      {/* WHITEBOARD */}

      <section className="whiteboard-container">

        <div className="whiteboard-layout">

          {/* MAIN WHITEBOARD */}

          <div className="whiteboard-main">

            {/* TOOLBAR */}

            <div className="whiteboard-toolbar">

              <button
                type="button"
                className={`whiteboard-tool ${
                  tool === "pen"
                    ? "active"
                    : ""
                }`}
                onClick={() => setTool("pen")}
              >
                ✎ Pen
              </button>

              <button
                type="button"
                className={`whiteboard-tool ${
                  tool === "highlighter"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setTool("highlighter")
                }
              >
                🖍 Highlighter
              </button>

              <button
                type="button"
                className={`whiteboard-tool ${
                  tool === "eraser"
                    ? "active"
                    : ""
                }`}
                onClick={() => setTool("eraser")}
              >
                Eraser
              </button>

              <button
                type="button"
                className={`whiteboard-tool ${
                  tool === "text"
                    ? "active"
                    : ""
                }`}
                onClick={() => setTool("text")}
              >
                T Text
              </button>

              <button
                type="button"
                className="whiteboard-tool"
                onClick={undo}
                disabled={historyIndex <= 0}
              >
                ↶ Undo
              </button>

              <button
                type="button"
                className="whiteboard-tool"
                onClick={redo}
                disabled={
                  historyIndex >=
                  history.length - 1
                }
              >
                ↷ Redo
              </button>

              <button
                type="button"
                className="whiteboard-tool"
                onClick={clearBoard}
              >
                Clear
              </button>

              <button
                type="button"
                className="whiteboard-tool"
                onClick={downloadBoard}
              >
                ↓ Download
              </button>

            </div>

            {/* COLORS */}

            <div className="whiteboard-controls">

              <div className="whiteboard-control-group">

                <span>
                  Color
                </span>

                <div className="whiteboard-colors">

                  {colors.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="whiteboard-color"
                      style={{
                        backgroundColor: item,
                      }}
                      onClick={() => {
                        setColor(item);
                        setTool("pen");
                      }}
                      aria-label={`Choose ${item}`}
                    />
                  ))}

                </div>

              </div>

              <div className="whiteboard-control-group">

                <label htmlFor="brushSize">
                  Brush Size
                </label>

                <select
                  id="brushSize"
                  className="whiteboard-size"
                  value={brushSize}
                  onChange={(event) =>
                    setBrushSize(
                      Number(event.target.value)
                    )
                  }
                >
                  <option value="2">
                    Small
                  </option>

                  <option value="5">
                    Medium
                  </option>

                  <option value="10">
                    Large
                  </option>

                  <option value="18">
                    Extra Large
                  </option>
                </select>

              </div>

            </div>

            {/* CANVAS */}

            <div className="whiteboard-canvas-wrapper">

              <canvas
                ref={canvasRef}
                className="whiteboard-canvas"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />

            </div>

          </div>

          {/* SIDEBAR */}

          <aside className="whiteboard-side">

            <div className="whiteboard-info-card">

              <p className="section-label">
                CURRENT SESSION
              </p>

              <h2>
                Web Development
              </h2>

              <p>
                Use this whiteboard to explain
                programming concepts, draw
                diagrams and share ideas.
              </p>

            </div>

            <div className="whiteboard-info-card">

              <p className="section-label">
                SESSION PARTNER
              </p>

              <h3>
                Alex Kumar
              </h3>

              <p>
                Web Development Mentor
              </p>

            </div>

            <div className="whiteboard-info-card">

              <p className="section-label">
                WHITEBOARD TOOLS
              </p>

              <p>
                ✎ Draw ideas
              </p>

              <p>
                🖍 Highlight important points
              </p>

              <p>
                Erase content
              </p>

              <p>
                T Add text
              </p>

              <p>
                ↶ Undo changes
              </p>

              <p>
                ↓ Save your board
              </p>

            </div>

          </aside>

        </div>

      </section>

    </div>
  );
}

export default Whiteboard;