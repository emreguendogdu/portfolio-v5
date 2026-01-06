"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import CtaButton from "./ui/CtaButton";
import Image from "next/image";
import { useState, useRef } from "react";
import Header from "./Header";

gsap.registerPlugin(SplitText);

const animStart = 0.2;

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useGSAP(
    () => {
      gsap.set("#hero", { visibility: "visible" });
      gsap.set("header", { visibility: "visible" });
      const tl = gsap.timeline({
        delay: animStart,
        defaults: {
          ease: "power4.out",
          duration: 1.2,
        },
      });

      const splits: SplitText[] = [];

      // 1. Define the items in the order they should animate
      const sequence = [
        ".header-build",
        ".header-logo",
        ".header-location",
        ".header-time",
        ".hero-web",
        ".hero-design",
        ".hero-and",
        ".hero-dev",
        ".hero-partner",
        ".hero-p",
        ".hero-scroll",
        ".hero-booking",
        ".hero-cta",
      ];

      // 2. Process items into targets (splitting text where needed)
      const targets: Element[] = [];
      sequence.forEach((selector) => {
        const el = document.querySelector(selector);
        if (!el) return;

        // Header logo and CTA button shouldn't be split into lines
        const shouldSplit = ![".header-logo", ".hero-cta"].includes(selector);

        if (shouldSplit) {
          const split = new SplitText(el, {
            type: "lines",
            linesClass: "line-mask",
            mask: "lines",
          });
          splits.push(split);
          if (split.lines) targets.push(...(split.lines as any));
        } else {
          targets.push(el);
        }
      });

      // 3. Initial states
      gsap.set("#hero-img-wrapper", {
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set([".header-logo", ".hero-cta"], { opacity: 0 });

      // 4. Animate everything in one go with a single stagger
      tl.from(targets, {
        y: "200%",
        rotate: "4deg",
        // Only the logo and CTA need opacity animation, others are masked
        opacity: (i, target: any) =>
          target.classList.contains("header-logo") ||
          target.classList.contains("hero-cta")
            ? 0
            : 1,
        stagger: 0.08,
      });

      // 5. Image reveal - triggered slightly after the titles start
      if (imageLoaded) {
        tl.to(
          "#hero-img-wrapper",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "expo.inOut",
          },
          0.6 // Relative point in the timeline
        );
      }
    },
    { dependencies: [imageLoaded] }
  );

  return (
    <section
      id="hero"
      className="relative w-full min-h-svh flex flex-col pt-[15svh] items-center justify-between gap-10 py-4 pb-6 sm:pb-10 overflow-hidden invisible"
    >
      <div className="relative grid grid-cols-12 grid-rows-4 gap-2 sm:gap-6 z-10">
        <h1 className="sr-only">Web Design & Development Partner</h1>

        <div
          className="flex w-full col-span-full items-center justify-between sm:justify-start gap-2 sm:gap-10 xl:gap-20"
          aria-hidden
        >
          <span className="h0 hero-title hero-title-1 hero-web">Web</span>
          <span className="h0 hero-title hero-title-2 hero-design">Design</span>
          <span className="h0 hero-title hero-title-3 hero-and">&</span>
        </div>

        <div
          className="relative h0 row-start-2 col-start-1 col-span-full sm:col-span-10 sm:col-start-3 z-10 hero-dev"
          aria-hidden
        >
          <span className="h0 hero-title hero-title-4 hero-dev">
            Development
          </span>
        </div>

        <div
          className="w-full row-start-3 sm:col-start-7 col-span-9 hero-partner"
          aria-hidden
        >
          <span className="h0 hero-title hero-title-5 hero-partner" aria-hidden>
            Partner
          </span>
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
                fill
                className="object-center object-cover"
                id="hero-img"
                onLoad={() => setImageLoaded(true)}
              />

              <div className="absolute inset-0 z-10 bg-radial from-transparent via-transparent to-background" />
            </div>
          </div>

          <div className="flex items-end justify-end">
            <p className="hero-p xl:ml-10 max-w-auto sm:max-w-[300px] xl:max-w-[300px]">
              Building web experiences where <br /> high-end aesthetics meet
              raw, <br />
              conversion-focused engineering.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-end justify-between gap-4">
        <p className="hero-scroll">Scroll</p>
        <div className="flex flex-col gap-2.5 sm:gap-5">
          <p className="hero-booking text-right">
            Booking For — <br /> January 2026
          </p>
          <div className="relative">
            <div className="relative w-full h-full hero-cta">
              <CtaButton
                text="Schedule a Call"
                type="small"
                href="https://cal.com/emregnd/inquiry"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
