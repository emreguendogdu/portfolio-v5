import { ReactLenis } from 'lenis/react';
import About from '@/components/(main)/About';
import Faq, { faqs } from '@/components/(main)/Faq';
import Footer from '@/components/(main)/Footer';
import Header from '@/components/(main)/Header';
import Hero from '@/components/(main)/Hero';
import Manifesto from '@/components/(main)/Manifesto';
import SelectedWorks from '@/components/(main)/SelectedWorks';
import Services from '@/components/(main)/Services';
import { constructMetadata, personSchema } from '@/lib/siteConfig';

export const metadata = constructMetadata();

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="px-4 sm:px-10 py-4 flex flex-col gap-20">
        <Header />
        <Hero />
        <Manifesto />
        <SelectedWorks />
        <About />
        <Services />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
