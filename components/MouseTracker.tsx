"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ArrowRightIcon from "./ui/ArrowRightIcon";

export default function MouseTracker() {
  const flairRef = useRef<HTMLDivElement>(null);
  const [hasUrl, setHasUrl] = useState<boolean | null>(null);

  useEffect(() => {
    const flair = flairRef.current;
    if (!flair) return;

    gsap.set(flair, { xPercent: -50, yPercent: -50, opacity: 0 });

    const xSetter = gsap.quickSetter(flair, "x", "px");
    const ySetter = gsap.quickSetter(flair, "y", "px");

    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    function handleMouseMove(e: MouseEvent) {
      xSetter(e.x);
      ySetter(e.y);

      let node: HTMLElement | null = e.target as HTMLElement;
      let found = false;
      let hasUrl = false;

      while (node) {
        if (node.dataset && !!node.dataset["projectImage"]) {
          found = true;
          // Check for projectHasUrl attribute (it is string "true"/"false")
          if (node.dataset["projectHasUrl"] === "true") {
            hasUrl = true;
          } else {
            hasUrl = false;
          }
          break;
        }
        node = node.parentElement;
      }

      if (found) {
        if (hasUrl) {
          setHasUrl(true);
        } else {
          setHasUrl(false);
        }
        // Show flair
        gsap.to(flair, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }
      } else {
        if (!hideTimeout) {
          hideTimeout = setTimeout(() => {
            gsap.to(flair, {
              opacity: 0,
              scale: 0.85,
              duration: 0.18,
              ease: "power2.in",
            });
            hideTimeout = null;
          }, 20);
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div
      ref={flairRef}
      className="flair w-48 h-48 fixed top-0 left-0 pointer-events-none z-99 rounded-full text-black flex flex-col justify-center items-center gap-2.5 overflow-hidden"
      style={{ opacity: 0, scale: 0.9, transition: "opacity 0.12s" }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-white/80 rounded-full z-98 blur-md"></div>
      <div className="relative z-99">
        {hasUrl ? <ArrowRightIcon className="w-16 h-16" /> : null}
      </div>
      <span className="relative z-99">{hasUrl ? "View" : "In Progress"}</span>
    </div>
  );
}
