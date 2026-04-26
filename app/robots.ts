import type { MetadataRoute } from 'next';
import { PORTFOLIO_SITE_LINK } from '@/lib/siteConfig';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${PORTFOLIO_SITE_LINK}/sitemap.xml`,
    host: PORTFOLIO_SITE_LINK,
  };
}
