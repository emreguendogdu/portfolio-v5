"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import CtaButton from "./ui/CtaButton";
import Image from "next/image";
import { useState, useRef } from "react";
import Header from "./Header";

gsap.registerPlugin(SplitText);

const animStart = 0.2,
  animStagger = 0.1;

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageAnimated, setImageAnimated] = useState<boolean>(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: animStart,
        defaults: {
          ease: "power4.out",
          duration: 1.2,
        },
      });

      const splits: SplitText[] = [];

      const animateLines = (selector: string) => {
        const split = new SplitText(selector, {
          type: "lines",
          linesClass: "line-mask",
          mask: "lines",
        });
        splits.push(split);

        tl.from(split.lines, {
          y: "200%",
          rotate: "4deg",
        });
      };

      gsap.set("#hero-img-wrapper", {
        clipPath: "inset(100% 0% 0% 0%)",
      });

      // Header Animations
      animateLines(".header-build", 0);
      animateLines(".header-location", animStagger);
      animateLines(".header-time", animStagger * 2);
      tl.from(
        ".header-logo",
        {
          y: "200%",
          rotate: "4deg",
          opacity: 0,
        },
        animStagger
      );

      // Hero Content Animations
      animateLines(".hero-web", 0.3);
      animateLines(".hero-design", 0.3 + animStagger);
      animateLines(".hero-and", 0.3 + animStagger * 2);
      animateLines(".hero-dev", 0.3 + animStagger * 3);
      animateLines(".hero-partner", 0.3 + animStagger * 4);

      if (imageLoaded) {
        tl.to(
          "#hero-img-wrapper",
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          "<0.2"
        );

        setImageAnimated(true);
      }

      animateLines(".hero-p", 0.3 + animStagger * 5);
      animateLines(".hero-scroll", 0.3 + animStagger * 6);
      animateLines(".hero-booking", 0.3 + animStagger * 6);

      tl.from(
        ".hero-cta",
        {
          y: "100%",
          opacity: 0,
        },
        "<0.2"
      );

      if (imageAnimated === false && imageLoaded) {
        tl.to(
          "#hero-img-wrapper",
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          "<0.2"
        );

        setImageAnimated(true);
      }
    },
    { dependencies: [imageLoaded, imageAnimated] }
  );

  return (
    <section
      id="hero"
      className="relative w-full min-h-svh flex flex-col pt-[15svh] items-center justify-between gap-10 py-4 pb-6 sm:pb-10 overflow-hidden"
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
          <div className="relative hero-cta">
            <CtaButton
              text="Schedule a Call"
              type="small"
              href="https://cal.com/emregnd/inquiry"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
