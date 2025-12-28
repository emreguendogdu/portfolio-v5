import React from "react";
import CTA from "../ui/CTA";

export default function SomeStays() {
  return (
    <section
      id="some-stays"
      className="relative w-full h-[80svh] px-10 py-10 text-white"
    >
      {/* Image Container */}
      <div className="absolute inset-0">
        {/* Overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-black z-10"
          aria-hidden
        />

        {/* Image */}
        <div className="relative w-full h-full">
          <div className="w-full h-full object-cover object-center bg-red-500" />
        </div>
      </div>

      <div className="relative flex flex-col gap-10 items-end z-20">
        <p className="uppercase mb-5">A Sense of Place</p>

        <h2 className="text-[6rem] leading-[0.9] -tracking-[0.06em] text-right">
          Some stays, <br /> stays with you
        </h2>

        <CTA type="white" text="Book Yours" />
      </div>
    </section>
  );
}
