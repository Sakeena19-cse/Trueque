export default function Profile() {
  return (
    <div className="container" style={{ padding: '40px 24px' }}>
      <p style={{ color: 'var(--tan-soft)', fontSize: '0.85rem', marginBottom: '4px' }}>Home / My Profile</p>
      <h1 style={{ marginBottom: '24px' }}>My Profile</h1>

      <div className="card" style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{
          width: '78px', height: '78px', borderRadius: '50%',
          background: 'var(--dark-blue)', color: 'var(--gold)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-heading)', fontSize: '1.6rem', flexShrink: 0,
        }}>
          PR
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.4rem' }}>
            Priya R.{' '}
            <span style={{
              background: 'var(--gold)', color: 'var(--oxford-blue)',
              fontSize: '0.75rem', fontWeight: 700, padding: '2px 10px', borderRadius: '20px',
            }}>
              Beginner
            </span>
          </h2>
          <p style={{ color: 'var(--tan-soft)', fontSize: '0.88rem', margin: '6px 0' }}>📍 Chennai, India</p>
          <p style={{ color: 'var(--tan-soft)', fontSize: '0.88rem', marginBottom: '10px' }}>✉️ priya@example.com</p>
          <p style={{ fontSize: '0.92rem', maxWidth: '60ch' }}>
            Final-year engineering student, passionate about full stack web development
            and eager to learn new skills while sharing what I know.
          </p>
          <div style={{ display: 'flex', gap: '34px', marginTop: '16px' }}>
            <div>
              <strong style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--gold)' }}>10</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--tan-soft)' }}>Skills Learning</span>
            </div>
            <div>
              <strong style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--gold)' }}>4</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--tan-soft)' }}>Skills Teaching</span>
            </div>
            <div>
              <strong style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--gold)' }}>6</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--tan-soft)' }}>Sessions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '14px' }}>Skills I Teach</h3>
          <span className="chip">HTML/CSS</span>
          <span className="chip">Python</span>
          <span className="chip">Frontend Basics</span>
        </div>
        <div className="card">
          <h3 style={{ marginBottom: '14px' }}>Skills I Want to Learn</h3>
          <span className="chip">React</span>
          <span className="chip">Django REST Framework</span>
          <span className="chip">UI/UX Design</span>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3 style={{ marginBottom: '14px' }}>Interests</h3>
        <span className="chip">Web Development</span>
        <span className="chip">Design</span>
        <span className="chip">AI Tools</span>
      </div>
    </div>
  );
}