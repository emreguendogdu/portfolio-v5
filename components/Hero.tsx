import CtaButton from "./ui/CtaButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full pt-[150px] sm:pt-[200px] h-svh flex flex-col items-center justify-between pb-10"
    >
      <div id="text-wrapper" className="flex flex-col gap-2 sm:gap-8">
        <div className="flex items-center gap-4 sm:gap-8">
          <h2 className="h0">Web</h2>
          <h2 className="h0">Design</h2>
          <h2 className="h0">&</h2>
        </div>
        <div className="w-full flex items-center gap-8">
          <div className="flex-1" aria-hidden />
          <h2 className="h0">Development</h2>
        </div>

        <div className="w-full flex items-center gap-8">
          <div className="flex-1" aria-hidden />
          <h2 className="h0">Partner</h2>
          <div className="flex-1" aria-hidden />
        </div>
      </div>
      {/* Image */}
      <div className="bg-[#D9D9D9] w-[50%] h-auto aspect-[1/1.3] sm:w-[304px] sm:h-[388px] absolute top-[60%] left-0 -translate-y-1/2 -z-10"></div>

      <p>
        Passionate about crafting <br /> unforgettable experiences.
      </p>

      <div className="w-full flex items-center justify-between gap-4">
        <p>hello@emregnd.com</p>
        <CtaButton
          text="Inquiries"
          type="small"
          href="https://cal.com/emregnd/inquiry"
        />
      </div>
    </section>
  );
}
