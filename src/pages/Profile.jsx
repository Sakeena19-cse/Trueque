import React from 'react';

export default function Profile() {
  return (
    <div
      className="container"
      style={{
        padding: '40px 24px',
      }}
    >

      {/* ================= PAGE TITLE ================= */}

      <div style={{ marginBottom: '30px' }}>
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

          border: '1px solid rgba(255,255,255,0.30)',

          borderRadius: '14px',

          padding: '28px',

          boxShadow: '0 8px 20px rgba(0,0,0,0.12)',

          marginBottom: '30px',

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

              border: '2px solid rgba(255,255,255,0.7)',

              color: 'var(--gold)',

              fontFamily: 'var(--font-heading)',

              fontSize: '1.2rem',

              fontWeight: 700,
            }}
          >
            ST
          </div>


          {/* STUDENT NAME */}

          <div>
            <h2
              style={{
                margin: '0 0 6px',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Student Name
            </h2>

            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '0.85rem',
              }}
            >
              📍 Your Location
            </p>
          </div>

        </div>


        {/* ================= PROFILE DETAILS ================= */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(2, minmax(0, 1fr))',
            gap: '18px',
          }}
        >

          {/* EMAIL */}

          <div>
            <label
              style={{
                display: 'block',
                color: 'var(--gold)',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '7px',
              }}
            >
              EMAIL
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border:
                  '1px solid rgba(255,255,255,0.35)',
                background:
                  'rgba(13,27,42,0.25)',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                fontSize: '0.88rem',
              }}
            />
          </div>


          {/* PHONE */}

          <div>
            <label
              style={{
                display: 'block',
                color: 'var(--gold)',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '7px',
              }}
            >
              PHONE
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border:
                  '1px solid rgba(255,255,255,0.35)',
                background:
                  'rgba(13,27,42,0.25)',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                fontSize: '0.88rem',
              }}
            />
          </div>


          {/* QUALIFICATION */}

          <div>
            <label
              style={{
                display: 'block',
                color: 'var(--gold)',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '7px',
              }}
            >
              QUALIFICATION
            </label>

            <input
              type="text"
              placeholder="Enter your qualification"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border:
                  '1px solid rgba(255,255,255,0.35)',
                background:
                  'rgba(13,27,42,0.25)',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                fontSize: '0.88rem',
              }}
            />
          </div>


          {/* LOCATION */}

          <div>
            <label
              style={{
                display: 'block',
                color: 'var(--gold)',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '7px',
              }}
            >
              LOCATION
            </label>

            <input
              type="text"
              placeholder="Enter your location"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border:
                  '1px solid rgba(255,255,255,0.35)',
                background:
                  'rgba(13,27,42,0.25)',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                fontSize: '0.88rem',
              }}
            />
          </div>

        </div>


        {/* EDIT / SAVE BUTTON */}

        <button
          className="btn btn-primary"
          style={{
            marginTop: '24px',
          }}
        >
          Save Profile
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
            gap: '18px',
          }}
        >

          {/* SKILL 1 */}

          <div
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
                margin: '0 0 12px',
                color: 'var(--gold)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
              }}
            >
              Skill 1
            </h4>

            <input
              type="text"
              placeholder="Enter skill"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border:
                  '1px solid rgba(255,255,255,0.35)',
                background:
                  'rgba(13,27,42,0.25)',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                marginBottom: '12px',
              }}
            />

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
              Select Level
            </span>

          </div>


          {/* SKILL 2 */}

          <div
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
                margin: '0 0 12px',
                color: 'var(--gold)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
              }}
            >
              Skill 2
            </h4>

            <input
              type="text"
              placeholder="Enter skill"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border:
                  '1px solid rgba(255,255,255,0.35)',
                background:
                  'rgba(13,27,42,0.25)',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                marginBottom: '12px',
              }}
            />

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
              Select Level
            </span>

          </div>


          {/* SKILL 3 */}

          <div
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
                margin: '0 0 12px',
                color: 'var(--gold)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
              }}
            >
              Skill 3
            </h4>

            <input
              type="text"
              placeholder="Enter skill"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border:
                  '1px solid rgba(255,255,255,0.35)',
                background:
                  'rgba(13,27,42,0.25)',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                marginBottom: '12px',
              }}
            />

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
              Select Level
            </span>

          </div>

        </div>

      </div>


      {/* ================= RESPONSIVE ================= */}

      <style>
        {`
          @media (max-width: 800px) {

            .container > div:nth-child(2) > div:nth-child(2) {
              grid-template-columns: 1fr !important;
            }

            .container > div:nth-child(3) > div {
              grid-template-columns: 1fr !important;
            }

          }

          @media (max-width: 600px) {

            .container {
              padding: 30px 16px !important;
            }

          }

          input::placeholder {
            color: rgba(255,255,255,0.75);
          }

          input:focus {
            border-color: var(--gold) !important;
            box-shadow: 0 0 0 2px rgba(201,162,39,0.15);
          }
        `}
      </style>

    </div>
  );
}