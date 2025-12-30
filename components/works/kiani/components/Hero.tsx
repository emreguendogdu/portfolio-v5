"use client";

import Image from "next/image";
import HeroImage from "@/public/work/kiani/images/hero-img.png";
import CardImage1 from "@/public/work/kiani/images/tst-1.png";
import CardImage2 from "@/public/work/kiani/images/tst-2.png";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import Header from "./Header";
import CardImage from "./ui/CardImage";

gsap.registerPlugin(SplitText);

export default function Hero() {
  useGSAP(() => {
    const splitTitle = SplitText.create("#kiani-home #title", {
      type: "chars",
    });
    const splitSubtitle = SplitText.create("#kiani-home #subtitle", {
      type: "chars",
    });
    const splitH3 = SplitText.create("#kiani-home h3", {
      type: "lines",
      mask: "lines",
    });
    const splitParagraph = SplitText.create("#kiani-home p", {
      type: "lines",
      mask: "lines",
    });

    gsap.set(".card-image-wrapper", { opacity: 0, top: 200 });
    gsap.set(splitTitle.chars, { y: 400 });
    gsap.set(splitSubtitle.chars, { y: -400 });
    gsap.set(splitH3.lines, { y: 200, rotate: "8deg" });
    gsap.set(splitParagraph.lines, { y: 200, rotate: "-8deg" });

    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "pow2.inOut" },
      onComplete: () => {
        gsap.to("#preloader", { display: "none", duration: 0.1 });
      },
    });

    tl.to("#preloader #background-wrapper #background", {
      yPercent: -100,
      delay: 0.5,
    })
      .to("#kiani-home #image-wrapper", { y: 0 }, "<")
      .to(
        splitTitle.chars,
        {
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        },
        "<+0.4"
      )
      .to(
        splitSubtitle.chars,
        {
          y: 0,
          duration: 0.8,
          stagger: 0.025,
        },
        "<"
      )
      .to(
        ".card-image-wrapper",
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
        },
        "<+1"
      )
      .to(
        splitH3.lines,
        {
          y: 0,
          rotate: 0,
          stagger: 0.1,
        },
        "<-0.2"
      )
      .to(
        splitParagraph.lines,
        {
          y: 0,
          rotate: 0,
          stagger: 0.1,
        },
        "<"
      );
  });

  return (
    <section
      id="kiani-home"
      className="relative min-h-svh w-full bg-background px-5 sm:px-5 pb-5 flex flex-col overflow-x-hidden"
    >
      <Header />

      <div className="h-[10svh] shrink-0" aria-hidden />

      <div className="relative flex-1 w-full flex flex-col gap-[5svh] min-h-0">
        {/* Title */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-5 shrink-0">
          {/* Hotel Name & Images Wrapper */}
          <div className="relative items-center justify-center">
            {/* Image 1 */}
            <CardImage
              src={CardImage1}
              className="absolute left-0 sm:left-6 2xl:-left-6 top-0 -translate-y-[45%] sm:-translate-y-[55%] rotate-[8deg]"
              /* TODO: Add alt text */
              alt="."
            />
            {/* Title */}
            <h2 id="title" className="h0">
              Kiani
            </h2>

            {/* Image 2 */}
            <CardImage
              src={CardImage2}
              className="absolute -right-12 sm:right-2 2xl:right-12 -bottom-8 sm:bottom-0 translate-y-[35%] 2xl:translate-y-[20%] -rotate-[8deg]"
              /* TODO: Add alt text */
              alt="."
            />
          </div>
          <span id="subtitle" className="hotel-text">
            Luxury Hotel & Spa
          </span>
        </div>

        {/* Main */}
        <div className="relative w-full flex-1 flex flex-col gap-5 min-h-0">
          {/* Texts */}
          <div className="relative flex flex-col md:flex-row items-end justify-between gap-2.5 sm:gap-10 px-5 sm:px-20 z-20">
            <h3 className="w-full">
              For <br className="hidden sm:inline" />
              Timeless <br className="hidden sm:inline" />
              Memories
            </h3>

            <div className="w-full flex h-full items-end justify-end">
              <p className="text-right w-full">
                Wake up in the heart of Canggu. <br />A place designed for rest,
                recovery,
                <br />
                and genuine connection.
              </p>
            </div>
          </div>

          {/* Image & Texts */}
          <div className="relative w-full flex-1 flex items-center justify-center min-h-0">
            {/* Left Text */}
            <p className="uppercase absolute left-0 -translate-x-1/2 opacity-50">
              <span className="inline-block whitespace-nowrap rotate-90">
                Canggu Area
              </span>
            </p>
            {/* Image Container */}
            <div
              className="relative w-full h-full flex-1 px-5 sm:px-20 min-h-0"
              id="image-container"
            >
              <div
                className="absolute inset-0 flex items-center justify-center z-30"
                id="text-container"
              >
                <span
                  id="text-1"
                  className="text-[6rem] -tracking-[0.06em] leading-[1.05] text-white absolute translate-y-1/2 overflow-hidden opacity-0"
                >
                  Canggu, Bali
                </span>

                <span
                  id="text-2"
                  className="text-[6rem] -tracking-[0.06em] leading-[1.05] text-white absolute translate-y-1/2 overflow-hidden opacity-0"
                >
                  8.6500° S, 115.1300° E
                </span>
              </div>
              <div
                className="relative w-full h-[80svh] translate-y-full will-change-transform"
                id="image-wrapper"
              >
                {/* Image */}
                <Image
                  className="w-full h-full object-cover object-[20%] 2xl:object-top"
                  style={{ objectPosition: "5%" }}
                  src={HeroImage}
                  placeholder="blur"
                  loading="eager"
                  priority
                  alt="Aerial view of Kiani luxury resort featuring modern concrete buildings with flat roofs, interconnected turquoise pools winding through the property, lush tropical jungle on one side, and crystal-clear turquoise ocean waters on the other, showcasing the seamless integration of architecture with nature"
                />
              </div>
            </div>
            {/* Right Text */}
            <p className="uppercase absolute right-0 translate-x-1/2 opacity-50">
              <span className="inline-block whitespace-nowrap -rotate-90">
                Best Rated
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
