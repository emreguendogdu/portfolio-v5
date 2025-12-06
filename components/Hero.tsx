import Link from "next/link";
import CtaButton from "./ui/CtaButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full pt-[100px] sm:pt-[140px] asm:pt-[150px] min-h-svh flex flex-col items-center justify-between gap-10 py-4 pb-6 sm:pb-10 overflow-hidden"
    >
      <div className="relative grid grid-cols-12 grid-rows-4 gap-2 sm:gap-6 z-10">
        <h1 className="sr-only">Web Design & Development Partner</h1>

        <div
          className="flex w-full col-span-full items-center justify-between sm:justify-start gap-2 lg:gap-10 xl:gap-20"
          aria-hidden
        >
          <span className="h0">Web</span>
          <span className="h0">Design</span>
          <span className="h0">&</span>
        </div>

        <div
          className="relative h0 row-start-2 col-start-1 xl:col-start-3 z-10"
          aria-hidden
        >
          Development
        </div>

        <div
          className="w-full row-start-3 col-span-full flex justify-end"
          aria-hidden
        >
          <span className="ml-auto mr-12 h0" aria-hidden>
            Partner
          </span>
        </div>
      </div>

      {/* Image & Text Container */}
      <div className="relative w-full">
        <div className="absolute left-0 right-0 top-0 -translate-y-[80%] sm:-translate-y-full flex gap-6 md:gap-16 lg:gap-48 xl:gap-80">
          {/* Image */}
          <div className="relative bg-[#D9D9D9] w-2/3 aspect-[1/1.3] max-w-[240px] sm:max-w-none sm:w-[304px] sm:h-[388px]">
            <Image
              src="/images/pp.webp"
              alt="Personal image"
              priority
              fill
              className="object-center object-cover"
            />

            <div className="absolute inset-0 z-10 bg-radial from-transparent via-transparent to-background" />
          </div>

          <p className="flex items-end whitespace-nowrap">
            I craft unforgettable, <br /> performance-driven <br /> web
            experiences.
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
