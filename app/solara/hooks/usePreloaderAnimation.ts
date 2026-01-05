import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import React from "react";

const timelineDefaults = { duration: 1, ease: "power2.out" };
const lineAnimation = {
  start: { opacity: 0, rotate: 10, y: 100 },
  end: { opacity: 1, rotate: 0, y: 0, stagger: 0.2 },
  exit: { opacity: 0, rotate: 10, y: -100, duration: 2, stagger: 0.2 },
};

gsap.registerPlugin(SplitText);

export const usePreloaderAnimation = ({
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

    tl.fromTo(splitFirstText.lines, lineAnimation.start, lineAnimation.end);

    tl.to(splitFirstText.lines, lineAnimation.exit, "+=0.1");

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

    tl.fromTo(splitH2.lines, lineAnimation.start, lineAnimation.end, "<");

    tl.to(
      "#image-wrapper",
      {
        width: isMobile ? "6.75rem" : "10.5rem",
      },
      ">"
    );
    tl.to(
      "#growing-image",
      {
        width: "100%",
      },
      "<"
    )
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
        height: "100svh",
        duration: 2,
        ease: "expo.out",
      },
      "<"
    );
  });
};
