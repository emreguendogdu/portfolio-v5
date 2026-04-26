import { ImageResponse } from 'next/og';
import { siteConfig, PORTFOLIO_SITE_LINK } from './siteConfig';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

interface OgCardProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const HOST = PORTFOLIO_SITE_LINK.replace(/^https?:\/\//, '');

export function renderOgImage({ eyebrow, title, subtitle }: OgCardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f1efec',
          color: '#161819',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {eyebrow ? (
            <div
              style={{
                fontSize: 24,
                letterSpacing: 6,
                textTransform: 'uppercase',
                opacity: 0.5,
                marginBottom: 24,
                display: 'flex',
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              fontSize: 112,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              fontWeight: 600,
              maxWidth: 1040,
              display: 'flex',
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 28,
          }}
        >
          <div style={{ opacity: 0.7, display: 'flex' }}>
            {subtitle ?? siteConfig.jobTitle}
          </div>
          <div style={{ opacity: 0.5, display: 'flex' }}>{HOST}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
