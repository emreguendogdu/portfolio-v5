import Link from "next/link";
import CtaButton from "./ui/CtaButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full pt-[150px] sm:pt-[200px] h-svh flex flex-col items-center justify-between pb-10"
    >
      <div
        id="text-wrapper"
        className="gap-2 sm:gap-8 grid grid-cols-12 grid-rows-3"
      >
        <h1 className="sr-only">Web Design & Development Partner</h1>

        <div className="flex items-center gap-4 sm:gap-8" aria-hidden>
          <span className="h0">Web</span>
          <span className="h0">Design</span>
          <span className="h0">&</span>
        </div>
        <div className="h0 row-start-2 col-start-1 sm:col-start-3" aria-hidden>
          Development
        </div>

        <span
          className="h0 row-start-3 col-start-5 col-end-6 sm:col-start-6"
          aria-hidden
        >
          Partner
        </span>
      </div>
      {/* Image */}
      <div className="bg-[#D9D9D9] w-[50%] h-auto aspect-[1/1.3] sm:w-[304px] sm:h-[388px] absolute top-[60%] left-0 -translate-y-1/2 -z-10">
        <Image
          src="/images/pp.webp"
          alt="Personal image"
          priority
          fill
          className="object-center object-cover"
        />

        <div className="absolute inset-0 z-10 bg-radial from-transparent via-transparent to-background" />
      </div>

      <p>
        I craft unforgettable, <br /> performance-driven web experiences.
      </p>

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
