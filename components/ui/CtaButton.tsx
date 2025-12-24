"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import ArrowRightIcon from "./ArrowRightIcon";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CONFIG = {
  duration: 0.25,
  ease: "power2.inOut",
  delay: 0.025,
};

const renderSplitText = (text: string) => {
  // Replace regular spaces with non-breaking spaces to preserve word separation
  const normalizedText = text.replace(/ /g, "\u00A0");
  return normalizedText.split("").map((l, i) => (
    <span className="inline-block" key={i} data-index={i}>
      {l}
    </span>
  ));
};

export default function CtaButton({
  text,
  href,
  type,
  className,
}: {
  text: string;
  href: string;
  type: "small" | "big";
  className?: string;
}) {
  if (!type) {
    throw new Error("Define type for the CTA button.");
  }

  const containerRef = useRef<HTMLAnchorElement>(null);
  const textTopRef = useRef<HTMLDivElement>(null);
  const textBottomRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const topChars = textTopRef.current?.querySelectorAll("span");
      const bottomChars = textBottomRef.current?.querySelectorAll("span");
      const arrowTop = arrowRef.current;
      const arrowBottom = containerRef.current.querySelector(
        ".arrow-bottom"
      ) as SVGSVGElement | null;

      // Set initial state for bottom layers
      if (bottomChars) {
        bottomChars.forEach((char) => {
          gsap.set(char, { y: "100%" });
        });
      }
      if (arrowBottom) {
        gsap.set(arrowBottom, { y: "100%", x: "-100%" });
      }

      const handleMouseEnter = () => {
        const tl = gsap.timeline();

        // Animate arrow top (move up and right) - FIRST
        if (arrowTop) {
          tl.to(
            arrowTop,
            {
              y: "-100%",
              x: "100%",
              duration: CONFIG.duration,
              ease: CONFIG.ease,
              delay: 0,
            },
            0
          );
        }

        // Animate arrow bottom (move from bottom-left to center) - FIRST
        if (arrowBottom) {
          tl.fromTo(
            arrowBottom,
            { y: "100%", x: "-100%" },
            {
              y: "0%",
              x: "0%",
              duration: CONFIG.duration,
              ease: CONFIG.ease,
              delay: 0,
            },
            0
          );
        }

        // Animate top layer (move up) - AFTER arrow
        if (topChars) {
          topChars.forEach((char, i) => {
            tl.to(
              char,
              {
                y: "-100%",
                duration: CONFIG.duration,
                ease: CONFIG.ease,
                delay: CONFIG.delay * (i + 1),
              },
              0
            );
          });
        }

        // Animate bottom layer (move from bottom to center) - AFTER arrow
        if (bottomChars) {
          bottomChars.forEach((char, i) => {
            tl.fromTo(
              char,
              { y: "100%" },
              {
                y: "0%",
                duration: CONFIG.duration,
                ease: CONFIG.ease,
                delay: CONFIG.delay * (i + 1),
              },
              0
            );
          });
        }
      };

      const handleMouseLeave = () => {
        const tl = gsap.timeline();

        // Reset arrow top - FIRST
        if (arrowTop) {
          tl.to(
            arrowTop,
            {
              y: "0%",
              x: "0%",
              duration: CONFIG.duration,
              ease: CONFIG.ease,
              delay: 0,
            },
            0
          );
        }

        // Reset arrow bottom - FIRST
        if (arrowBottom) {
          tl.to(
            arrowBottom,
            {
              y: "100%",
              x: "-100%",
              duration: CONFIG.duration,
              ease: CONFIG.ease,
              delay: 0,
            },
            0
          );
        }

        // Reset top layer - AFTER arrow
        if (topChars) {
          topChars.forEach((char, i) => {
            tl.to(
              char,
              {
                y: "0%",
                duration: CONFIG.duration,
                ease: CONFIG.ease,
                delay: CONFIG.delay * (i + 1),
              },
              0
            );
          });
        }

        // Reset bottom layer - AFTER arrow
        if (bottomChars) {
          bottomChars.forEach((char, i) => {
            tl.to(
              char,
              {
                y: "100%",
                duration: CONFIG.duration,
                ease: CONFIG.ease,
                delay: CONFIG.delay * (i + 1),
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
      };
    },
    { scope: containerRef, dependencies: [text] }
  );

  return (
    <Link
      ref={containerRef}
      href={href}
      target="_blank"
      className={cn(
        "flex items-center bg-foreground text-background rounded-lg relative overflow-hidden",
        type === "big"
          ? "h3 leading-[1] uppercase px-10 py-5 gap-5"
          : "px-5 pr-2.5 py-2.5 gap-2.5",
        className
      )}
    >
      <div
        className={cn(
          "relative flex items-center",
          type === "big" ? "gap-5" : "gap-2.5"
        )}
      >
        {/* Text container */}
        <div className="relative overflow-hidden">
          {/* Top layer - moves up on hover */}
          <div className="relative" ref={textTopRef}>
            {renderSplitText(text)}
          </div>
          {/* Bottom layer - moves from bottom to center on hover */}
          <div
            className="absolute inset-0 flex items-center"
            ref={textBottomRef}
          >
            {renderSplitText(text)}
          </div>
        </div>
        {/* Arrow container */}
        <div className="relative w-[1em] h-[1em] overflow-hidden">
          {/* Top layer - moves up on hover */}
          <ArrowRightIcon
            ref={arrowRef}
            className={cn(
              "w-[1em] h-[1em]",
              type === "small" ? "mb-[0.05em]" : null
            )}
          />
          {/* Bottom layer - moves from bottom to center on hover */}
          <ArrowRightIcon
            className={cn(
              "arrow-bottom absolute inset-0 w-[1em] h-[1em]",
              type === "small" ? "mb-[0.05em]" : null
            )}
          />
        </div>
      </div>
    </Link>
  );
}
