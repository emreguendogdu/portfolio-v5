import AnimatedText from "./ui/AnimatedText";
import CtaButton from "./ui/CtaButton";
import Image from "next/image";

const animStart = 0.2,
  animStagger = 0.1;

export default function Hero() {
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
          <AnimatedText animateOnScroll={false} delay={animStart}>
            <span className="h0">Web</span>
          </AnimatedText>
          <AnimatedText animateOnScroll={false} delay={animStart + animStagger}>
            <span className="h0">Design</span>
          </AnimatedText>
          <AnimatedText
            animateOnScroll={false}
            delay={animStart + animStagger * 2}
          >
            <span className="h0">&</span>
          </AnimatedText>
        </div>

        <div
          className="relative h0 row-start-2 col-start-1 col-span-full sm:col-span-10 sm:col-start-3 z-10"
          aria-hidden
        >
          <AnimatedText
            animateOnScroll={false}
            delay={animStart + animStagger * 3}
          >
            <span>Development</span>
          </AnimatedText>
        </div>

        <div
          className="w-full row-start-3 sm:col-start-7 col-span-9"
          aria-hidden
        >
          <AnimatedText
            animateOnScroll={false}
            delay={animStart + animStagger * 4}
          >
            <span className="h0" aria-hidden>
              Partner
            </span>
          </AnimatedText>
        </div>
      </div>

      {/* Image & Text Container */}
      <div className="relative w-full">
        <div className="absolute left-0 right-0 top-0 -translate-y-[70%] sm:-translate-y-full flex flex-col sm:flex-row gap-6 md:gap-16 lg:gap-48 xl:gap-80">
          {/* Image */}
          <div className="relative bg-[#D9D9D9] w-2/3 aspect-[1/1.3] max-w-[145px] sm:max-w-none sm:w-[304px] sm:h-[388px]">
            <Image
              src="/images/pp.webp"
              alt="Personal image"
              priority
              fill
              className="object-center object-cover"
            />

            <div className="absolute inset-0 z-10 bg-radial from-transparent via-transparent to-background" />
          </div>

          <div className="flex items-end justify-end">
            <AnimatedText
              animateOnScroll={false}
              delay={animStart + animStagger * 5}
            >
              <p className="xl:ml-10 max-w-auto sm:max-w-[300px] xl:max-w-[300px]">
                Building web experiences where <br /> high-end aesthetics meet
                raw, <br />
                conversion-focused engineering.
              </p>
            </AnimatedText>
          </div>
        </div>
      </div>

      <div className="w-full flex items-end justify-between gap-4">
        <AnimatedText
          animateOnScroll={false}
          delay={animStart + animStagger * 6}
        >
          <p>Scroll</p>
        </AnimatedText>
        <div className="flex flex-col gap-2.5 sm:gap-5">
          <AnimatedText
            animateOnScroll={false}
            delay={animStart + animStagger * 6}
          >
            <p className="text-right">
              Booking For — <br /> January 2026
            </p>
          </AnimatedText>
          <AnimatedText
            animateOnScroll={false}
            delay={animStart + (animStagger / 2) * 6}
          >
            <CtaButton
              text="Schedule a Call"
              type="small"
              href="https://cal.com/emregnd/inquiry"
            />
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
