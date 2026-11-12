import { useEffect, useRef, useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("trueque_chat_messages");

    return savedMessages
      ? JSON.parse(savedMessages)
      : [
          {
            id: 1,
            text: "Hi! Welcome to TRUEQUE. How can I help you?",
            sender: "other",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ];
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(
      "trueque_chat_messages",
      JSON.stringify(messages)
    );

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message.trim(),
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      newMessage,
    ]);

    setMessage("");
  };

  const clearChat = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all messages?"
    );

    if (confirmClear) {
      setMessages([]);
      localStorage.removeItem("trueque_chat_messages");
    }
  };

  return (
    <div className="trueque-chat-page">

      {/* Chat Hero Section */}
      <section className="chat-hero">
        <h1>TRUEQUE Chat</h1>

        <p>
          Connect, communicate and learn together.
        </p>
      </section>

      {/* Chat Container */}
      <div className="chat-container">

        {/* Chat Header */}
        <div className="chat-header">

          <div className="chat-avatar">
            A
          </div>

          <div>
            <h2>Arun Kumar</h2>
            <p>TRUEQUE Learning Partner</p>
          </div>

          <button
            type="button"
            className="chat-clear-button"
            onClick={clearChat}
          >
            Clear Chat
          </button>

        </div>

        {/* Messages */}
        <div className="chat-messages">

          {messages.length === 0 ? (
            <div className="chat-empty">
              <h3>No messages yet</h3>
              <p>Start a conversation with your learning partner.</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message ${
                  msg.sender === "me"
                    ? "my-message"
                    : "other-message"
                }`}
              >
                <p>{msg.text}</p>

                <span>{msg.time}</span>
              </div>
            ))
          )}

          <div ref={messagesEndRef} />

        </div>

        {/* Message Input */}
        <form
          className="chat-input-area"
          onSubmit={sendMessage}
        >

          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            disabled={!message.trim()}
          >
            Send
          </button>

        </form>

      </div>

    </div>
  );
}

export default Chat;