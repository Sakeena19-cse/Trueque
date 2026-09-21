import React, { useRef, useState } from "react";
import "./Whiteboard.css";

function Whiteboard() {
  const canvasRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("#800020");
  const [size, setSize] = useState(4);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();

    ctx.beginPath();
    ctx.moveTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    );

    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    ctx.lineWidth = size;
    ctx.lineCap = "round";

    if (tool === "eraser") {
      ctx.strokeStyle = "#ffffff";
    } else {
      ctx.strokeStyle = color;
    }

    ctx.lineTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    );

    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.closePath();
    setIsDrawing(false);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="whiteboard-page">

      <div className="whiteboard-header">
        <h1>TRUEQUE Whiteboard</h1>
        <p>Write, draw and share your ideas</p>
      </div>

      <div className="whiteboard-container">

        <div className="toolbar">

          <button
            className={tool === "pen" ? "active" : ""}
            onClick={() => setTool("pen")}
          >
            ✏️ Pen
          </button>

          <button
            className={tool === "eraser" ? "active" : ""}
            onClick={() => setTool("eraser")}
          >
            🧽 Eraser
          </button>

          <label>
            Color:
            <input
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                setTool("pen");
              }}
            />
          </label>

          <label>
            Size:
            <input
              type="range"
              min="1"
              max="20"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </label>

          <button onClick={clearBoard}>
            🗑 Clear
          </button>

        </div>

        <div className="canvas-wrapper">
          <canvas
            ref={canvasRef}
            width={1200}
            height={650}
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerLeave={stopDrawing}
          />
        </div>

      </div>

    </div>
  );
}

export default Whiteboard;