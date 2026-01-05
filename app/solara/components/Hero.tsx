"use client";

import Image from "next/image";
import { Fragment } from "react";
import Logo from "./ui/icons/Logo";
import Star from "./ui/icons/Star";
import ArrowOutwardRounded from "./ui/icons/ArrowOutwardRounded";
import BackgroundImage from "./images/hero-bg.png";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
import { useAnimationContext } from "../context/AnimationContext";

export const Hero = () => {
  const { startHeroAnimation } = useAnimationContext();

  useHeroAnimation({ startHeroAnimation });

  return (
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
          <div className="self-stretch w-px bg-foreground/40" />
          <li>Experiences</li>
          <li>Offers</li>
        </ul>

        <button className="uppercase sm:hidden">Menu</button>
      </header>

      <div className="relative flex flex-col justify-between w-full">
        <div className="relative pt-[20svh] sm:pt-[13.6svh] flex flex-col items-center gap-2.5 w-fit">
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

        <div
          id="award-badge-container"
          className="relative translate-x-5 -translate-y-1/3 flex w-full justify-end select-none pointer-events-none"
        >
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
      <div className="absolute px-5 py-5 bottom-0 left-0 right-0 w-full flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-10">
        <div
          id="bottom-content-text-wrapper"
          className="flex flex-col gap-2.5 sm:gap-5"
        >
          <h2 className="whitespace-nowrap">
            A stay shaped by light, <br />
            space, and silence.
          </h2>

          <p className="whitespace-nowrap">
            Luxury retreats on the Turkish Riviera, <br /> designed for
            presence—not excess.
          </p>
        </div>

        <div className="relative w-full justify-center md:justify-end hidden md:flex">
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
  );
};

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
