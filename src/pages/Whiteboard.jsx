import React, { useEffect, useRef, useState } from "react";
import "./Whiteboard.css";

function Whiteboard() {
  const canvasRef = useRef(null);

  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("#800020");
  const [brushSize, setBrushSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [zoom, setZoom] = useState(100);

  const colors = [
    "#800020",
    "#123B6D",
    "#111111",
    "#D4A72C",
    "#18804B",
    "#E53935",
    "#6A1B9A",
  ];

  /* ---------------- CANVAS SETUP ---------------- */

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      const oldCanvas = document.createElement("canvas");
      oldCanvas.width = canvas.width;
      oldCanvas.height = canvas.height;

      const oldContext = oldCanvas.getContext("2d");
      oldContext.drawImage(canvas, 0, 0);

      canvas.width = rect.width;
      canvas.height = rect.height;

      const context = canvas.getContext("2d");

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
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  /* ---------------- SAVE HISTORY ---------------- */

  const saveHistory = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const image = canvas.toDataURL();

    const newHistory = history.slice(0, historyIndex + 1);

    newHistory.push(image);

    if (newHistory.length > 30) {
      newHistory.shift();
    }

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  /* ---------------- DRAWING ---------------- */

  const getPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = (event) => {
    if (tool !== "pen" && tool !== "eraser") return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const { x, y } = getPosition(event);

    context.beginPath();
    context.moveTo(x, y);

    context.lineWidth = brushSize;
    context.lineCap = "round";
    context.lineJoin = "round";

    if (tool === "eraser") {
      context.strokeStyle = "#ffffff";
    } else {
      context.strokeStyle = color;
    }

    setIsDrawing(true);

    canvas.setPointerCapture(event.pointerId);
  };

  const draw = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const { x, y } = getPosition(event);

    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;

    try {
      canvas.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already be released.
    }

    setIsDrawing(false);

    saveHistory();
  };

  /* ---------------- UNDO ---------------- */

  const undo = () => {
    if (historyIndex <= 0) {
      clearCanvasOnly();
      setHistoryIndex(-1);
      return;
    }

    const previousImage = history[historyIndex - 1];

    restoreImage(previousImage);

    setHistoryIndex(historyIndex - 1);
  };

  /* ---------------- REDO ---------------- */

  const redo = () => {
    if (historyIndex >= history.length - 1) return;

    const nextImage = history[historyIndex + 1];

    restoreImage(nextImage);

    setHistoryIndex(historyIndex + 1);
  };

  /* ---------------- RESTORE IMAGE ---------------- */

  const restoreImage = (image) => {
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

  /* ---------------- CLEAR ---------------- */

  const clearCanvasOnly = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );
  };

  const clearBoard = () => {
    clearCanvasOnly();

    setHistory([]);
    setHistoryIndex(-1);
  };

  /* ---------------- TEXT ---------------- */

  const addText = () => {
    const text = window.prompt("Enter your text:");

    if (!text) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.font = "24px Inter, Arial";
    context.fillStyle = color;

    context.fillText(
      text,
      canvas.width / 2 - 50,
      canvas.height / 2
    );

    saveHistory();
  };

  /* ---------------- DOWNLOAD ---------------- */

  const downloadBoard = () => {
    const canvas = canvasRef.current;

    const link = document.createElement("a");

    link.download = "trueque-whiteboard.png";

    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  /* ---------------- ZOOM ---------------- */

  const increaseZoom = () => {
    setZoom((current) =>
      Math.min(current + 10, 150)
    );
  };

  const decreaseZoom = () => {
    setZoom((current) =>
      Math.max(current - 10, 50)
    );
  };

  const resetZoom = () => {
    setZoom(100);
  };

  /* ---------------- TOOL BUTTON ---------------- */

  const selectTool = (selectedTool) => {
    setTool(selectedTool);

    if (selectedTool === "text") {
      addText();
    }
  };

  return (
    <div className="trueque-whiteboard-page">

      {/* ================= HEADER ================= */}

      <header className="whiteboard-header">

        <div className="whiteboard-brand">

          <div className="whiteboard-logo-box">
            TQ
          </div>

          <div className="whiteboard-brand-text">
            <h2>TRUEQUE</h2>
            <span>Skill Exchange Platform</span>
          </div>

        </div>

        <div className="whiteboard-title">

          <div className="whiteboard-title-icon">
            ✎
          </div>

          <div>
            <h1>Whiteboard</h1>
            <p>Write, draw and share your ideas</p>
          </div>

        </div>

        <div className="whiteboard-online">

          <span className="online-dot"></span>

          <span>Online</span>

          <div className="profile-circle">
            ●
          </div>

        </div>

      </header>


      {/* ================= TOOLBAR ================= */}

      <div className="whiteboard-toolbar">

        <button
          className={`main-tool ${
            tool === "pen" ? "selected-tool" : ""
          }`}
          onClick={() => selectTool("pen")}
        >
          <span>✎</span>
          Pen
        </button>


        <button
          className={`main-tool ${
            tool === "eraser" ? "selected-tool" : ""
          }`}
          onClick={() => selectTool("eraser")}
        >
          <span>⌫</span>
          Eraser
        </button>


        <button
          className={`main-tool ${
            tool === "text" ? "selected-tool" : ""
          }`}
          onClick={() => selectTool("text")}
        >
          <span className="text-icon">T</span>
          Text
        </button>


        <div className="toolbar-divider"></div>


        {/* COLORS */}

        <div className="color-picker">

          {colors.map((item) => (
            <button
              key={item}
              className={`color-circle ${
                color === item ? "active-color" : ""
              }`}
              style={{
                backgroundColor: item,
              }}
              onClick={() => {
                setColor(item);
                setTool("pen");
              }}
            />
          ))}

        </div>


        <div className="toolbar-divider"></div>


        {/* BRUSH SIZE */}

        <div className="brush-size">

          <span>Brush Size</span>

          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(event) =>
              setBrushSize(Number(event.target.value))
            }
          />

        </div>


        {/* UNDO REDO */}

        <div className="undo-redo">

          <button
            onClick={undo}
            disabled={historyIndex < 0}
          >
            ↶
            <span>Undo</span>
          </button>

          <button
            onClick={redo}
            disabled={
              historyIndex >= history.length - 1
            }
          >
            ↷
            <span>Redo</span>
          </button>

        </div>


        <button
          className="clear-button"
          onClick={clearBoard}
        >
          🗑
          <span>Clear</span>
        </button>


        <button
          className="download-button"
          onClick={downloadBoard}
        >
          ↓
          <span>Download</span>
        </button>

      </div>


      {/* ================= WHITEBOARD AREA ================= */}

      <main className="whiteboard-area">

        {/* LEFT TOOLBAR */}

        <aside className="side-tools">

          <button
            className={
              tool === "pen"
                ? "side-tool active-side-tool"
                : "side-tool"
            }
            onClick={() => setTool("pen")}
            title="Pen"
          >
            ✎
          </button>


          <button
            className={
              tool === "eraser"
                ? "side-tool active-side-tool"
                : "side-tool"
            }
            onClick={() => setTool("eraser")}
            title="Eraser"
          >
            ◇
          </button>


          <button
            className="side-tool"
            onClick={addText}
            title="Text"
          >
            T
          </button>


          <button
            className="side-tool"
            title="Selection"
          >
            ⛶
          </button>


          <button
            className="side-tool"
            title="Circle"
          >
            ○
          </button>


          <button
            className="side-tool"
            title="Line"
          >
            ／
          </button>


          <button
            className="side-tool"
            title="Triangle"
          >
            △
          </button>


          <button
            className="side-tool"
            title="Rectangle"
          >
            □
          </button>


          <button
            className="side-tool"
            title="Select"
          >
            ➤
          </button>

        </aside>


        {/* CANVAS */}

        <div
          className="canvas-area"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "center center",
          }}
        >

          <canvas
            ref={canvasRef}
            width={1200}
            height={650}
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerCancel={stopDrawing}
            onPointerLeave={stopDrawing}
          />

        </div>


        {/* ZOOM CONTROLS */}

        <div className="zoom-controls">

          <button onClick={decreaseZoom}>
            −
          </button>

          <button
            className="zoom-number"
            onClick={resetZoom}
          >
            {zoom}%
          </button>

          <button onClick={increaseZoom}>
            +
          </button>

          <button
            onClick={resetZoom}
            title="Reset zoom"
          >
            ⛶
          </button>

        </div>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="whiteboard-footer">

        <div className="footer-left">

          <div className="footer-logo">
            TQ
          </div>

          <strong>TRUEQUE</strong>

          <span className="footer-line"></span>

          <span>
            Exchange skills. Share knowledge. Grow together.
          </span>

        </div>


        <div className="footer-status">

          <span className="footer-online-dot"></span>

          <span>Whiteboard Active</span>

        </div>

      </footer>

    </div>
  );
}

export default Whiteboard;