import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: 19,
            height: 19,
            gap: 3,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 2, background: '#ffffff' }} />
          <div style={{ width: 8, height: 8, borderRadius: 2, background: '#ffffff', opacity: 0.3 }} />
          <div style={{ width: 8, height: 8, borderRadius: 2, background: '#ffffff', opacity: 0.3 }} />
          <div style={{ width: 8, height: 8, borderRadius: 2, background: '#ffffff', opacity: 0.55 }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
