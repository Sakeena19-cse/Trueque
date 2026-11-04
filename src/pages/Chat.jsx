import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Chat() {
  const [partner, setPartner] = useState("Skill Partner");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("truequeChatMessages")
      ) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "truequeChatMessages",
      JSON.stringify(messages)
    );
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        text: message.trim(),
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    ]);

    setMessage("");
  };

  return (
    <div className="trueque-chat-page">

      <section className="chat-hero">
        <p className="section-label">TRUEQUE COMMUNITY</p>
        <h1>Chat & Connect.</h1>
        <p>Share ideas, communicate and learn together.</p>
      </section>

      <section className="chat-container">

        <div className="chat-header">
          <div className="chat-avatar">
            {partner.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2>{partner}</h2>
            <p>Skill Exchange Partner</p>
          </div>
        </div>

        <div className="chat-messages">

          {messages.length > 0 ? (
            messages.map((item) => (
              <div
                key={item.id}
                className={`chat-message ${item.sender === "me" ? "my-message" : "partner-message"}`}
              >
                <p>{item.text}</p>
                <span>{item.time}</span>
              </div>
            ))
          ) : (
            <div className="chat-empty">
              <h3>Start a Conversation!</h3>
              <p>Send your first message to your skill partner.</p>
            </div>
          )}

        </div>

        <form className="chat-input-area" onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />

          <button type="submit">
            Send →
          </button>
        </form>

      </section>

      <div className="chat-back-link">
        <Link to="/matching">← Back to Matching</Link>
      </div>

    </div>
  );
}

export default Chat;