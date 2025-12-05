import Link from "next/link";
import CtaButton from "./ui/CtaButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full pt-[150px] sm:pt-[200px] h-svh flex flex-col items-center justify-between py-5 sm:pb-10"
    >
      <div className="relative grid grid-cols-12 grid-rows-4 gap-2 sm:gap-6 z-10">
        <h1 className="sr-only">Web Design & Development Partner</h1>

        <div
          className="flex items-center gap-6 sm:gap-10 lg:gap-20"
          aria-hidden
        >
          <span className="h0">Web</span>
          <span className="h0">Design</span>
          <span className="h0">&</span>
        </div>

        <div
          className="relative h0 row-start-2 col-start-1 sm:col-start-2 lg:col-start-3 z-10"
          aria-hidden
        >
          Development
        </div>

        <div
          className="w-full row-start-3 col-span-full sm:col-start-6 flex"
          aria-hidden
        >
          <span className="flex-1" aria-hidden />
          <span className="h0" aria-hidden>
            Partner
          </span>
        </div>
      </div>

      {/* Image & Text Container */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 -translate-y-full flex gap-10 sm:gap-20">
          {/* Image */}
          <div className="relative bg-[#D9D9D9] w-1/2 aspect-[1/1.3] sm:w-[304px] sm:h-[388px]">
            <Image
              src="/images/pp.webp"
              alt="Personal image"
              priority
              fill
              className="object-center object-cover"
            />

            <div className="absolute inset-0 z-10 bg-radial from-transparent via-transparent to-background" />
          </div>

          <p className="flex items-end">
            I craft unforgettable, <br /> performance-driven web experiences.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-between gap-4">
        <Link href="mailto:hello@emregnd.com">hello@emregnd.com</Link>
        <CtaButton
          text="Inquiries"
          type="small"
          href="https://cal.com/emregnd/inquiry"
        />
      </div>
    </section>
  );
}
