'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useId, useRef, useState } from 'react';
import AnimatedText from './ui/AnimatedText';

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'How do projects usually work?',
    a: 'We start with a 30-minute call. If we are a fit, I send a fixed scope and timeline within 48 hours. Most projects ship in 2 to 6 weeks with weekly check-ins and a shared Notion doc as the source of truth.',
  },
  {
    q: 'What does it cost?',
    a: 'Fixed scopes typically run $3,500 to $15,000. Front-end implementation only is $2,000 to $5,000. I send a quote within 48 hours of our first call, no obligation.',
  },
  {
    q: 'Do you work with founders or only agencies?',
    a: 'Both. I partner directly with founders shipping their first marketing site, and I white-label for design agencies that need a senior front-end on a sprint.',
  },
  {
    q: "What's your stack?",
    a: 'Next.js, TypeScript, Tailwind, and GSAP for the front-end. Shopify and Webflow when CMS speed matters. Stripe and Cloudflare Workers when payments and edge logic do.',
  },
  {
    q: 'Can you handle the design too?',
    a: 'Yes. About half of my work is design and development end-to-end. The other half is front-end implementation against an existing design system or Figma file.',
  },
  {
    q: 'Where are you based and how do timezones work?',
    a: 'Istanbul, Turkey by default. Currently working remotely from Da Nang, Vietnam. I am async-friendly and overlap a few working hours daily with both EU and US East Coast clients.',
  },
];

function FaqItem({
  faq,
  index,
}: {
  faq: Faq;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const headingId = useId();
  const panelId = useId();

  useGSAP(
    () => {
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          height: open ? 'auto' : 0,
          duration: 0.5,
          ease: 'power3.inOut',
        });
      }
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          rotate: open ? 45 : 0,
          duration: 0.4,
          ease: 'power3.inOut',
        });
      }
    },
    { dependencies: [open] }
  );

  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="border-t border-current/10 col-span-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        id={headingId}
        className="w-full grid grid-cols-12 gap-x-3 sm:gap-x-5 py-5 sm:py-7 text-left items-start cursor-pointer group"
      >
        <span className="col-span-2 sm:col-span-1 text-muted text-xs uppercase tracking-widest pt-1.5">
          {number}
        </span>
        <h3 className="col-span-9 sm:col-span-10 group-hover:opacity-60 transition-opacity duration-200">
          {faq.q}
        </h3>
        <span
          ref={iconRef}
          aria-hidden
          className="col-span-1 inline-block text-right text-2xl leading-none pt-1 origin-center"
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className="overflow-hidden"
        style={{ height: 0 }}
      >
        <div className="grid grid-cols-12 gap-x-3 sm:gap-x-5 pb-8">
          <div className="hidden sm:block sm:col-span-1" />
          <p className="col-span-12 sm:col-span-10 text-muted max-w-2xl">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full grid grid-cols-12 gap-y-10 sm:gap-y-20 sm:gap-x-5"
    >
      <div className="relative flex flex-row justify-between gap-sm items-end w-full col-span-full flex-wrap">
        <div className="w-full sm:flex-1 grid grid-cols-12 grid-rows-2 gap-y-2 sm:gap-y-5">
          <h2 id="faq-heading" className="h0 col-span-full">
            <AnimatedText>
              <span>Questions</span>
            </AnimatedText>
          </h2>
          <h2 className="h0 row-start-2 col-start-3 col-span-10">
            <AnimatedText>
              <span>I get a lot.</span>
            </AnimatedText>
          </h2>
        </div>

        <div className="absolute right-0 top-0">
          <p className="text-muted text-xs uppercase tracking-widest">
            [04 — FAQ]
          </p>
        </div>
      </div>

      <div className="col-span-full grid grid-cols-12">
        {faqs.map((faq, i) => (
          <FaqItem key={faq.q} faq={faq} index={i} />
        ))}
        <div className="border-t border-current/10 col-span-full" />
      </div>
    </section>
  );
}
