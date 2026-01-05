import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

const timelineDefaults = { duration: 1, ease: "power2.out" };
const lineAnimation = {
  start: { opacity: 0, rotate: 10, y: 100 },
  end: { opacity: 1, rotate: 0, y: 0, stagger: 0.2 },
};

gsap.registerPlugin(SplitText);

export const useHeroAnimation = ({
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
