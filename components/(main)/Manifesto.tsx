import AnimatedText from './ui/AnimatedText';

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="relative w-full grid grid-cols-12 gap-y-10 sm:gap-y-20 sm:gap-x-5"
    >
      <div className="relative flex flex-row justify-between gap-sm items-end w-full col-span-full flex-wrap">
        <div className="w-full sm:flex-1 grid grid-cols-12 grid-rows-2 gap-y-2 sm:gap-y-5">
          <h2 id="manifesto-heading" className="h0 col-span-full">
            <AnimatedText>
              <span>Beauty without</span>
            </AnimatedText>
          </h2>
          <h2 className="h0 row-start-2 col-start-3 col-span-10">
            <AnimatedText>
              <span>traction is decoration.</span>
            </AnimatedText>
          </h2>
        </div>

        <div className="absolute right-0 top-0">
          <p className="text-muted text-xs uppercase tracking-widest">
            [01 — What I believe]
          </p>
        </div>
      </div>

      <div className="col-span-full sm:col-start-8 sm:col-span-5">
        <AnimatedText>
          <p className="text-muted">
            I build front-ends for brands that have to ship and sell —
            considered enough to last, fast enough to convert, distinct enough
            to remember. No templates. No filler. No round corners for the sake
            of it.
          </p>
        </AnimatedText>
      </div>
    </section>
  );
}
