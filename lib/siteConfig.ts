import { Metadata } from 'next';

export const PORTFOLIO_SITE_LINK = 'https://emregnd.com';

export const siteConfig = {
  name: 'Emre Gundogdu',
  alternateName: 'Emre Gündoğdu',
  titleTemplate: '%s - Emre Gundogdu',
  defaultTitle: 'Emre Gundogdu - Freelance Front-End Developer',
  description:
    'Freelance front-end developer specializing in React, Next.js, TypeScript, Figma, Shopify, and Webflow. Building landing pages, checkout flows, intake forms, and payment systems for currently DTC and telehealth brands.',
  url: PORTFOLIO_SITE_LINK,
  ogImage: `${PORTFOLIO_SITE_LINK}/images/pp.webp`,
  locale: 'en_US',
  author: 'Emre Gundogdu',
  jobTitle: 'Freelance Front-End Developer',
  bookingQuarter: 'Q2 2026',
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${PORTFOLIO_SITE_LINK}/#person`,
  name: siteConfig.name,
  alternateName: [siteConfig.alternateName, 'Emre Gundogdu Developer'],
  url: siteConfig.url,
  image: siteConfig.ogImage,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Shopify',
    'Webflow',
    'Stripe',
    'Figma',
    'Cloudflare Workers',
  ],
  nationality: 'Turkish',
  sameAs: [
    'https://www.linkedin.com/in/emregnd/',
    'https://github.com/emreguendogdu/',
    'https://www.upwork.com/freelancers/emregnd',
    'https://dribbble.com/emregnd/',
    'https://www.instagram.com/emregnd/',
    'https://layers.to/emregnd',
  ],
};

export function constructMetadata({
  title,
  description,
  path = '',
  keywords,
  ogType = 'website',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title
    ? siteConfig.titleTemplate.replace('%s', title)
    : siteConfig.defaultTitle;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description: desc,
    keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description: desc,
    },
  };
}
