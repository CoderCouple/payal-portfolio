import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Payal Fofadiya — AI Thought Leader, Engineer, Computer Scientist'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #4c1d95 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '96px',
            height: '96px',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontSize: '44px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '36px',
          }}
        >
          PF
        </div>
        <div
          style={{
            fontSize: '76px',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}
        >
          Payal Fofadiya
        </div>
        <div
          style={{
            fontSize: '34px',
            fontWeight: 500,
            color: '#c4b5fd',
            letterSpacing: '-0.02em',
            marginBottom: '32px',
          }}
        >
          AI Thought Leader · Engineer · Computer Scientist
        </div>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.75)',
            letterSpacing: '-0.01em',
          }}
        >
          <span>Engineering Manager @ LinkedIn Agent Platform</span>
          <span>·</span>
          <span>Founder & CEO @ Fulloop AI</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
