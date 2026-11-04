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

  // START DRAWING
  const startDrawing = (event) => {
    if (event.button !== 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) * (canvas.width / rect.width);

    const y =
      (event.clientY - rect.top) * (canvas.height / rect.height);

    drawingRef.current = true;

    context.beginPath();
    context.moveTo(x, y);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = brushSize;
    context.strokeStyle =
      tool === "eraser" ? "#FFFFFF" : color;

    canvas.setPointerCapture?.(event.pointerId);
  };

  // DRAWING MOVE
  const draw = (event) => {
    if (!drawingRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) * (canvas.width / rect.width);

    const y =
      (event.clientY - rect.top) * (canvas.height / rect.height);

    context.lineTo(x, y);
    context.stroke();
  };

  // STOP DRAWING
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

  // RESTORE HISTORY
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

  // UNDO
  const undo = () => {
    if (historyIndex <= 0) return;
    restoreHistory(historyIndex - 1);
  };

  // REDO
  const redo = () => {
    if (historyIndex >= history.length - 1) return;
    restoreHistory(historyIndex + 1);
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

    if (!text?.trim()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    context.font = `${Math.max(16, brushSize * 5)}px Arial`;
    context.fillStyle = color;
    context.fillText(text, 100, 100);

    saveHistory();
  };

  // SELECT TOOL
  const selectTool = (selectedTool) => {
    setTool(selectedTool);

    if (selectedTool === "text") {
      addText();
    }
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
        setCameraError(
          "Camera access is not supported. Use localhost or HTTPS."
        );
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
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
    setCameraError("");
  };

  // CAMERA CLEANUP
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
          <div className="whiteboard-logo-box">TQ</div>

          <div className="whiteboard-brand-text">
            <h2>TRUEQUE</h2>
            <span>Learn • Teach • Share</span>
          </div>
        </div>

        <div className="whiteboard-title">
          <span className="whiteboard-title-icon">✎</span>
          <div>
            <h1>Virtual Classroom</h1>
            <p>Learn together. Grow together.</p>
          </div>
        </div>

        <div className="whiteboard-online">
          <span className="online-dot"></span>
          Online
          <div className="profile-circle">👤</div>
        </div>

      </header>

      {/* VIDEO CALL SECTION */}
      <section className="classroom-video-panel">

        <div className="video-card local-video-card">

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

        <div className="video-card partner-video-card">

          <div className="partner-video-placeholder">
            <span>👤</span>
            <p>Partner video will appear here</p>
          </div>

          <span className="video-name">Skill Partner</span>

        </div>

        <div className="call-controls">

          <button
            className="call-button"
            onClick={startCamera}
            disabled={mediaReady}
          >
            📷 Start Camera
          </button>

          <button
            className="call-button"
            onClick={toggleCamera}
            disabled={!mediaReady}
          >
            {cameraOn ? "📷 Camera On" : "🚫 Camera Off"}
          </button>

          <button
            className="call-button"
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
          className={`main-tool ${tool === "pen" ? "selected-tool" : ""}`}
          onClick={() => selectTool("pen")}
        >
          <span>✏️</span> Pen
        </button>

        <button
          className={`main-tool ${tool === "eraser" ? "selected-tool" : ""}`}
          onClick={() => selectTool("eraser")}
        >
          <span>🧽</span> Eraser
        </button>

        <button
          className={`main-tool ${tool === "text" ? "selected-tool" : ""}`}
          onClick={() => selectTool("text")}
        >
          <span className="text-icon">T</span> Text
        </button>

        <div className="toolbar-divider"></div>

        <div className="color-picker">
          {colors.map((item) => (
            <button
              key={item}
              type="button"
              title={`Select ${item}`}
              onClick={() => setColor(item)}
              style={{ backgroundColor: item }}
              className={`color-circle ${
                color === item ? "active-color" : ""
              }`}
            />
          ))}
        </div>

        <div className="toolbar-divider"></div>

        <label className="brush-size">
          <span>Brush Size: {brushSize}</span>
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

        <div className="toolbar-divider"></div>

        <div className="undo-redo">

          <button
            onClick={undo}
            disabled={historyIndex <= 0}
            title="Undo"
          >
            ↶
            <span>Undo</span>
          </button>

          <button
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
            title="Redo"
          >
            ↷
            <span>Redo</span>
          </button>

        </div>

        <button className="clear-button" onClick={clearBoard}>
          🗑 Clear
        </button>

        <button className="download-button" onClick={downloadBoard}>
          ⬇ Download
        </button>

      </div>

      {/* WHITEBOARD AREA */}
      <main className="whiteboard-area">

        <aside className="side-tools">

          <button
            className={`side-tool ${tool === "pen" ? "active-side-tool" : ""}`}
            onClick={() => selectTool("pen")}
            title="Pen"
          >
            ✏️
          </button>

          <button
            className={`side-tool ${tool === "eraser" ? "active-side-tool" : ""}`}
            onClick={() => selectTool("eraser")}
            title="Eraser"
          >
            🧽
          </button>

          <button
            className={`side-tool ${tool === "text" ? "active-side-tool" : ""}`}
            onClick={() => selectTool("text")}
            title="Text"
          >
            T
          </button>

        </aside>

        <div className="canvas-area">

          <canvas
  ref={canvasRef}
  onPointerDown={startDrawing}
  onPointerMove={draw}
  onPointerUp={stopDrawing}
  onPointerLeave={stopDrawing}
  onPointerCancel={stopDrawing}
  style={{
    transform: `scale(${zoom / 100})`,
    transformOrigin: "top left",
    touchAction: "none"
  }}
/>

          <div className="zoom-controls">

            <button onClick={zoomOut} title="Zoom out">−</button>

            <span className="zoom-number">{zoom}%</span>

            <button onClick={zoomIn} title="Zoom in">+</button>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="whiteboard-footer">

        <div className="footer-left">
          <div className="footer-logo">TQ</div>
          <strong>TRUEQUE</strong>
          <span className="footer-line"></span>
          <span>Virtual Classroom © 2026</span>
        </div>

        <div className="footer-status">
          <span className="footer-online-dot"></span>
          Learn • Teach • Share
        </div>

      </footer>

    </div>
  );
}

export default Whiteboard;