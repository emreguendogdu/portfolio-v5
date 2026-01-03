"use client";

import ArrowOutwardRounded from "./components/ui/icons/ArrowOutwardRounded";
import Logo from "./components/ui/icons/Logo";
import Star from "./components/ui/icons/Star";
import { Fragment } from "react";
import BackgroundImage from "./components/images/hero-bg.png";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function page() {
  return (
    <>
      <Preloader />
      <section id="hero" className="relative h-svh text-foreground py-5 px-5">
        <header className="absolute top-0 left-0 right-0 w-full flex justify-between items-center px-5 py-5">
          <Logo />
          <ul className="relative h-fit flex items-center gap-5 [&>li]:uppercase">
            <li>Rooms & Suites</li>
            <li>Aqua</li>
            <li>Dining</li>
            {/* Divider */}
            <div className="self-stretch w-px bg-foreground/40" />
            <li>Experiences</li>
            <li>Offers</li>
          </ul>
        </header>

        {/* Main Content */}
        <div className="relative flex flex-col justify-between w-full">
          {/* Heading */}
          <div className="relative pt-[13.6svh] flex flex-col items-center gap-2.5 w-fit">
            {/* Stars */}
            <div className="flex items-center gap-2.5 text-foreground">
              {Array.from({ length: 5 }, (_, i) => (
                <Fragment key={`st__${i}`}>
                  {i === 2 ? (
                    <Star className="w-8 h-8" />
                  ) : (
                    <Star className="w-6 h-6" />
                  )}
                </Fragment>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1>Solara</h1>
              <h2>Grand & Aqua</h2>
            </div>
          </div>

          {/* Badge Container */}
          <div className="relative translate-x-5 -translate-y-1/3 flex w-full justify-end">
            {/* Badge */}
            <div className="bg-foreground text-background p-5 flex flex-col items-center gap-5 w-fit h-fit">
              <div className="font-bold">h.</div>
              <span className="capitalize [writing-mode:vertical-rl] rotate-180">
                Hotel Of The Year
              </span>
            </div>
          </div>
        </div>
        {/* Bottom content */}
        <div className="absolute px-5 py-5 bottom-0 left-0 right-0 w-full flex items-end justify-between gap-8">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <h2>
              A stay shaped by light, <br />
              space, and silence.
            </h2>

            <p>
              Luxury retreats on the Turkish Riviera, <br /> designed for
              presence—not excess.
            </p>
          </div>

          <BookingElement />
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
    <div className="relative bg-foreground text-background p-2.5 flex items-center max-h-[70px] rounded-full w-fit gap-5">
      <div className="booking-element-item pl-5">
        <span>Rooms</span>
        <span>Select room(s)</span>
      </div>

      <div className="booking-element-item">
        <span>Check In / Check Out</span>
        <span>Select the dates</span>
      </div>

      <div className="booking-element-item border-r-0 pr-10">
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
  useGSAP(() => {
    if (!document) return;

    const starsContainer = document.getElementById("stars-container");
    if (!starsContainer) return;
    const stars = gsap.utils.toArray(starsContainer.children);

    stars.forEach((star: any, index) => {
      star.classList.add(`star-${index}`);
    });

    gsap.fromTo(
      stars,
      { z: 1600, y: 150 },
      {
        z: 0,
        y: 0,
        stagger: 0.1,
        duration: 2,
        ease: "power2.out",
        delay: 1,
      }
    );
  });

  useGSAP(() => {
    const SplitH1 = SplitText.create("h1.second-text", {
      type: "chars",
      mask: "chars",
      charsClass: "char",
    });

    const SplitH2 = SplitText.create("h2.second-text", {
      type: "lines",
      mask: "lines",
      linesClass: "line",
    });

    const SplitFirstText = SplitText.create("h2.first-text", {
      type: "lines",
      mask: "lines",
      linesClass: "line",
    });

    gsap.fromTo(
      SplitFirstText.lines,
      { opacity: 0, rotate: 15, y: 100 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.to(SplitFirstText.lines, {
      opacity: 0,
      rotate: 15,
      y: -100,
      duration: 2,
      ease: "power2.out",
      delay: 1,
    });

    gsap.fromTo(
      SplitH1.chars,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        delay: 2,
      }
    );

    gsap.fromTo(
      SplitH2.lines,
      { opacity: 0, rotate: 15, y: 100 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        delay: 2.5,
      }
    );
  });
  return (
    <section
      id="preloader"
      className="fixed inset-0 z-999 h-svh flex flex-col gap-2.5 items-center justify-center bg-background text-foreground"
    >
      <div id="stars-container" className="flex items-center gap-2.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Fragment key={`st__${i}`}>
            {i === 2 ? (
              <Star className="star relative w-8 h-8 will-change-transform transform-3d" />
            ) : (
              <Star className="star relative w-6 h-6 will-change-transform transform-3d" />
            )}
          </Fragment>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <h2 className="first-text">Welcome to...</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-2.5">
        <h1 className="second-text">Solara</h1>
        <h2 className="second-text">Grand & Aqua Hotel</h2>
      </div>
    </section>
  );
};
