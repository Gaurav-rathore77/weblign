import { ImageResponse } from 'next/og';

export const alt = 'Weblign - Crafting Digital Experiences';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Decorative gradient orb */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            borderRadius: 16,
            background: 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
            color: 'white',
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          W
        </div>

        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#FAFAFA',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            lineHeight: 1.2,
            margin: 0,
            padding: '0 40px',
          }}
        >
          Crafting Digital Experiences
        </h1>

        <p
          style={{
            fontSize: 22,
            color: '#A1A1AA',
            textAlign: 'center',
            marginTop: 16,
            marginBottom: 0,
            padding: '0 40px',
          }}
        >
          We build beautiful, functional, and user-centered digital products
        </p>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #2563EB 0%, #38BDF8 50%, #2563EB 100%)',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
