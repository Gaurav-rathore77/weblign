import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/**
 * Favicon mirrors the Weblign logomark: one solid square with three
 * lighter companions. Kept flat and high-contrast so it stays legible
 * at 16px in browser tabs.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
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
            width: 22,
            height: 22,
            gap: 2.5,
          }}
        >
          {/* solid square */}
          <div style={{ width: 9.75, height: 9.75, borderRadius: 2.5, background: '#000000' }} />
          {/* light grey horizontal pill */}
          <div style={{ width: 9.75, height: 5, borderRadius: 2.5, background: '#C8CCD0' }} />
          {/* light grey vertical pill */}
          <div style={{ width: 5, height: 9.75, borderRadius: 2.5, background: '#C8CCD0' }} />
          {/* darker grey square */}
          <div style={{ width: 9.75, height: 9.75, borderRadius: 2.5, background: '#909498' }} />
        </div>
      </div>
    ),
    { ...size },
  );
}