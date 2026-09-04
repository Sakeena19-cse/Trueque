import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--gold)', padding: '24px 0', marginTop: 'auto' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p style={{ color: 'var(--oxford-blue)', fontSize: '0.88rem' }}>
          &copy; 2026 Trueque. All rights reserved.
        </p>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: 'var(--oxford-blue)', fontSize: '0.88rem' }}>About</Link>
          <Link to="/" style={{ color: 'var(--oxford-blue)', fontSize: '0.88rem' }}>Terms</Link>
          <Link to="/" style={{ color: 'var(--oxford-blue)', fontSize: '0.88rem' }}>Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}