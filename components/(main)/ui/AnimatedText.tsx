"use client";

import React, { useRef, ReactElement, ReactNode } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  className?: string;
}

gsap.registerPlugin(SplitText, ScrollTrigger);

const TEXT_ANIMATION_CONFIG = {
  set: { y: "200%", rotate: "4deg" },
  to: {
    y: "0%",
    rotate: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: "power4.out",
  },
};

export default function AnimatedText({
  children,
  animateOnScroll = true,
  delay = 0,
  className,
}: Props) {
  const containerRef = useRef<HTMLElement | null>(null);
  const elementRefs = useRef<Element[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<Element[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRefs.current = [];
      lines.current = [];
      elementRefs.current = [];

      let elements: Element[] = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as Element[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRefs.current.push(element);

        const split = SplitText.create(element, {
          type: "words, lines",
          mask: "lines",
          linesClass: "line++",
          lineThreshold: 0.1,
        });

        splitRefs.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines && split.lines.length > 0) {
            const firstLine = split.lines[0] as HTMLElement;
            if (firstLine) {
              firstLine.style.paddingLeft = textIndent;
            }
          }
          const htmlElement = element as HTMLElement;
          htmlElement.style.textIndent = "0";
        }

        if (split.lines) {
          lines.current.push(...split.lines);
        }
      });

      // Show container and set line initial states
      gsap.set(lines.current, TEXT_ANIMATION_CONFIG.set);
      gsap.set(containerRef.current, { visibility: "visible" });

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...TEXT_ANIMATION_CONFIG.to,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, TEXT_ANIMATION_CONFIG.to);
      }

      return () => {
        splitRefs.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  if (React.Children.count(children) === 1) {
    const child = React.Children.only(children);
    if (React.isValidElement(child)) {
      return React.cloneElement(
        child as ReactElement<any>,
        {
          ...(child.props || {}),
          ref: containerRef,
          "data-animated-text": "true",
        } as any
      );
    }
  }

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      data-copy-wrapper="true"
      data-animated-text="true"
      className={className}
    >
      {children}
    </div>
  );
}
