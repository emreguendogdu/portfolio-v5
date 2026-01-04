"use client";

import ArrowOutwardRounded from "./components/ui/icons/ArrowOutwardRounded";
import Logo from "./components/ui/icons/Logo";
import Star from "./components/ui/icons/Star";
import { Fragment, useState } from "react";
import BackgroundImage from "./components/images/hero-bg.png";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

const timelineDefaults = { duration: 1, ease: "power2.out" };
const lineAnimation = {
  start: { opacity: 0, rotate: 10, y: 100 },
  end: { opacity: 1, rotate: 0, y: 0, stagger: 0.2 },
  exit: { opacity: 0, rotate: 10, y: -100, duration: 2, stagger: 0.2 },
};

gsap.registerPlugin(SplitText);

export default function page() {
  const [startHeroAnimation, setStartHeroAnimation] = useState(false);

  usePreloaderAnimation({ setStartHeroAnimation });
  useHeroAnimation({ startHeroAnimation });

  return (
    <>
      <Preloader />
      <section
        id="hero"
        className="hidden relative h-svh text-foreground py-5 px-5 overflow-hidden"
      >
        <header className="absolute top-0 left-0 right-0 -translate-y-full w-full flex justify-between items-center px-5 py-5 z-10">
          <Logo />
          <ul className="relative h-fit items-center gap-5 [&>li]:uppercase hidden sm:flex">
            <li>Rooms & Suites</li>
            <li>Aqua</li>
            <li>Dining</li>
            {/* Divider */}
            <div className="self-stretch w-px bg-foreground/40" />
            <li>Experiences</li>
            <li>Offers</li>
          </ul>

          <button className="uppercase">Menu</button>
        </header>

        {/* Main Content */}
        <div className="relative flex flex-col justify-between w-full">
          {/* Heading */}
          <div className="relative pt-[20svh] sm:pt-[13.6svh] flex flex-col items-center gap-2.5 w-fit">
            {/* Stars */}
            <div
              className="flex items-center gap-1.25 sm:gap-2.5 text-foreground overflow-hidden"
              id="hero-stars-container"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Fragment key={`st__${i}`}>
                  {i === 2 ? (
                    <Star className="star big-star" />
                  ) : (
                    <Star className="star" />
                  )}
                </Fragment>
              ))}
            </div>
            <div
              id="heading-text"
              className="flex flex-col items-center justify-center"
            >
              <span className="h1 overflow-hidden">Solara</span>
              <span className="h2 overflow-hidden">Grand & Aqua</span>
            </div>
          </div>

          {/* Award Badge Container */}
          <div
            id="award-badge-container"
            className="relative translate-x-5 -translate-y-1/3 flex w-full justify-end select-none pointer-events-none"
          >
            {/* Badge */}
            <div
              id="award-badge"
              className="relative translate-x-full will-change-transform bg-foreground text-background p-2.5 sm:p-5 flex flex-col items-center gap-5 w-fit h-fit"
            >
              <div className="font-bold">h.</div>
              <span className="capitalize [writing-mode:vertical-rl] rotate-180">
                Hotel Of The Year
              </span>
            </div>
          </div>
        </div>
        {/* Bottom content */}
        <div className="absolute px-5 py-5 bottom-0 left-0 right-0 w-full flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-10">
          {/* Text */}
          <div
            id="bottom-content-text-wrapper"
            className="flex flex-col gap-2.5 sm:gap-5"
          >
            <h2>
              A stay shaped by light, <br />
              space, and silence.
            </h2>

            <p>
              Luxury retreats on the Turkish Riviera, <br /> designed for
              presence—not excess.
            </p>
          </div>

          <div className="relative w-full items-center md:items-end hidden sm:flex">
            <BookingElement />
          </div>

          <div className="relative w-full flex justify-end sm:hidden">
            <button className="bg-background text-foreground px-10 py-2.5 whitespace-nowrap rounded-2xl w-fit">
              Book Your Stay
            </button>
          </div>
        </div>

        <div className="absolute inset-0 -z-10">
          <Image
            src={BackgroundImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </section>
    </>
  );
}

const BookingElement = () => {
  return (
    <div
      id="booking-element"
      className="relative bg-foreground text-background p-2.5 flex items-center max-h-[70px] rounded-full w-fit gap-5"
    >
      <div className="booking-element-item pl-5">
        <span>Rooms</span>
        <span>Select room(s)</span>
      </div>

      <div className="booking-element-item">
        <span>Check In / Check Out</span>
        <span>Select the dates</span>
      </div>

      <div className="booking-element-item border-r-0 sm:pr-10">
        <span>Guests</span>
        <span>2 adults</span>
      </div>

      <div className="relative p-3 flex items-center justify-center bg-background text-foreground rounded-full">
        <ArrowOutwardRounded className="w-[1em] h-auto aspect-square" />
      </div>
    </div>
  );
};

const Preloader = () => {
  return (
    <section
      id="preloader"
      className="fixed inset-0 z-999 h-svh flex flex-col gap-2.5 items-center justify-center bg-foreground text-background hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <h2 className="first-text">Welcome to...</h2>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-2.5">
        <div
          id="preloader-stars-container"
          className="absolute bottom-full left-0 right-0 flex justify-center items-center mb-2.5 text-background gap-1.25 sm:gap-2.5"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Fragment key={`st__${i}`}>
              {i === 2 ? (
                <Star className="star big-star preloader-star" />
              ) : (
                <Star className="star preloader-star" />
              )}
            </Fragment>
          ))}
        </div>
        <h1 className="second-text flex items-center justify-center overflow-y-hidden">
          <div
            className="split-target flex justify-end overflow-hidden"
            style={{ width: "1.5em" }}
          >
            <span>Sol</span>
          </div>
          <div
            className="relative overflow-hidden shrink-0 flex items-center justify-center"
            id="image-wrapper"
            style={{ width: 0 }}
          >
            <div
              className="relative overflow-hidden"
              id="growing-image"
              style={{ width: 0, height: "0.8em" }}
            >
              <Image
                src={BackgroundImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            className="split-target flex justify-start overflow-hidden"
            style={{ width: "1.5em" }}
          >
            <span>ara</span>
          </div>
        </h1>

        <h2 className="second-text">Grand & Aqua Hotel</h2>
      </div>
    </section>
  );
};

const useHeroAnimation = ({
  startHeroAnimation,
}: {
  startHeroAnimation: boolean;
}) => {
  useGSAP(
    () => {
      if (!startHeroAnimation) return;

      const tl = gsap.timeline({
        defaults: { ...timelineDefaults, duration: 1.618 },
        onStart: () => {
          document?.getElementById("hero")?.classList.remove("hidden");
          document?.getElementById("preloader")?.classList.add("hidden");
        },
      });

      const splitHotelTitle = SplitText.create("#hero #heading-text span.h1", {
        type: "words, chars",
        charsClass: "char",
      });

      const splitHotelSubtitle = SplitText.create(
        "#hero #heading-text span.h2",
        {
          type: "words, chars",
          charsClass: "char",
        }
      );

      const SplitH2 = SplitText.create(
        "#hero #bottom-content-text-wrapper h2",
        {
          type: "lines",
          linesClass: "line",
          mask: "lines",
        }
      );

      const SplitBody = SplitText.create(
        "#hero #bottom-content-text-wrapper p",
        {
          type: "lines",
          linesClass: "line",
          mask: "lines",
        }
      );

      const stars = gsap.utils.toArray("#hero-stars-container .star");

      tl.from(splitHotelTitle.chars, {
        yPercent: 100,
        duration: 1.25,
        ease: "expo.out",
        stagger: 0.025,
      })
        .fromTo(
          stars,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            stagger: {
              amount: 0.5,
              from: "center",
            },
          },
          "<"
        )
        .from(
          splitHotelSubtitle.chars,
          {
            yPercent: 100,
            duration: 1.25,
            ease: "expo.out",
            stagger: 0.025,
          },
          "<0.3"
        )
        .fromTo(SplitH2.lines, lineAnimation.start, lineAnimation.end, "<")
        .fromTo(SplitBody.lines, lineAnimation.start, lineAnimation.end, "<")
        .fromTo(
          "#hero #booking-element",
          {
            clipPath: "inset(0 100% 0 0)",
          },
          {
            clipPath: "inset(0 0% 0 0)",
          },
          "<"
        )
        .to("#hero #award-badge", { x: 0 }, "<1")
        .to("#hero header", { y: 0 }, "<");
    },
    { dependencies: [startHeroAnimation] }
  );
};

const usePreloaderAnimation = ({
  setStartHeroAnimation,
}: {
  setStartHeroAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useGSAP(() => {
    const starsContainer = document.getElementById("preloader-stars-container");
    const preloaderElement = document.getElementById("preloader");
    if (!starsContainer || !preloaderElement) return;
    const stars = gsap.utils.toArray(starsContainer.children);

    const splitH1 = SplitText.create("h1.second-text .split-target", {
      type: "chars",
      charsClass: "char",
    });

    const splitH2 = SplitText.create("h2.second-text", {
      type: "lines",
      linesClass: "line",
      mask: "lines",
    });

    const splitFirstText = SplitText.create("h2.first-text", {
      type: "lines",
      linesClass: "line",
      mask: "lines",
    });

    const tl = gsap.timeline({
      defaults: timelineDefaults,
      onStart: () => {
        document?.getElementById("preloader")?.classList.remove("hidden");
      },
      onComplete: () => {
        setStartHeroAnimation(true);
      },
    });

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // 1. "Welcome to..." entrance
    tl.fromTo(splitFirstText.lines, lineAnimation.start, lineAnimation.end);

    // 2. "Welcome to..." exit
    tl.to(splitFirstText.lines, lineAnimation.exit, "+=0.1");

    // 3. "Solara" text entrance
    tl.fromTo(
      splitH1.chars,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
      },
      "<0.2"
    );

    // 4. "Grand & Aqua" text entrance
    tl.fromTo(splitH2.lines, lineAnimation.start, lineAnimation.end, "<");

    // 5. Stars fly in (overlaps slightly with exit)
    tl.fromTo(
      stars,
      { z: 800, y: 150, autoAlpha: 0 },
      {
        z: 0,
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 2,
        force3D: true,
      },
      "<"
    );

    // Stars go above
    /*     tl.fromTo(
      stars,
      { z: 1600, y: 150, opacity: 0 },
      {
        z: 0,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
      },
      "-=1"
    ); */

    // 6. Image entrance - match the stars container' width
    tl.to(
      "#image-wrapper",
      {
        width: isMobile ? "6.75rem" : "10.5rem",
      },
      "-=0.3"
    );
    tl.to(
      "#growing-image",
      {
        width: "100%",
      },
      "<"
    )
      // Move text apart to create gap
      .to(
        ".split-target:first-child",
        {
          x: "-0.05em",
        },
        "<"
      )
      .to(
        ".split-target:last-child",
        {
          x: "0.025em",
        },
        "<"
      );

    // 7. Expand image to full screen (like OSMO Willem)
    tl.to(
      "#growing-image",
      {
        width: "100vw",
        height: "100svh",
        duration: 2,
        ease: "expo.out",
      },
      "+=0.5"
    ).to(
      "#image-wrapper",
      {
        width: "100vw",
        duration: 2,
      },
      "<"
    );
  });
};
