"use client";

import gsap from "gsap";

import Image from "next/image";
import HeroImage from "@/public/work/kiani/images/hero-img.png";
import CardImage1 from "@/public/work/kiani/images/tst-1.png";
import CardImage2 from "@/public/work/kiani/images/tst-2.png";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 19 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.8206 2.46094L11.8909 2.53223L14.1506 0.272461V4.46973C14.1506 4.8411 14.0031 5.19736 13.7405 5.45996C13.4779 5.72245 13.1215 5.87012 12.7502 5.87012H6.24927C5.87799 5.87005 5.52157 5.7225 5.25903 5.45996C4.99652 5.19738 4.84888 4.84103 4.84888 4.46973V0.270508L7.03931 2.46094L7.10962 2.53223L7.17993 2.46094L9.49927 0.140625L11.8206 2.46094ZM9.42896 1.33789L7.10962 3.65723L5.64966 2.19727V4.46973C5.64966 4.62888 5.7129 4.78199 5.82544 4.89453C5.93788 5.00679 6.09037 5.07025 6.24927 5.07031H12.7502C12.9093 5.07031 13.0625 5.00696 13.175 4.89453C13.2876 4.78199 13.3508 4.62888 13.3508 4.46973V2.19824L11.8909 3.6582L9.50024 1.26758L9.42896 1.33789Z"
        stroke="black"
        strokeWidth="0.2"
      />
      <path d="M4.74927 6.97H14.2509" stroke="black" strokeWidth="0.25" />
      <mask id="path-3-inside-1_9_390" fill="white">
        <path d="M15.58 10.186C15.58 12.97 12.916 14.602 10.276 15.85L15.82 24.97H15.1L9.724 16.09C8.26 16.81 6.868 17.506 5.932 18.466V23.65C5.932 24.13 6.052 24.586 6.292 24.97H3.748C3.988 24.586 4.108 24.13 4.108 23.65V11.506C4.108 11.05 3.988 10.594 3.748 10.186H6.292C6.052 10.594 5.932 11.05 5.932 11.506V17.626C7.036 16.714 8.476 16.018 9.916 15.346C12.508 14.098 13.756 12.634 13.756 10.186H15.58Z" />
      </mask>
      <path
        d="M15.58 10.186H16.08V9.686H15.58V10.186ZM10.276 15.85L10.0623 15.398L9.56033 15.6353L9.84875 16.1097L10.276 15.85ZM15.82 24.97V25.47H16.7091L16.2473 24.7103L15.82 24.97ZM15.1 24.97L14.6723 25.2289L14.8182 25.47H15.1V24.97ZM9.724 16.09L10.1517 15.8311L9.91446 15.4391L9.50334 15.6413L9.724 16.09ZM5.932 18.466L5.574 18.1169L5.432 18.2626V18.466H5.932ZM6.292 24.97V25.47H7.19412L6.716 24.705L6.292 24.97ZM3.748 24.97L3.324 24.705L2.84588 25.47H3.748V24.97ZM3.748 10.186V9.686H2.87379L3.31703 10.4395L3.748 10.186ZM6.292 10.186L6.72297 10.4395L7.16621 9.686H6.292V10.186ZM5.932 17.626H5.432V18.6876L6.25044 18.0115L5.932 17.626ZM9.916 15.346L10.1275 15.7991L10.1329 15.7965L9.916 15.346ZM13.756 10.186V9.686H13.256V10.186H13.756ZM15.58 10.186H15.08C15.08 11.396 14.5083 12.3755 13.5803 13.2252C12.6426 14.0839 11.374 14.7779 10.0623 15.398L10.276 15.85L10.4897 16.302C11.818 15.6741 13.2014 14.9281 14.2557 13.9628C15.3197 12.9885 16.08 11.76 16.08 10.186H15.58ZM10.276 15.85L9.84875 16.1097L15.3927 25.2297L15.82 24.97L16.2473 24.7103L10.7033 15.5903L10.276 15.85ZM15.82 24.97V24.47H15.1V24.97V25.47H15.82V24.97ZM15.1 24.97L15.5277 24.7111L10.1517 15.8311L9.724 16.09L9.29628 16.3489L14.6723 25.2289L15.1 24.97ZM9.724 16.09L9.50334 15.6413C8.05946 16.3514 6.58169 17.0834 5.574 18.1169L5.932 18.466L6.29 18.815C7.15431 17.9286 8.46054 17.2686 9.94466 16.5387L9.724 16.09ZM5.932 18.466H5.432V23.65H5.932H6.432V18.466H5.932ZM5.932 23.65H5.432C5.432 24.2128 5.57285 24.7628 5.868 25.235L6.292 24.97L6.716 24.705C6.53115 24.4092 6.432 24.0472 6.432 23.65H5.932ZM6.292 24.97V24.47H3.748V24.97V25.47H6.292V24.97ZM3.748 24.97L4.172 25.235C4.46715 24.7628 4.608 24.2128 4.608 23.65H4.108H3.608C3.608 24.0472 3.50885 24.4092 3.324 24.705L3.748 24.97ZM4.108 23.65H4.608V11.506H4.108H3.608V23.65H4.108ZM4.108 11.506H4.608C4.608 10.9622 4.46483 10.4185 4.17897 9.93249L3.748 10.186L3.31703 10.4395C3.51117 10.7695 3.608 11.1378 3.608 11.506H4.108ZM3.748 10.186V10.686H6.292V10.186V9.686H3.748V10.186ZM6.292 10.186L5.86103 9.93249C5.57517 10.4185 5.432 10.9622 5.432 11.506H5.932H6.432C6.432 11.1378 6.52883 10.7695 6.72297 10.4395L6.292 10.186ZM5.932 11.506H5.432V17.626H5.932H6.432V11.506H5.932ZM5.932 17.626L6.25044 18.0115C7.29756 17.1465 8.67918 16.4749 10.1274 15.7991L9.916 15.346L9.70456 14.8929C8.27282 15.5611 6.77444 16.2815 5.61356 17.2405L5.932 17.626ZM9.916 15.346L10.1329 15.7965C11.4635 15.1558 12.5014 14.4359 13.2045 13.5206C13.9171 12.5929 14.256 11.5035 14.256 10.186H13.756H13.256C13.256 11.3165 12.9709 12.1831 12.4115 12.9114C11.8426 13.6521 10.9605 14.2882 9.69909 14.8955L9.916 15.346ZM13.756 10.186V10.686H15.58V10.186V9.686H13.756V10.186Z"
        fill="black"
        mask="url(#path-3-inside-1_9_390)"
      />
    </svg>
  );
};

export default function KianiHomePage() {
  useGSAP(() => {
    const splitTitle = SplitText.create("#kiani-home #title", {
      type: "chars",
    });
    const splitSubtitle = SplitText.create("#kiani-home #subtitle", {
      type: "chars",
    });
    const splitH3 = SplitText.create("#kiani-home #h3", {
      type: "lines",
      mask: "lines",
    });
    const splitParagraph = SplitText.create("#kiani-home #paragraph", {
      type: "lines",
      mask: "lines",
    });

    gsap.set(".card-image-wrapper", { opacity: 0 });
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
      className="relative h-svh w-full bg-[#F1EFEC] px-5 sm:px-5 pb-5 flex flex-col overflow-hidden"
    >
      <Preloader />
      <header className="relative w-full flex items-center justify-between h-[72px] border-b border-b-black/20 shrink-0 py-5">
        <Logo className="h-10" />
        <ul className="hidden lg:flex items-center gap-5 sm:gap-10 [&>li]:uppercase [&>li]:opacity-50 [&>li]:-tracking-[0.02em] [&>li]:whitespace-nowrap h-[72px]">
          <li>Rooms & Suites</li>
          <li>SPA & Wellness</li>
          {/* Border */}
          <div className="w-px h-[24px] bg-black opacity-20" aria-hidden />
          <li>Dining</li>
          <li>Experiences</li>
          <li>Offers</li>
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-5 sm:gap-10">
          <button className="cursor-pointer flex gap-2.5 items-center lg:hidden">
            <div className="flex flex-col gap-[5px]" aria-hidden>
              <div className="w-4 h-px bg-black opacity-50" aria-hidden />
              <div className="w-4 h-px bg-black opacity-50" aria-hidden />
            </div>
            <span className="-tracking-[0.02em] opacity-50 uppercase">
              Menu
            </span>
          </button>
          <button className="bg-black px-5 py-[10px] flex items-center gap-5 rounded-full cursor-pointer">
            <span className="uppercase text-white whitespace-nowrap">
              Book Now
            </span>

            <div
              className="w-auto h-2 aspect-square rounded-full outline outline-white"
              aria-hidden
            />
          </button>
        </div>
      </header>

      <div className="h-[10svh] shrink-0" aria-hidden />

      <div className="relative flex-1 w-full flex flex-col gap-[5svh] min-h-0">
        {/* Title */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-5 shrink-0">
          {/* Hotel Name & Images Wrapper */}
          <div className="relative items-center justify-center">
            {/* Image 1 */}
            <div className="card-image-wrapper absolute left-0 sm:left-6 2xl:-left-6 top-0 -translate-y-[45%] sm:-translate-y-[55%] rotate-[8deg] w-auto aspect-square h-[120px] 2xl:h-[180px] bg-white flex p-[5px] z-10">
              {/* Image */}
              <Image
                className="w-full h-full object-cover object-center"
                src={CardImage1}
                alt="."
              />
            </div>
            {/* Title, Outline */}
            <h2
              id="title"
              className="relative font-display uppercase text-[6rem] tracking-[0.3em] sm:text-[9rem] sm:tracking-[0.5em] lg:text-[11rem] 2xl:text-[20rem] leading-[0.7] z-20 overflow-hidden"
            >
              Kiani
            </h2>

            {/* Title, Fill */}
            {/*   <h2
              className="absolute top-0 font-display  uppercase text-[6rem] tracking-[0.3em] sm:text-[9rem] sm:tracking-[0.5em] lg:text-[11rem] 2xl:text-[20rem] leading-[0.7] z-0"
              aria-hidden
            >
              Kiani
            </h2> */}
            {/* Image 2 */}
            <div className="card-image-wrapper absolute -right-12 sm:right-2 2xl:right-12 -bottom-8 sm:bottom-0 translate-y-[35%] 2xl:translate-y-[20%] -rotate-[8deg] w-auto aspect-square h-[120px] 2xl:h-[180px] bg-white flex p-[5px] z-10">
              {/* Image */}
              <Image
                className="w-full h-full object-cover object-center"
                src={CardImage2}
                alt="."
              />
            </div>
          </div>
          <span
            id="subtitle"
            className="relative z-20 leading-[0.8] uppercase tracking-[0.6em] sm:tracking-[0.8em] font-display whitespace-nowrap 2xl:text-[1.5rem] overflow-hidden"
          >
            Luxury Hotel & Spa
          </span>
        </div>

        {/* Main */}
        <div className="relative w-full flex-1 flex flex-col gap-5 min-h-0">
          {/* Texts */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-2.5 sm:gap-10 px-5 sm:px-20 shrink-0 z-20">
            <h3
              className="text-[2rem] sm:text-[3rem] -tracking-[0.06em] leading-[1.05] normal-case w-full"
              id="h3"
            >
              For <br className="hidden sm:inline" />
              Timeless <br className="hidden sm:inline" />
              Memories
            </h3>

            <div className="w-full flex h-full items-end justify-end">
              <p
                className="normal-case text-right leading-[1.4] -tracking-[0.02em] w-full"
                id="paragraph"
              >
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
            <p className="uppercase leading-[1.4] -tracking-[0.02em] absolute left-0  -translate-x-1/2 opacity-50">
              <span className="inline-block whitespace-nowrap rotate-90">
                Canggu Area
              </span>
            </p>
            {/* Image Container */}
            <div className="relative w-full h-full flex-1 px-5 sm:px-20 min-h-0">
              <div
                className="relative w-full h-full translate-y-full will-change-transform"
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
            <p className="uppercase leading-[1.4] -tracking-[0.02em] absolute right-0 translate-x-1/2 opacity-50">
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

const Preloader = () => {
  return (
    <div id="preloader" className="fixed inset-0 z-30">
      <div className="absolute inset-0" id="background-wrapper">
        <div
          className="relative w-full h-full bg-[#1D1D1D]"
          id="background"
        ></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center w-full-h-full z-40">
        {/* <span className="inline-block font-display  uppercase text-[6rem] tracking-[0.3em] sm:text-[9rem] sm:tracking-[0.5em] lg:text-[11rem] 2xl:text-[20rem] leading-[0.7] text-white">
          Kiani
        </span> */}
      </div>
    </div>
  );
};
