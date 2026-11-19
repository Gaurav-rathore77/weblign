import { ImageResponse } from 'next/og';

export const alt = 'Weblign — Engineering Digital Experiences';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background:
            'radial-gradient(circle at 15% 20%, rgba(37,99,235,0.28), transparent 28%), radial-gradient(circle at 85% 25%, rgba(59,130,246,0.22), transparent 24%), linear-gradient(135deg, #05070F 0%, #0B1020 45%, #060913 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(37,99,235,0.35), rgba(37,99,235,0))',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            left: -60,
            width: 380,
            height: 380,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(59,130,246,0.22), rgba(59,130,246,0))',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
              boxShadow: '0 12px 30px rgba(37,99,235,0.35)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', width: 28, height: 28, gap: 4 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: '#fff' }} />
              <div style={{ width: 12, height: 12, borderRadius: 3, background: 'rgba(255,255,255,0.35)' }} />
              <div style={{ width: 12, height: 12, borderRadius: 3, background: 'rgba(255,255,255,0.35)' }} />
              <div style={{ width: 12, height: 12, borderRadius: 3, background: 'rgba(255,255,255,0.6)' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#F8FAFC', fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em' }}>Weblign</div>
            <div style={{ color: 'rgba(226,232,240,0.72)', fontSize: 18, fontWeight: 500 }}>Digital Engineering Company</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', maxWidth: 920 }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              border: '1px solid rgba(255,255,255,0.14)',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 9999,
              padding: '10px 18px',
              color: '#93C5FD',
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Premium digital products & systems
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 68,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              fontWeight: 700,
              color: '#F8FAFC',
            }}
          >
            Engineering Digital Experiences. Building What’s Next.
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 28,
              lineHeight: 1.4,
              color: 'rgba(226,232,240,0.82)',
              maxWidth: 860,
            }}
          >
            Websites, custom software, mobile applications, and intelligent business systems for ambitious businesses.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', gap: 12 }}>
            {['Web Development', 'Custom Software', 'Mobile Apps', 'CRM & Automation'].map((label) => (
              <div
                key={label}
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 9999,
                  padding: '10px 16px',
                  color: 'rgba(241,245,249,0.88)',
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div
            style={{
              height: 4,
              width: 220,
              borderRadius: 9999,
              background: 'linear-gradient(90deg, #2563EB 0%, #3B82F6 100%)',
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
