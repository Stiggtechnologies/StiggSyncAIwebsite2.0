import { ImageResponse } from 'next/og';

export const alt = 'SyncAI — Governed Industrial Intelligence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#111214',
          padding: '72px 80px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#D6B885',
            fontSize: 22,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
          }}
        >
          SyncAI
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: 64,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              maxWidth: 920,
            }}
          >
            Governed industrial intelligence
          </div>
          <div
            style={{
              color: '#94a3b8',
              fontSize: 28,
              lineHeight: 1.4,
              maxWidth: 820,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Investigate failures. Prioritize work. Decide with evidence.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
