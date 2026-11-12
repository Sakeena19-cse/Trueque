import React, { useRef, useState, useEffect } from "react";

function Whiteboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#38BDF8");
  const [brushSize, setBrushSize] = useState(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#0B1B30";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const getPosition = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const position = getPosition(e);

    canvas.setPointerCapture(e.pointerId);

    context.beginPath();
    context.moveTo(position.x, position.y);
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    context.lineCap = "round";
    context.lineJoin = "round";

    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const context = canvasRef.current.getContext("2d");
    const position = getPosition(e);

    context.lineTo(position.x, position.y);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#0B1B30";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadBoard = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");

    link.download = "trueque-whiteboard.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <main className="whiteboard-page">
      <section className="whiteboard-heading">
        <span className="section-label">COLLABORATIVE LEARNING</span>
        <h1>Learning Whiteboard</h1>
        <p>
          Write, draw and explain your ideas visually while
          learning new skills.
        </p>
      </section>

      <section className="whiteboard-container">
        <div className="whiteboard-toolbar">
          <div className="whiteboard-tool-group">
            <label>Brush Colour</label>

            <div className="whiteboard-colors">
              {["#38BDF8", "#BAE6FD", "#FFFFFF"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`color-option ${
                    color === item ? "active" : ""
                  }`}
                  style={{ backgroundColor: item }}
                  onClick={() => setColor(item)}
                  aria-label={`Select ${item} brush`}
                />
              ))}
            </div>
          </div>

          <div className="whiteboard-tool-group brush-control">
            <label htmlFor="brush-size">
              Brush Size: {brushSize}px
            </label>

            <input
              id="brush-size"
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
            />
          </div>

          <div className="whiteboard-actions">
            <button
              type="button"
              className="whiteboard-clear"
              onClick={clearBoard}
            >
              Clear Board
            </button>

            <button
              type="button"
              className="whiteboard-download"
              onClick={downloadBoard}
            >
              Download
            </button>
          </div>
        </div>

        <div className="whiteboard-canvas-wrapper">
          <canvas
            ref={canvasRef}
            width={1200}
            height={650}
            className="whiteboard-canvas"
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerCancel={stopDrawing}
            onPointerLeave={stopDrawing}
          />
        </div>

        <p className="whiteboard-tip">
          Tip: Select a brush colour and draw directly on the board.
          Download your work when you finish.
        </p>
      </section>
    </main>
  );
}

export default Whiteboard;