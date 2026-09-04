import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ background: 'var(--gold)', padding: '18px 0' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            color: 'var(--oxford-blue)',
            fontWeight: 700,
          }}
        >
          Trueque
        </Link>

        <nav style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--oxford-blue)', fontWeight: 500 }}>
            Home
          </Link>
          <Link to="/matching" style={{ color: 'var(--oxford-blue)', fontWeight: 500 }}>
            Search Skills
          </Link>
          <Link to="/dashboard" style={{ color: 'var(--oxford-blue)', fontWeight: 500 }}>
            Dashboard
          </Link>
          <Link to="/profile" style={{ color: 'var(--oxford-blue)', fontWeight: 500 }}>
            Profile
          </Link>
        </nav>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Link
            to="/login"
            className="btn"
            style={{
              background: 'transparent',
              color: 'var(--oxford-blue)',
              border: '1.5px solid var(--oxford-blue)',
            }}
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="btn"
            style={{
              background: 'var(--oxford-blue)',
              color: 'var(--tan)',
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}