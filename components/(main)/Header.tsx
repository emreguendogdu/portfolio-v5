'use client';

import { cn, getIstanbulHMS } from '@/lib/utils';
import HeaderLogo from './HeaderLogo';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function RollingDigit({ value }: { value: string }) {
  const [prev, setPrev] = useState(value);
  const oldRef = useRef<HTMLSpanElement>(null);
  const newRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prev === value) return;
      gsap.fromTo(
        newRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.35, ease: 'power2.out' }
      );
      gsap.fromTo(
        oldRef.current,
        { yPercent: 0 },
        {
          yPercent: -100,
          duration: 0.35,
          ease: 'power2.out',
          onComplete: () => setPrev(value),
        }
      );
    },
    { dependencies: [value] }
  );

  return (
    <span
      className="relative inline-block overflow-hidden align-baseline"
      style={{ width: '1ch', height: '1em', lineHeight: 1 }}
    >
      <span ref={oldRef} className="absolute inset-0 text-center">
        {prev}
      </span>
      {prev !== value && (
        <span ref={newRef} className="absolute inset-0 text-center">
          {value}
        </span>
      )}
    </span>
  );
}

export default function Header({ className }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [hms, setHms] = useState('');
  const msRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    let lastHms = '';
    const tick = () => {
      const now = new Date();
      const ms = String(now.getMilliseconds()).padStart(3, '0');
      if (msRef.current) msRef.current.textContent = ms;

      const v = getIstanbulHMS();
      if (v !== lastHms) {
        lastHms = v;
        setHms(v);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <header
      ref={container}
      className={cn(
        'absolute top-4 left-0 right-0 px-4 sm:px-10 pb-4 w-full flex justify-between items-center z-10',
        className
      )}
    >
      <div className="flex gap-1.75 items-center">
        <p className="header-anim-item header-build text-muted capitalize hidden sm:block invisible">
          Currently building — <br />
          v1.0
        </p>
      </div>
      <div className="absolute top-0 sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 overflow-hidden">
        <div className="header-logo invisible">
          <HeaderLogo className="relative" />
        </div>
      </div>

      <div className="text-right text-muted">
        <div className="header-anim-item header-location invisible">
          <p>Istanbul, TR</p>
        </div>
        <div className="header-anim-item header-time invisible">
          <p
            suppressHydrationWarning
            className="inline-flex items-baseline tabular-nums"
          >
            {hms.split('').map((ch, i) =>
              ch === ':' ? (
                <span key={i}>:</span>
              ) : (
                <RollingDigit key={i} value={ch} />
              )
            )}
            <span>.</span>
            <span ref={msRef} style={{ display: 'inline-block', width: '3ch' }}>
              000
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
