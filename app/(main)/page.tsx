import { ReactLenis } from 'lenis/react';
import Footer from '@/components/(main)/Footer';
import Header from '@/components/(main)/Header';
import Hero from '@/components/(main)/Hero';
import SelectedWorks from '@/components/(main)/SelectedWorks';
import { constructMetadata } from '@/lib/siteConfig';

export const metadata = constructMetadata({
  title: 'Creative Developer & Designer',
  description:
    'Turkey-based Creative Developer & Designer crafting unforgettable, performance-driven digital experiences for E-Commerce, SaaS, and Luxury brands.',
});

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <main className="px-4 sm:px-10 py-4 flex flex-col gap-20">
        <Header />
        <Hero />
        <SelectedWorks />
        <Footer />
      </main>
    </>
  );
}
