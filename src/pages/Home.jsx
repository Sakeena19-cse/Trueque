import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
      <p style={{
        color: 'var(--tan-soft)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        marginBottom: '16px',
      }}>
        Exchange Skills. Grow Together.
      </p>

      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Learn. Teach.<br />
        <span style={{ color: 'var(--gold)' }}>Grow Together.</span>
      </h1>

      <p style={{
        color: 'var(--tan-soft)',
        maxWidth: '46ch',
        margin: '0 auto 34px',
        fontSize: '1.05rem',
      }}>
        Trueque is a platform to learn, teach, and grow by swapping skills
        with others. No money. Just connections.
      </p>

      <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/register" className="btn btn-primary">Get Started</Link>
        <Link to="/matching" className="btn btn-outline">Explore Skills</Link>
      </div>

      <div className="grid-4" style={{ marginTop: '70px', textAlign: 'left' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>🎓 Learn Anything</h3>
          <p style={{ color: 'var(--tan-soft)', fontSize: '0.9rem' }}>Explore skills you want to learn from real people.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>📣 Teach & Earn</h3>
          <p style={{ color: 'var(--tan-soft)', fontSize: '0.9rem' }}>Share your skills and help others grow.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>🤝 Build Connections</h3>
          <p style={{ color: 'var(--tan-soft)', fontSize: '0.9rem' }}>Make meaningful connections worldwide.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>🌍 Grow Together</h3>
          <p style={{ color: 'var(--tan-soft)', fontSize: '0.9rem' }}>A community built on trust and knowledge.</p>
        </div>
      </div>
    </section>
  );
}