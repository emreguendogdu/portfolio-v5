import type { MetadataRoute } from 'next';
import { PORTFOLIO_SITE_LINK } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/kiani', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/solara', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/cozanest', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/click-to-chat', priority: 0.6, changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${PORTFOLIO_SITE_LINK}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
