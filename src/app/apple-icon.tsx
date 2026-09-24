import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
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
            width: 108,
            height: 108,
            gap: 12,
          }}
        >
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#ffffff' }} />
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#ffffff', opacity: 0.3 }} />
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#ffffff', opacity: 0.3 }} />
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#ffffff', opacity: 0.55 }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
