"use client";

export default function Preloader() {
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
}
