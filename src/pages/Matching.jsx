const popularSkills = [
  { name: 'Photoshop', tag: 'Design', level: 'Beginner', learners: 12 },
  { name: 'Python Programming', tag: 'Development', level: 'Intermediate', learners: 18 },
  { name: 'Content Writing', tag: 'Writing', level: 'Beginner', learners: 9 },
  { name: 'Public Speaking', tag: 'Communication', level: 'All Levels', learners: 7 },
];

const matches = [
  {
    initials: 'PM',
    name: 'Priya M.',
    loc: 'Chennai, India',
    wants: 'UI/UX Design',
    offers: 'Content Writing',
  },
  {
    initials: 'KS',
    name: 'Karthik S.',
    loc: 'Bangalore, India',
    wants: 'Web Development',
    offers: 'Python Programming',
  },
  {
    initials: 'AR',
    name: 'Ananya R.',
    loc: 'Chennai, India',
    wants: 'Basic Spanish',
    offers: 'Graphic Design',
  },
];

export default function Matching() {
  return (
    <div
      className="container"
      style={{
        padding: '40px 24px',
      }}
    >

      {/* ================= SEARCH SKILLS ================= */}

      <div style={{ marginBottom: '38px' }}>
        <h1
          style={{
            marginBottom: '8px',
            color: '#ffffff',
          }}
        >
          Search Skills
        </h1>

        <p
          style={{
            color: 'var(--tan-soft)',
            marginBottom: '24px',
            fontSize: '0.95rem',
          }}
        >
          Find people to swap skills with
        </p>

        {/* Search box */}

        <div
          style={{
            display: 'flex',
            gap: '12px',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            placeholder="Search for skills, e.g. 'Photoshop', 'Python'..."
            style={{
              flex: 1,
              minWidth: 0,
              height: '48px',
              padding: '0 16px',
              borderRadius: '10px',

              border: '1px solid rgba(255,255,255,0.35)',

              background: 'rgba(13, 27, 42, 0.65)',

              color: '#ffffff',

              fontSize: '0.9rem',

              outline: 'none',

              boxSizing: 'border-box',
            }}
          />

          <button
            className="btn btn-primary"
            style={{
              height: '48px',
              padding: '0 24px',
              flexShrink: 0,
            }}
          >
            Search
          </button>
        </div>
      </div>


      {/* ================= POPULAR SKILLS ================= */}

      <section style={{ marginBottom: '40px' }}>

        <h3
          style={{
            marginBottom: '16px',
            color: '#ffffff',
            fontFamily: 'var(--font-heading)',
          }}
        >
          Popular Skills
        </h3>

        <div className="grid-4">

          {popularSkills.map((s) => (

            <div
              key={s.name}
              className="card"
              style={{
                minHeight: '130px',
                padding: '20px',

                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))',

                border:
                  '1px solid rgba(255,255,255,0.20)',

                borderRadius: '12px',

                boxSizing: 'border-box',
              }}
            >

              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  marginBottom: '7px',
                  color: 'var(--gold)',
                }}
              >
                {s.name}
              </h4>

              <span
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: '#ffffff',
                  marginBottom: '7px',
                }}
              >
                {s.tag}
              </span>

              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.72rem',
                  fontWeight: 700,

                  color: 'var(--oxford-blue)',

                  background: '#ffffff',

                  padding: '4px 11px',

                  borderRadius: '20px',

                  marginBottom: '8px',
                }}
              >
                {s.level}
              </span>

              <p
                style={{
                  fontSize: '0.78rem',
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {s.learners} learners
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= SUGGESTED MATCHES ================= */}

      <section>

        <h3
          style={{
            marginBottom: '16px',
            color: '#ffffff',
            fontFamily: 'var(--font-heading)',
          }}
        >
          Suggested Matches
        </h3>


        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(3, minmax(0, 1fr))',
            gap: '16px',
          }}
        >

          {matches.map((m) => (

            <div
              key={m.name}
              style={{
                minHeight: '215px',

                padding: '20px',

                borderRadius: '12px',

                background:
                  'linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))',

                border:
                  '1px solid rgba(255,255,255,0.30)',

                boxShadow:
                  '0 8px 20px rgba(0,0,0,0.12)',

                color: '#ffffff',

                boxSizing: 'border-box',
              }}
            >

              {/* Profile */}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '18px',
                }}
              >

                {/* PM / KS / AR */}

                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    minWidth: '44px',

                    borderRadius: '50%',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    background: 'var(--oxford-blue)',

                    border:
                      '1px solid rgba(255,255,255,0.6)',

                    color: 'var(--gold)',

                    fontWeight: 700,
                    fontSize: '0.78rem',
                  }}
                >
                  {m.initials}
                </div>


                {/* Name + Location */}

                <div>

                  <p
                    style={{
                      margin: '0 0 4px',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                    }}
                  >
                    {m.name}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      color: '#ffffff',
                      fontSize: '0.75rem',
                    }}
                  >
                    📍 {m.loc}
                  </p>

                </div>

              </div>


              {/* Wants */}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '7px',
                  marginBottom: '12px',
                }}
              >

                <span
                  style={{
                    color: '#ffffff',
                    fontSize: '0.78rem',
                  }}
                >
                  Wants to learn
                </span>

                <span
                  style={{
                    padding: '5px 10px',

                    borderRadius: '20px',

                    border:
                      '1px solid rgba(255,255,255,0.65)',

                    background:
                      'rgba(13,27,42,0.18)',

                    color: '#ffffff',

                    fontSize: '0.72rem',
                  }}
                >
                  {m.wants}
                </span>

              </div>


              {/* Offers */}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '7px',
                  marginBottom: '17px',
                }}
              >

                <span
                  style={{
                    color: '#ffffff',
                    fontSize: '0.78rem',
                  }}
                >
                  In exchange for
                </span>

                <span
                  style={{
                    padding: '5px 10px',

                    borderRadius: '20px',

                    border:
                      '1px solid rgba(255,255,255,0.65)',

                    background:
                      'rgba(13,27,42,0.18)',

                    color: '#ffffff',

                    fontSize: '0.72rem',
                  }}
                >
                  {m.offers}
                </span>

              </div>


              {/* Buttons */}

              <div
                style={{
                  display: 'flex',
                  gap: '9px',
                }}
              >

                <button
                  style={{
                    padding: '8px 17px',

                    borderRadius: '8px',

                    border: '1px solid #ffffff',

                    background: '#ffffff',

                    color: 'var(--oxford-blue)',

                    fontWeight: 700,

                    fontSize: '0.75rem',

                    cursor: 'pointer',
                  }}
                >
                  Accept
                </button>


                <button
                  style={{
                    padding: '8px 17px',

                    borderRadius: '8px',

                    border:
                      '1px solid rgba(255,255,255,0.8)',

                    background: 'transparent',

                    color: '#ffffff',

                    fontWeight: 700,

                    fontSize: '0.75rem',

                    cursor: 'pointer',
                  }}
                >
                  Decline
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Mobile layout */}

      <style>
        {`
          @media (max-width: 900px) {
            .grid-4 {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            .container > section:last-child > div {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 600px) {
            .grid-4 {
              grid-template-columns: 1fr !important;
            }
          }

          input::placeholder {
            color: rgba(255,255,255,0.72);
          }
        `}
      </style>

    </div>
  );
}