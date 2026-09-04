import { useState } from 'react';

const quizData = [
  { q: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "Hyper Text Markup Language", "Hyperlinks Text Mark Language"] },
  { q: "Which CSS property is used to create space between an element's border and its content?", options: ["margin", "padding", "border-spacing", "gap"] },
  { q: "In Python, which keyword defines a function?", options: ["func", "def", "function", "define"] },
  { q: "Which HTTP method is typically used to update an existing resource?", options: ["GET", "POST", "PUT", "DELETE"] },
  { q: "What does 'DOM' stand for in web development?", options: ["Document Object Model", "Data Object Mapping", "Display Output Manager", "Document Order Model"] },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const item = quizData[current];
  const progress = ((current + 1) / quizData.length) * 100;

  function next() {
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      alert('Quiz complete! Great job.');
    }
  }

  function prev() {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    }
  }

  return (
    <div className="container" style={{ padding: '40px 24px' }}>
      <p style={{ color: 'var(--tan-soft)', fontSize: '0.85rem', marginBottom: '4px' }}>
        Sessions / UI/UX Design Basics / Quiz
      </p>
      <h1 style={{ marginBottom: '24px' }}>Session Completion Quiz</h1>

      <div className="card" style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ height: '8px', background: 'rgba(210,180,140,0.15)', borderRadius: '6px', overflow: 'hidden', marginBottom: '24px' }}>
          <div style={{ height: '100%', background: 'var(--gold)', width: `${progress}%`, transition: 'width 0.3s' }} />
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--tan-soft)', fontWeight: 600, marginBottom: '8px' }}>
          Question {current + 1} of {quizData.length}
        </p>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '24px' }}>{item.q}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
          {item.options.map((opt, i) => (
            <label
              key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                border: `1.5px solid ${selected === i ? 'var(--gold)' : 'rgba(210,180,140,0.3)'}`,
                background: selected === i ? 'var(--dark-blue)' : 'transparent',
                borderRadius: '10px', padding: '14px 16px', cursor: 'pointer', fontSize: '0.95rem',
              }}
            >
              <input
                type="radio"
                name="quiz-option"
                checked={selected === i}
                onChange={() => setSelected(i)}
                style={{ accentColor: 'var(--gold)' }}
              />
              {opt}
            </label>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn btn-outline" onClick={prev} disabled={current === 0}>← Previous</button>
          <button className="btn btn-primary" onClick={next}>
            {current === quizData.length - 1 ? 'Finish' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}