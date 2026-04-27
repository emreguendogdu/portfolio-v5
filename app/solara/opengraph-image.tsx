import { renderOgImage, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Solara Grand & Aqua Hotel - Case Study by Emre Gundogdu';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: 'Case Study',
    title: 'Solara Grand & Aqua Hotel',
    subtitle: 'Emre Gundogdu',
  });
}
