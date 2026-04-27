'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import CtaButton from './ui/CtaButton';
import Image from 'next/image';

gsap.registerPlugin(SplitText);

const animStart = 0.2;

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: animStart,
      defaults: {
        ease: 'power4.out',
        duration: 1.2,
      },
    });

    const splits: SplitText[] = [];
    const noSplit = new Set(['.header-logo', '.hero-cta']);

    const sequence = [
      '.header-build',
      '.header-logo',
      '.header-location',
      '.header-time',
      '.hero-web',
      '.hero-design',
      '.hero-and',
      '.hero-dev',
      '.hero-partner',
      '.hero-p',
      '.hero-scroll',
      '.hero-booking',
      '.hero-cta',
    ];

    type Entry = { el: Element; split?: SplitText };
    const entries: Entry[] = [];

    sequence.forEach((selector) => {
      const el = document.querySelector(selector);
      if (!el) return;
      if (noSplit.has(selector)) {
        entries.push({ el });
      } else {
        const split = new SplitText(el, {
          type: 'lines',
          linesClass: 'line-mask',
          mask: 'lines',
          aria: 'hidden',
        });
        splits.push(split);
        entries.push({ el, split });
      }
    });

    const targets: Element[] = [];
    const elementsToReveal: Element[] = [];
    const lineTargets: Element[] = [];
    const directTargets: Element[] = [];

    entries.forEach(({ el, split }) => {
      elementsToReveal.push(el);
      if (split && split.lines) {
        targets.push(...(split.lines as Element[]));
        lineTargets.push(...(split.lines as Element[]));
      } else {
        targets.push(el);
        directTargets.push(el);
      }
    });

    gsap.set(lineTargets, { y: '200%', rotate: '4deg' });
    gsap.set(directTargets, { y: '200%', rotate: '4deg' });
    gsap.set(elementsToReveal, { visibility: 'visible' });

    tl.to(targets, {
      y: '0%',
      rotate: '0deg',
      stagger: 0.08,
    });
  });

  return (
    <section
      id="hero"
      className="relative w-full h-svh flex flex-col pt-[15svh] items-center justify-between gap-10 pb-6 sm:pb-10 overflow-hidden"
    >
      <div className="relative grid grid-cols-12 gap-2 sm:gap-6 z-10">
        <h1 className="sr-only">
          Emre Gundogdu (Emre Gündoğdu) - Freelance Front-End Developer & Web
          Design and Development Partner
        </h1>

        <div
          className="flex w-full col-span-full items-center justify-between sm:justify-start gap-2 sm:gap-10 xl:gap-20"
          aria-hidden
        >
          <span className="h0 hero-web invisible">Web</span>
          <span className="h0 hero-design invisible">Design</span>
          <span className="h0 hero-and invisible">&</span>
        </div>

        <div
          className="row-start-2 col-start-1 col-span-full sm:col-span-10 sm:col-start-3 z-10"
          aria-hidden
        >
          <span className="h0 hero-dev invisible">Development</span>
        </div>

        <div
          className="w-full row-start-3 sm:col-start-7 col-span-9"
          aria-hidden
        >
          <span className="h0 hero-partner invisible">Partner</span>
        </div>
      </div>

      {/* Image & Text Container */}
      <div className="relative w-full">
        <div className="absolute left-0 right-0 top-0 -translate-y-[70%] sm:-translate-y-full flex flex-col sm:flex-row gap-6 md:gap-16 lg:gap-48 xl:gap-80">
          {/* Image */}
          <div className="relative w-2/3 aspect-[1/1.3] max-w-[145px] sm:max-w-none sm:w-[304px] sm:h-[388px]">
            <div
              className="relative w-full h-full origin-bottom overflow-hidden"
              id="hero-img-wrapper"
            >
              <Image
                src="/images/pp.webp"
                alt="Personal image"
                priority
                fetchPriority="high"
                fill
                sizes="(min-width: 640px) 304px, 145px"
                className="object-center object-cover"
                id="hero-img"
              />

              <div className="absolute inset-0 z-10 bg-radial from-transparent via-transparent to-background" />
            </div>
          </div>

          <div className="flex items-end justify-end">
            <p className="hero-p xl:ml-10 max-w-auto sm:max-w-[300px] xl:max-w-[300px] invisible">
              Building web experiences where <br /> high-end aesthetics meet
              raw, <br />
              conversion-focused engineering.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-end justify-between gap-4">
        <p className="hero-scroll invisible">Scroll</p>
        <div className="flex flex-col gap-2.5 sm:gap-5">
          <p className="hero-booking text-right invisible">
            Booking Projects For - <br /> Q2' 2026
          </p>
          <div className="relative">
            <div className="relative w-full h-full overflow-hidden hero-cta-wrapper">
              <CtaButton
                text="Schedule a Call"
                type="small"
                className="hero-cta invisible"
                href="https://cal.com/emregnd/inquiry"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
