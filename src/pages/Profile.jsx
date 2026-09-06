const profile = {
  firstName: 'Priya',
  lastName: 'Dharshini',
  email: 'priya@example.com',
  phone: '+91 98765 43210',
  qualification: 'B.E. Computer Science',
  location: 'Chennai, India',
};

const skills = [
  {
    name: 'Content Writing',
    type: 'Can Teach',
    level: 'Intermediate',
  },
  {
    name: 'UI/UX Design',
    type: 'Want to Learn',
    level: 'Beginner',
  },
  {
    name: 'Web Development',
    type: 'Want to Learn',
    level: 'Beginner',
  },
];

export default function Profile() {
  return (
    <div
      className="container"
      style={{
        padding: '40px 24px',
      }}
    >

      {/* ================= PROFILE HERO ================= */}

      <div
        style={{
          marginBottom: '30px',
        }}
      >
        <h1
          style={{
            marginBottom: '8px',
            color: '#ffffff',
          }}
        >
          My Profile
        </h1>

        <p
          style={{
            color: '#ffffff',
            fontSize: '0.95rem',
            fontWeight: 500,
            margin: 0,
          }}
        >
          Manage your profile and skills
        </p>
      </div>


      {/* ================= PROFILE CARD ================= */}

      <div
        style={{
          background:
            'linear-gradient(135deg, rgba(45,112,184,0.78), rgba(24,73,132,0.78))',

          border:
            '1px solid rgba(255,255,255,0.30)',

          borderRadius: '14px',

          padding: '28px',

          boxShadow:
            '0 8px 20px rgba(0,0,0,0.12)',

          marginBottom: '24px',

          color: '#ffffff',
        }}
      >

        {/* PROFILE TOP */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '28px',
          }}
        >

          {/* AVATAR */}

          <div
            style={{
              width: '76px',
              height: '76px',
              minWidth: '76px',

              borderRadius: '50%',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              background: 'var(--oxford-blue)',

              border:
                '2px solid rgba(255,255,255,0.7)',

              color: 'var(--gold)',

              fontFamily: 'var(--font-heading)',

              fontSize: '1.3rem',

              fontWeight: 700,
            }}
          >
            {profile.firstName[0]}
            {profile.lastName[0]}
          </div>


          {/* NAME */}

          <div>

            <h2
              style={{
                margin: '0 0 6px',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {profile.firstName} {profile.lastName}
            </h2>

            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '0.85rem',
              }}
            >
              📍 {profile.location}
            </p>

          </div>

        </div>


        {/* PROFILE DETAILS */}

        <div
          style={{
            display: 'grid',

            gridTemplateColumns:
              'repeat(2, minmax(0, 1fr))',

            gap: '16px',
          }}
        >

          {/* EMAIL */}

          <div
            style={{
              padding: '16px',

              borderRadius: '10px',

              background:
                'rgba(13,27,42,0.28)',

              border:
                '1px solid rgba(255,255,255,0.18)',
            }}
          >

            <p
              style={{
                margin: '0 0 5px',
                color: 'var(--gold)',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              EMAIL
            </p>

            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '0.88rem',
              }}
            >
              {profile.email}
            </p>

          </div>


          {/* PHONE */}

          <div
            style={{
              padding: '16px',

              borderRadius: '10px',

              background:
                'rgba(13,27,42,0.28)',

              border:
                '1px solid rgba(255,255,255,0.18)',
            }}
          >

            <p
              style={{
                margin: '0 0 5px',
                color: 'var(--gold)',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              PHONE
            </p>

            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '0.88rem',
              }}
            >
              {profile.phone}
            </p>

          </div>


          {/* QUALIFICATION */}

          <div
            style={{
              padding: '16px',

              borderRadius: '10px',

              background:
                'rgba(13,27,42,0.28)',

              border:
                '1px solid rgba(255,255,255,0.18)',
            }}
          >

            <p
              style={{
                margin: '0 0 5px',
                color: 'var(--gold)',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              QUALIFICATION
            </p>

            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '0.88rem',
              }}
            >
              {profile.qualification}
            </p>

          </div>


          {/* LOCATION */}

          <div
            style={{
              padding: '16px',

              borderRadius: '10px',

              background:
                'rgba(13,27,42,0.28)',

              border:
                '1px solid rgba(255,255,255,0.18)',
            }}
          >

            <p
              style={{
                margin: '0 0 5px',
                color: 'var(--gold)',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              LOCATION
            </p>

            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '0.88rem',
              }}
            >
              {profile.location}
            </p>

          </div>

        </div>


        {/* EDIT BUTTON */}

        <button
          className="btn btn-primary"
          style={{
            marginTop: '22px',
          }}
        >
          Edit Profile
        </button>

      </div>


      {/* ================= MY SKILLS ================= */}

      <div>

        <h3
          style={{
            marginBottom: '16px',
            color: '#ffffff',
            fontFamily: 'var(--font-heading)',
          }}
        >
          My Skills
        </h3>


        <div
          style={{
            display: 'grid',

            gridTemplateColumns:
              'repeat(3, minmax(0, 1fr))',

            gap: '16px',
          }}
        >

          {skills.map((skill) => (

            <div
              key={skill.name}
              style={{
                minHeight: '150px',

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

              <h4
                style={{
                  margin: '0 0 8px',

                  color: 'var(--gold)',

                  fontFamily: 'var(--font-heading)',

                  fontSize: '1rem',
                }}
              >
                {skill.name}
              </h4>


              <p
                style={{
                  margin: '0 0 12px',

                  color: '#ffffff',

                  fontSize: '0.82rem',
                }}
              >
                {skill.type}
              </p>


              <span
                style={{
                  display: 'inline-block',

                  padding: '5px 12px',

                  borderRadius: '20px',

                  background: '#ffffff',

                  color: 'var(--oxford-blue)',

                  fontSize: '0.72rem',

                  fontWeight: 700,
                }}
              >
                {skill.level}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* ================= RESPONSIVE ================= */}

      <style>
        {`
          @media (max-width: 800px) {

            .container > div:nth-child(2) > div {
              grid-template-columns: 1fr !important;
            }

            .container > div:last-of-type > div {
              grid-template-columns: 1fr !important;
            }

          }

          @media (max-width: 600px) {

            .container {
              padding: 30px 16px !important;
            }

          }
        `}
      </style>

    </div>
  );
}