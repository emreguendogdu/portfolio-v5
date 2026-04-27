import { constructMetadata, PORTFOLIO_SITE_LINK } from '@/lib/siteConfig';
import ClickToChat from './components/ClickToChat';

const PATH = '/click-to-chat';
const PAGE_URL = `${PORTFOLIO_SITE_LINK}${PATH}`;

const BRAND = 'WhatsApp Click To Chat';
const TITLE = `${BRAND} - Free Link Generator`;
const DESCRIPTION =
  'WhatsApp Click To Chat - free link generator. Start a WhatsApp conversation with any phone number without saving the contact. Supports every country code, works on web and mobile, no sign-up, no tracking.';

export const metadata = constructMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'WhatsApp Click To Chat',
    'click to chat',
    'whatsapp link generator',
    'whatsapp without saving contact',
    'wa.me link',
    'whatsapp chat link',
    'whatsapp web shortcut',
    'send whatsapp message without adding contact',
    'free whatsapp tool',
    'open source whatsapp utility',
    'whatsapp click to chat generator',
  ],
});

const FAQ = [
  {
    q: 'How do I send a WhatsApp message without saving the contact?',
    a: 'Enter the country code and phone number above, then click "WhatsApp Web" or "Open App". WhatsApp opens a chat with that number directly - no need to add it to your contacts.',
  },
  {
    q: 'Is WhatsApp Click To Chat free?',
    a: 'Yes. WhatsApp Click To Chat is 100% free and open source. No sign-up, no cookies, no tracking, no account required.',
  },
  {
    q: 'Does it work on iPhone and Android?',
    a: 'Yes. The "Open App" button uses the official wa.me link, which opens WhatsApp on iOS, Android, desktop, and the WhatsApp Web client.',
  },
  {
    q: 'Which country codes are supported?',
    a: 'All ITU-assigned country calling codes are supported, from +1 (US/Canada) to +998 (Uzbekistan). Search by country name or dial code in the dropdown.',
  },
  {
    q: 'Do you store the phone numbers I enter?',
    a: 'No. Numbers are processed entirely in your browser. Nothing is sent to a server, logged, or tracked.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': `${PAGE_URL}#webapp`,
      name: BRAND,
      alternateName: ['Click To Chat', 'WhatsApp Link Generator'],
      url: PAGE_URL,
      description: DESCRIPTION,
      applicationCategory: 'CommunicationApplication',
      operatingSystem: 'Any (Web)',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      isAccessibleForFree: true,
      inLanguage: 'en',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Generate wa.me chat links for any phone number',
        'Open WhatsApp Web directly without adding the contact',
        'Supports every international country calling code',
        'Copy or share generated link',
        'Keyboard shortcuts (Alt+W / Alt+A / Alt+C)',
        'No sign-up, no cookies, no tracking',
      ],
      author: {
        '@type': 'Person',
        name: 'Emre Gundogdu',
        url: PORTFOLIO_SITE_LINK,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: FAQ.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: PORTFOLIO_SITE_LINK,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: BRAND,
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClickToChat />
    </>
  );
}
