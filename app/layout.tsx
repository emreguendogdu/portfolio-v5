import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { PORTFOLIO_SITE_LINK, personSchema } from '@/lib/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO_SITE_LINK),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
