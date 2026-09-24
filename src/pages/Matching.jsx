const popularSkills = [
  { name: 'Photoshop', tag: 'Design', level: 'Beginner', learners: 12 },
  { name: 'Python Programming', tag: 'Development', level: 'Intermediate', learners: 18 },
  { name: 'Content Writing', tag: 'Writing', level: 'Beginner', learners: 9 },
  { name: 'Public Speaking', tag: 'Communication', level: 'All Levels', learners: 7 },
];

const matches = [
  { name: 'Priya M.', loc: 'Chennai, India', wants: 'UI/UX Design', offers: 'Content Writing' },
  { name: 'Karthik S.', loc: 'Bangalore, India', wants: 'Web Development', offers: 'Python Programming' },
  { name: 'Ananya R.', loc: 'Chennai, India', wants: 'Basic Spanish', offers: 'Graphic Design' },
];

export default function Matching() {
  return (
    <div className="container" style={{ padding: '40px 24px' }}>
      <h1 style={{ marginBottom: '6px' }}>Search Skills</h1>
      <p style={{ color: 'var(--tan-soft)', marginBottom: '28px' }}>Find people to swap skills with</p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search for skills, e.g., 'Photoshop', 'Python'..."
          style={{
            flex: 1, minWidth: '200px', padding: '12px 16px', borderRadius: '10px',
            border: '1.5px solid rgba(210,180,140,0.3)', background: 'var(--surface)', color: 'var(--tan)',
          }}
        />
        <button className="btn btn-primary">Search</button>
      </div>

      <h3 style={{ marginBottom: '16px' }}>Popular Skills</h3>
      <div className="grid-4" style={{ marginBottom: '40px' }}>
        {popularSkills.map((s) => (
          <div key={s.name} className="card">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '8px', color: 'var(--gold)' }}>
              {s.name}
            </h4>
            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--tan-soft)', marginBottom: '6px' }}>
              {s.tag}
            </span>
            <span style={{
              display: 'inline-block', fontSize: '0.75rem', fontWeight: 700,
              color: 'var(--oxford-blue)', background: 'var(--tan)',
              padding: '2px 10px', borderRadius: '20px', marginBottom: '10px',
            }}>
              {s.level}
            </span>
            <p style={{ fontSize: '0.8rem', color: 'var(--tan-soft)' }}>{s.learners} learners</p>
          </div>
        ))}
      </div>

      <h3 style={{ marginBottom: '16px' }}>Suggested Matches</h3>
      <div className="grid-3">
        {matches.map((m) => (
          <div key={m.name} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div className="avatar">{m.name.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <p style={{ fontWeight: 600 }}>{m.name}</p>
                <p style={{ color: 'var(--tan-soft)', fontSize: '0.8rem' }}>📍 {m.loc}</p>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--tan-soft)', marginBottom: '6px' }}>
              Wants to learn <span className="chip" style={{ margin: 0 }}>{m.wants}</span>
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--tan-soft)', marginBottom: '14px' }}>
              In exchange for <span className="chip" style={{ margin: 0 }}>{m.offers}</span>
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary btn-sm">Accept</button>
              <button className="btn btn-outline btn-sm">Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}