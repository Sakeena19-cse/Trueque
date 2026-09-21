import { useState } from 'react';

export default function Session() {
  const [messages, setMessages] = useState([
    { from: 'them', who: 'Karthik', text: 'Hi Priya! Looking forward to our session.' },
    { from: 'me', who: 'You', text: 'Hi Karthik! Same here. See you soon 🙂' },
  ]);
  const [draft, setDraft] = useState('');

  function sendMessage(e) {
    e.preventDefault();
    if (!draft.trim()) return;
    setMessages([...messages, { from: 'me', who: 'You', text: draft }]);
    setDraft('');
  }

  return (
    <div className="container" style={{ padding: '40px 24px' }}>
      <p style={{ color: 'var(--tan-soft)', fontSize: '0.85rem', marginBottom: '20px' }}>
        Dashboard / Sessions / Session Details
      </p>

      <div className="grid-2">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.3rem' }}>UI/UX Design Basics</h2>
            <span style={{
              background: 'var(--gold)', color: 'var(--oxford-blue)',
              fontSize: '0.78rem', fontWeight: 700, padding: '3px 12px', borderRadius: '20px',
            }}>
              Upcoming
            </span>
          </div>
          <p style={{ color: 'var(--tan-soft)', fontSize: '0.9rem', marginBottom: '14px' }}>with Karthik S.</p>
          <p style={{ fontSize: '0.88rem', marginBottom: '20px' }}>📅 June 5, 2026 · 4:00 PM</p>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button className="btn btn-primary">Join Session</button>
            <button className="btn btn-outline">Reschedule</button>
          </div>

          <p style={{ fontWeight: 700, color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '6px' }}>
            About the Session
          </p>
          <p style={{ color: 'var(--tan-soft)', fontSize: '0.9rem' }}>
            Learn the fundamentals of UI/UX design, including wireframing, user research, and prototyping.
          </p>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '440px' }}>
          <h3 style={{ marginBottom: '14px' }}>Chat</h3>
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '14px' }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  background: m.from === 'me' ? 'var(--oxford-blue)' : 'var(--dark-blue)',
                  color: 'var(--tan)',
                  border: m.from === 'me' ? '1px solid var(--gold)' : 'none',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.78rem', marginBottom: '2px', color: 'var(--gold)' }}>
                  {m.who}
                </div>
                {m.text}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1, padding: '10px 14px', borderRadius: '10px',
                border: '1.5px solid rgba(210,180,140,0.3)', background: 'var(--dark-blue)', color: 'var(--tan)',
              }}
            />
            <button type="submit" className="btn btn-primary btn-sm">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}