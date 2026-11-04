import { ImageResponse } from 'next/og';

export const alt = 'Abhijith K – Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          background: '#fcfcfc',
          backgroundImage:
            'linear-gradient(#e4e4e7 1px, transparent 1px), linear-gradient(90deg, #e4e4e7 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        <div style={{ fontSize: 32, color: '#0047FF', letterSpacing: 4 }}>HEY! THIS IS</div>
        <div style={{ fontSize: 120, fontWeight: 700, color: '#2563eb', lineHeight: 1.1 }}>Abhijith K</div>
        <div style={{ fontSize: 44, color: '#18181b', marginTop: 16 }}>Full Stack Developer · Bengaluru</div>
        <div style={{ fontSize: 30, color: '#71717a', marginTop: 12 }}>React · Next.js · TypeScript · Node.js · AI-Powered Web Apps</div>
        <div style={{ fontSize: 26, color: '#a1a1aa', marginTop: 56 }}>abhijithk-portfolio.vercel.app</div>
      </div>
    ),
    size,
  );
}
