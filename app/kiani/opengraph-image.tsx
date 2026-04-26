import { renderOgImage, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Kiani Luxury Hotel & Spa — Case Study by Emre Gundogdu';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: 'Case Study',
    title: 'Kiani Luxury Hotel & Spa',
    subtitle: 'Emre Gundogdu',
  });
}
