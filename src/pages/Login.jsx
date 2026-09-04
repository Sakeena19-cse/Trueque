import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
      <form onSubmit={handleSubmit} className="card" style={{ width: '100%', maxWidth: '420px' }}>
        <h1 style={{ fontSize: '1.7rem', marginBottom: '6px' }}>Welcome Back!</h1>
        <p style={{ color: 'var(--tan-soft)', fontSize: '0.92rem', marginBottom: '28px' }}>
          Log in to continue your learning journey
        </p>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          <div style={{ textAlign: 'right', marginTop: '8px' }}>
            <Link to="/login" style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600 }}>
              Forgot password?
            </Link>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Log In</button>

        <p style={{ textAlign: 'center', marginTop: '22px', fontSize: '0.9rem', color: 'var(--tan-soft)' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: 'var(--gold)', fontWeight: 600 }}>Sign up</Link>
        </p>
      </form>
    </div>
  );
}