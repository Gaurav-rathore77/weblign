import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** iOS home-screen icon matching the Weblign logomark. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: 104,
            height: 104,
            gap: 12,
          }}
        >
          <div style={{ width: 46, height: 46, borderRadius: 12, background: '#000000' }} />
          <div style={{ width: 46, height: 24, borderRadius: 12, background: '#C8CCD0' }} />
          <div style={{ width: 24, height: 46, borderRadius: 12, background: '#C8CCD0' }} />
          <div style={{ width: 46, height: 46, borderRadius: 12, background: '#909498' }} />
        </div>
      </div>
    ),
    { ...size },
  );
}