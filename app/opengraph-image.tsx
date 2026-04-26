import { renderOgImage, ogSize, ogContentType } from '@/lib/og';
import { siteConfig } from '@/lib/siteConfig';

export const alt = siteConfig.defaultTitle;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    title: 'Emre Gundogdu',
    subtitle: 'Freelance Front-End Developer',
  });
}
