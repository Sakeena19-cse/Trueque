import { Link } from 'react-router-dom';

const activity = [
  {
    icon: 'JS',
    iconBg: 'var(--dark-blue)',
    iconColor: 'var(--gold)',
    title: 'JavaScript Learning',
    desc: 'Continue your progress and improve your skills.',
    status: 'In Progress',
    statusColor: 'var(--oxford-blue)',
    statusIcon: '🕐',
  },
  {
    icon: '⇄',
    iconBg: '#123B2E',
    iconColor: '#3FBE7A',
    title: 'Skill Exchange',
    desc: 'You recently connected with a new learner.',
    status: 'Completed',
    statusColor: 'var(--oxford-blue)',
    statusIcon: '✓',
  },
  {
    icon: 'KS',
    iconBg: 'var(--dark-blue)',
    iconColor: 'var(--gold)',
    title: 'UI/UX Design Basics',
    desc: 'Session with Karthik S. is coming up soon.',
    status: 'Upcoming',
    statusColor: 'var(--oxford-blue)',
    statusIcon: '📅',
  },
];

export default function Dashboard() {
  return (
    <div
      className="container"
      style={{
        padding: '40px 24px 60px',
        color: 'var(--oxford-blue)',
      }}
    >

      <p
        style={{
          color: 'var(--oxford-blue)',
          marginBottom: '30px',
        }}
      >
        Your completed learning sessions.
      </p>

      <p
        style={{
          color: 'var(--gold)',
          fontWeight: 700,
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        Quick Actions
      </p>

      <h1
        style={{
          fontSize: '2.4rem',
          color: 'var(--oxford-blue)',
          marginBottom: '24px',
        }}
      >
        Continue Your Journey
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '50px',
        }}
      >
        <Link
          to="/matching"
          className="btn btn-outline"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--oxford-blue)',
          }}
        >
          🔍 Find a Skill
        </Link>

        <Link
          to="/matching"
          className="btn btn-outline"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--oxford-blue)',
          }}
        >
          👥 Find a Match
        </Link>

        <Link
          to="/profile"
          className="btn btn-outline"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--oxford-blue)',
          }}
        >
          👤 View Profile
        </Link>
      </div>

      <p
        style={{
          color: 'var(--gold)',
          fontWeight: 700,
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        Recent Activity
      </p>

      <h1
        style={{
          fontSize: '2.4rem',
          color: 'var(--oxford-blue)',
          marginBottom: '30px',
        }}
      >
        Your Recent Activity
      </h1>

      <div>
        {activity.map((item, i) => (
          <div
            key={item.title}
            style={{
              display: 'flex',
              gap: '20px',
              padding: '20px 0',
              borderBottom:
                i < activity.length - 1
                  ? '1px solid rgba(13, 27, 42, 0.15)'
                  : 'none',
            }}
          >

            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                background: item.iconBg,
                color: item.iconColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1rem',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>

            <div>
              <h3
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--oxford-blue)',
                  marginBottom: '4px',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: 'var(--oxford-blue)',
                  fontSize: '0.92rem',
                  marginBottom: '8px',
                }}
              >
                {item.desc}
              </p>

              <span
                style={{
                  color: item.statusColor,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                {item.statusIcon} {item.status}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}