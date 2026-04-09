'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SALUTATIONS = [
  { text: 'Merhaba',    lang: 'tr' }, // Turkish
  { text: 'Xin chào',  lang: 'vi' }, // Vietnamese
  { text: 'สวัสดี',    lang: 'th' }, // Thai
  { text: 'Halo',       lang: 'id' }, // Indonesian
  { text: 'नमस्ते',    lang: 'hi' }, // Hindi
  { text: 'こんにちは', lang: 'ja' }, // Japanese
  { text: 'أهلاً',     lang: 'ar' }, // Arabic
  { text: '你好',       lang: 'zh' }, // Chinese
  { text: 'Bonjour',    lang: 'fr' }, // French
  { text: 'Ciao',       lang: 'it' }, // Italian
  { text: 'Hola',       lang: 'es' }, // Spanish
  { text: 'Olá',        lang: 'pt' }, // Portuguese
  { text: 'Hallo',      lang: 'de' }, // German
  { text: '안녕하세요', lang: 'ko' }, // Korean
  { text: 'سلام',       lang: 'fa' }, // Persian
  { text: 'Cześć',      lang: 'pl' }, // Polish
  { text: 'Привет',     lang: 'ru' }, // Russian
  { text: 'Γεια σου',   lang: 'el' }, // Greek
  { text: 'Sawubona',   lang: 'zu' }, // Zulu
  { text: 'Hei',        lang: 'no' }, // Norwegian
];

const INTERVAL = 2600; // ms between cycles
const EXIT_DURATION = 0.38;
const ENTER_DURATION = 0.55;

export default function RotatingSalutation() {
  const [text, setText] = useState(SALUTATIONS[0].text);
  const [lang, setLang] = useState(SALUTATIONS[0].lang);
  const spanRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);

  useEffect(() => {
    // Wait for entrance animation to finish before starting the cycle
    const startDelay = setTimeout(() => {
      const cycle = () => {
        if (animatingRef.current || !spanRef.current) return;
        animatingRef.current = true;

        const next = (indexRef.current + 1) % SALUTATIONS.length;

        // Exit — flow upward like water draining
        // No opacity here: the overflow:hidden container clips the text,
        // and dim-chrome CSS handles the visual level (GSAP opacity overrides CSS)
        gsap.to(spanRef.current, {
          yPercent: -120,
          skewY: 4,
          duration: EXIT_DURATION,
          ease: 'power2.in',
          onComplete: () => {
            indexRef.current = next;
            setText(SALUTATIONS[next].text);
            setLang(SALUTATIONS[next].lang);

            // Position below, then enter — water rising
            gsap.fromTo(
              spanRef.current!,
              { yPercent: 120, skewY: -4 },
              {
                yPercent: 0,
                skewY: 0,
                duration: ENTER_DURATION,
                ease: 'power3.out',
                onComplete: () => { animatingRef.current = false; },
              },
            );
          },
        });
      };

      const timer = setInterval(cycle, INTERVAL);
      return () => clearInterval(timer);
    }, 2200); // let the page entrance animation play first

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div
      className="overflow-hidden leading-none"
      style={{ height: '1.3em', display: 'flex', alignItems: 'center' }}
      aria-live="polite"
      aria-label="Greetings in different languages"
    >
      <span
        ref={spanRef}
        lang={lang}
        className="dim-chrome inline-block"
        style={{ direction: lang === 'ar' || lang === 'fa' ? 'rtl' : 'ltr' }}
      >
        {text}
      </span>
    </div>
  );
}
