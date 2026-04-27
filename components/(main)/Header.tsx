'use client';

import { cn, getHMS } from '@/lib/utils';
import HeaderLogo from './HeaderLogo';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ROLL_DURATION = 1.1;
const ROLL_EASE = 'power3.inOut';

function RollingDigit({
  value,
  sample = '0',
  className,
}: {
  value: string;
  sample?: string;
  className?: string;
}) {
  const aRef = useRef<HTMLSpanElement>(null);
  const bRef = useRef<HTMLSpanElement>(null);
  const [a, setA] = useState(value);
  const [b, setB] = useState(value);
  const [active, setActive] = useState<'a' | 'b'>('a');
  const lastVal = useRef(value);

  useGSAP(
    () => {
      if (lastVal.current === value) return;
      lastVal.current = value;

      if (active === 'a') {
        setB(value);
        gsap.fromTo(
          bRef.current,
          { yPercent: 100 },
          { yPercent: 0, duration: ROLL_DURATION, ease: ROLL_EASE }
        );
        gsap.fromTo(
          aRef.current,
          { yPercent: 0 },
          { yPercent: -100, duration: ROLL_DURATION, ease: ROLL_EASE }
        );
        setActive('b');
      } else {
        setA(value);
        gsap.fromTo(
          aRef.current,
          { yPercent: 100 },
          { yPercent: 0, duration: ROLL_DURATION, ease: ROLL_EASE }
        );
        gsap.fromTo(
          bRef.current,
          { yPercent: 0 },
          { yPercent: -100, duration: ROLL_DURATION, ease: ROLL_EASE }
        );
        setActive('a');
      }
    },
    { dependencies: [value] }
  );

  return (
    <span
      className={cn('relative inline-block', className)}
      style={{
        height: '1em',
        lineHeight: 1,
        verticalAlign: 'baseline',
        clipPath: 'inset(0)',
      }}
    >
      <span aria-hidden className="invisible">
        {sample}
      </span>
      <span
        ref={aRef}
        className="absolute inset-0 block text-center"
        style={{ lineHeight: 1 }}
      >
        {a}
      </span>
      <span
        ref={bRef}
        className="absolute inset-0 block text-center"
        style={{ lineHeight: 1 }}
      >
        {b}
      </span>
    </span>
  );
}

export default function Header({ className }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState({ hms: '', period: '' });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      setTime(getHMS('Asia/Ho_Chi_Minh'));
      timeout = setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  const { hms, period } = time;
  const [hh, mm, ss] = hms ? hms.split(':') : ['', '', ''];

  return (
    <header
      ref={container}
      className={cn(
        'absolute top-4 left-0 right-0 px-4 sm:px-10 pb-4 w-full flex justify-between items-center z-10',
        className
      )}
    >
      <div className="flex gap-1.75 items-center">
        <p className="header-anim-item header-build text-muted hidden sm:block invisible">
          Based in — <br />
          Istanbul, TR
        </p>
      </div>
      <div className="absolute top-0 sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 overflow-hidden">
        <div className="header-logo invisible">
          <HeaderLogo className="relative" />
        </div>
      </div>

      <div className="text-right text-muted">
        <div className="header-anim-item header-location invisible">
          <p>Currently @ Da Nang, VN</p>
        </div>
        <div className="header-anim-item header-time invisible">
          <p
            suppressHydrationWarning
            className="tabular-nums"
            style={{ lineHeight: 1 }}
          >
            {hms && (
              <>
                {hh.split('').map((ch, i) => (
                  <RollingDigit key={`h${i}`} value={ch} />
                ))}
                :
                {mm.split('').map((ch, i) => (
                  <RollingDigit key={`m${i}`} value={ch} />
                ))}
                <span className="opacity-60">:</span>
                {ss.split('').map((ch, i) => (
                  <RollingDigit
                    key={`s${i}`}
                    value={ch}
                    className="opacity-60"
                  />
                ))}
                <span className="inline-block w-[0.5ch]" />
                <RollingDigit value={period} sample="AM" />
              </>
            )}
          </p>
        </div>
      </div>
    </header>
  );
}
