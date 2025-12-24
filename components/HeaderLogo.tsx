"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const CONFIG = {
  duration: 0.25,
  ease: "power2.inOut",
  delay: 0.025,
};

export default function HeaderLogo() {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const textTopRef = useRef<HTMLDivElement>(null);
  const textBottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !textTopRef.current ||
        !textBottomRef.current
      )
        return;

      const splitTop = new SplitText(textTopRef.current, { type: "chars" });
      const splitBottom = new SplitText(textBottomRef.current, {
        type: "chars",
      });

      const topChars = splitTop.chars;
      const bottomChars = splitBottom.chars;

      if (bottomChars) {
        gsap.set(bottomChars, { y: "100%" });
      }

      const handleMouseEnter = () => {
        const tl = gsap.timeline();

        if (topChars) {
          topChars.forEach((char, i) => {
            tl.to(
              char,
              {
                y: "-100%",
                duration: CONFIG.duration,
                ease: CONFIG.ease,
                delay: CONFIG.delay * i,
              },
              0
            );
          });
        }

        if (bottomChars) {
          bottomChars.forEach((char, i) => {
            tl.fromTo(
              char,
              { y: "100%" },
              {
                y: "0%",
                duration: CONFIG.duration,
                ease: CONFIG.ease,
                delay: CONFIG.delay * i,
              },
              0
            );
          });
        }
      };

      const handleMouseLeave = () => {
        const tl = gsap.timeline();

        if (topChars) {
          topChars.forEach((char, i) => {
            tl.to(
              char,
              {
                y: "0%",
                duration: CONFIG.duration,
                ease: CONFIG.ease,
                delay: CONFIG.delay * i,
              },
              0
            );
          });
        }

        if (bottomChars) {
          bottomChars.forEach((char, i) => {
            tl.to(
              char,
              {
                y: "100%",
                duration: CONFIG.duration,
                ease: CONFIG.ease,
                delay: CONFIG.delay * i,
              },
              0
            );
          });
        }
      };

      const container = containerRef.current;
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        splitTop.revert();
        splitBottom.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <Link
      ref={containerRef}
      href="/"
      className="capitalize absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center overflow-hidden"
    >
      <div className="relative">
        <div ref={textTopRef}>
          Emre <br className="inline sm:hidden" /> Gundogdu
        </div>
        <div ref={textBottomRef} className="absolute inset-0">
          Emre <br className="inline sm:hidden" /> Gundogdu
        </div>
      </div>
    </Link>
  );
}
