import React, { useEffect, useRef, useState } from "react";
import "./Whiteboard.css";

function Whiteboard() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const drawingRef = useRef(false);

  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("#800020");
  const [brushSize, setBrushSize] = useState(5);
  const [zoom, setZoom] = useState(100);

  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);
  const [mediaReady, setMediaReady] = useState(false);
  const [cameraError, setCameraError] = useState("");

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const colors = [
    "#800020",
    "#123B6D",
    "#111111",
    "#D4A72C",
    "#18804B",
    "#E53935",
    "#6A1B9A"
  ];

  // CANVAS INITIALIZATION
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 1200;
    canvas.height = 650;

    const context = canvas.getContext("2d");
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    setHistory([canvas.toDataURL()]);
    setHistoryIndex(0);
  }, []);

  // SAVE DRAWING HISTORY
  const saveHistory = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const image = canvas.toDataURL();

    setHistory((previous) => {
      const updated = previous.slice(0, historyIndex + 1);
      updated.push(image);
      return updated;
    });

    setHistoryIndex((previous) => previous + 1);
  };

  // DRAWING START
  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = (event.clientX - rect.left) *
      (canvas.width / rect.width);

    const y = (event.clientY - rect.top) *
      (canvas.height / rect.height);

    drawingRef.current = true;

    context.beginPath();
    context.moveTo(x, y);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = brushSize;
    context.strokeStyle =
      tool === "eraser" ? "#FFFFFF" : color;
  };

  // DRAWING MOVE
  const draw = (event) => {
    if (!drawingRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = (event.clientX - rect.left) *
      (canvas.width / rect.width);

    const y = (event.clientY - rect.top) *
      (canvas.height / rect.height);

    context.lineTo(x, y);
    context.stroke();
  };

  // DRAWING STOP
  const stopDrawing = () => {
    if (!drawingRef.current) return;

    drawingRef.current = false;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      context.closePath();
    }

    saveHistory();
  };

  // UNDO
  const undo = () => {
    if (historyIndex <= 0) return;

    const nextIndex = historyIndex - 1;
    restoreHistory(nextIndex);
  };

  // REDO
  const redo = () => {
    if (historyIndex >= history.length - 1) return;

    const nextIndex = historyIndex + 1;
    restoreHistory(nextIndex);
  };

  // RESTORE CANVAS
  const restoreHistory = (index) => {
    const canvas = canvasRef.current;
    if (!canvas || !history[index]) return;

    const image = new Image();

    image.onload = () => {
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
      setHistoryIndex(index);
    };

    image.src = history[index];
  };

  // CLEAR BOARD
  const clearBoard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    saveHistory();
  };

  // ADD TEXT
  const addText = () => {
    const text = window.prompt("Enter your text:");

    if (!text) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    context.font = "24px Arial";
    context.fillStyle = color;

    context.fillText(text, 100, 100);

    saveHistory();
  };

  // DOWNLOAD BOARD
  const downloadBoard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");

    link.download = "TRUEQUE-Whiteboard.png";
    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  // SELECT TOOL
  const selectTool = (selectedTool) => {
    setTool(selectedTool);

    if (selectedTool === "text") {
      addText();
    }
  };

  // ZOOM
  const zoomIn = () => {
    setZoom((previous) => Math.min(previous + 10, 150));
  };

  const zoomOut = () => {
    setZoom((previous) => Math.max(previous - 10, 50));
  };

  // START CAMERA
  const startCamera = async () => {
    try {
      setCameraError("");

      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraError("Camera access is not supported by this browser.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOn(true);
      setMicOn(true);
      setMediaReady(true);

    } catch (error) {
      setCameraError(
        "Camera or microphone permission denied or unavailable."
      );
    }
  };

  // TOGGLE CAMERA
  const toggleCamera = () => {
    const track = streamRef.current?.getVideoTracks()[0];

    if (!track) return;

    track.enabled = !track.enabled;
    setCameraOn(track.enabled);
  };

  // TOGGLE MICROPHONE
  const toggleMic = () => {
    const track = streamRef.current?.getAudioTracks()[0];

    if (!track) return;

    track.enabled = !track.enabled;
    setMicOn(track.enabled);
  };

  // END CALL
  const endCall = () => {
    streamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });

    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraOn(false);
    setMicOn(false);
    setMediaReady(false);
  };

  // CLEANUP CAMERA
  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, []);

  return (
    <div className="trueque-whiteboard-page">

      {/* HEADER */}
      <header className="whiteboard-header">

        <div className="whiteboard-brand">
          <h2>TQ</h2>
          <span>TRUEQUE</span>
        </div>

        <h2>Virtual Classroom</h2>

        <div className="whiteboard-online">
          <span>●</span> Online
        </div>

      </header>

      {/* VIDEO CALL SECTION */}
      <section className="classroom-video-panel">

        <div className="local-video-card">

          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
          />

          {!cameraOn && (
            <div className="video-placeholder">
              <span>📷</span>
              <p>Your Camera Preview</p>
            </div>
          )}

          <span className="video-name">You</span>

        </div>

        <div className="partner-video-card">

          <div className="partner-video-placeholder">
            <span>👤</span>
            <p>Partner video will appear here</p>
          </div>

          <span className="video-name">Skill Partner</span>

        </div>

        <div className="call-controls">

          <button onClick={startCamera}>
            📷 Start Camera
          </button>

          <button
            onClick={toggleCamera}
            disabled={!mediaReady}
          >
            {cameraOn ? "📷 Camera On" : "🚫 Camera Off"}
          </button>

          <button
            onClick={toggleMic}
            disabled={!mediaReady}
          >
            {micOn ? "🎤 Mic On" : "🔇 Mic Off"}
          </button>

          <button
            className="end-call-button"
            onClick={endCall}
          >
            📞 End Call
          </button>

        </div>

        {cameraError && (
          <p className="camera-error">{cameraError}</p>
        )}

      </section>

      {/* TOOLBAR */}
      <div className="whiteboard-toolbar">

        <button
          className={tool === "pen" ? "active" : ""}
          onClick={() => selectTool("pen")}
        >
          ✏️ Pen
        </button>

        <button
          className={tool === "eraser" ? "active" : ""}
          onClick={() => selectTool("eraser")}
        >
          🧽 Eraser
        </button>

        <button
          className={tool === "text" ? "active" : ""}
          onClick={() => selectTool("text")}
        >
          T Text
        </button>

        <div className="whiteboard-colors">
          {colors.map((item) => (
            <button
              key={item}
              onClick={() => setColor(item)}
              style={{ backgroundColor: item }}
              className={color === item ? "selected-color" : ""}
              aria-label={`Select ${item}`}
            />
          ))}
        </div>

        <label>
          Brush Size
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(event) =>
              setBrushSize(Number(event.target.value))
            }
          />
        </label>

        <button onClick={undo} disabled={historyIndex <= 0}>
          ↶ Undo
        </button>

        <button
          onClick={redo}
          disabled={historyIndex >= history.length - 1}
        >
          ↷ Redo
        </button>

        <button onClick={clearBoard}>
          Clear
        </button>

        <button onClick={downloadBoard}>
          ⬇ Download
        </button>

      </div>

      {/* WHITEBOARD AREA */}
      <main className="whiteboard-area">

        <aside className="side-tools">
          <button onClick={() => selectTool("pen")}>✏️</button>
          <button onClick={() => selectTool("eraser")}>🧽</button>
          <button onClick={() => selectTool("text")}>T</button>
        </aside>

        <div className="canvas-area">

          <canvas
            ref={canvasRef}
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerLeave={stopDrawing}
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top left",
              touchAction: "none"
            }}
          />

          <div className="zoom-controls">

            <button onClick={zoomOut}>−</button>

            <span>{zoom}%</span>

            <button onClick={zoomIn}>+</button>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="whiteboard-footer">
        <p>TRUEQUE © 2026 | Virtual Classroom</p>
        <p>Learn • Teach • Share</p>
      </footer>

    </div>
  );
}

export default Whiteboard;