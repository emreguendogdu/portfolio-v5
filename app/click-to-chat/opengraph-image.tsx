import { renderOgImage, ogSize, ogContentType } from '@/lib/og';

export const alt = 'WhatsApp Click To Chat — Free Link Generator by Emre Gundogdu';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: 'Free Tool',
    title: 'WhatsApp Click To Chat',
    subtitle: 'Free link generator · Emre Gundogdu',
  });
}
