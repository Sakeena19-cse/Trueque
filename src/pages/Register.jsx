import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [level, setLevel] = useState('beginner');

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
      <form onSubmit={handleSubmit} className="card" style={{ width: '100%', maxWidth: '640px' }}>
        <h1 style={{ fontSize: '1.7rem', marginBottom: '6px' }}>Create Your Account</h1>
        <p style={{ color: 'var(--tan-soft)', fontSize: '0.92rem', marginBottom: '28px' }}>
          Join Trueque and start swapping skills today
        </p>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" placeholder="Last name" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" placeholder="+91 00000 00000" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input type="text" id="qualification" placeholder="e.g., B.Tech Computer Science" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="skills">Skills You Can Teach</label>
            <input type="text" id="skills" placeholder="e.g., Python, UI/UX Design" />
          </div>
          <div className="form-group">
            <label htmlFor="interested">Skills You Want to Learn</label>
            <input type="text" id="interested" placeholder="e.g., Guitar, Spanish" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="City, Country" />
        </div>

        <div className="form-group">
          <label>Skill Level</label>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['beginner', 'intermediate', 'advanced'].map((lvl) => (
              <label
                key={lvl}
                style={{
                  border: `1.5px solid ${level === lvl ? 'var(--gold)' : 'rgba(210,180,140,0.3)'}`,
                  background: level === lvl ? 'var(--dark-blue)' : 'transparent',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                <input
                  type="radio"
                  name="level"
                  value={lvl}
                  checked={level === lvl}
                  onChange={() => setLevel(lvl)}
                  style={{ display: 'none' }}
                />
                {lvl}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Register</button>

        <p style={{ textAlign: 'center', marginTop: '22px', fontSize: '0.9rem', color: 'var(--tan-soft)' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--gold)', fontWeight: 600 }}>Log in</Link>
        </p>
      </form>
    </div>
  );
}