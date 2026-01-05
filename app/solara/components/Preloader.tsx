"use client";

import Image from "next/image";
import { Fragment } from "react";
import Star from "./ui/icons/Star";
import BackgroundImage from "./images/hero-bg.png";
import { usePreloaderAnimation } from "../hooks/usePreloaderAnimation";
import { useAnimationContext } from "../context/AnimationContext";

export const Preloader = () => {
  const { setStartHeroAnimation } = useAnimationContext();

  usePreloaderAnimation({ setStartHeroAnimation });

  return (
    <section
      id="preloader"
      className="fixed inset-0 z-999 h-svh flex flex-col gap-2.5 items-center justify-center bg-foreground text-background overflow-hidden hidden"
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
        <h1 className="second-text flex items-center justify-center overflow-hidden">
          <div
            className="split-target relative z-10 flex justify-end overflow-hidden"
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
            className="split-target relative z-10 flex justify-start overflow-hidden"
            style={{ width: "1.5em" }}
          >
            <span>ara</span>
          </div>
        </h1>

        <h2 className="second-text relative z-10 overflow-hidden">
          Grand & Aqua Hotel
        </h2>
      </div>
    </section>
  );
};
