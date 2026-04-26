import { renderOgImage, ogSize, ogContentType } from '@/lib/og';

export const alt = 'CozaNest Tropical Resort — Case Study by Emre Gundogdu';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: 'Case Study',
    title: 'CozaNest Tropical Resort',
    subtitle: 'Emre Gundogdu',
  });
}
