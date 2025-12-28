import React from "react";
import CTA from "../ui/CTA";
import { cn } from "@/lib/utils";

export default function Philosophy() {
  const editorialListItems = [
    "Designed around people",
    "Nature shapes each stay",
    "Moments over schedules",
    "Attention in each detail",
  ];

  return (
    <section
      id="philosophy"
      className="relative min-h-svh w-full px-10 py-12.5 flex flex-col gap-30"
    >
      {/* Heading */}
      <h2 className="text-[10.5rem] leading-[1.05] -tracking-[0.06em]">
        Philosophy
      </h2>

      {/* TOP: TEXT + IMAGE */}
      <div className="grid grid-cols-[1fr_30vw] gap-x-20 w-full">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-20">
          {/* Paragraphs */}
          <div className="grid grid-cols-12 gap-x-10 gap-y-10 w-full">
            <p className="col-span-6 lg:col-span-4">
              Kiani was created as a <br />
              response to excess.
            </p>

            <p className="col-span-6 lg:col-span-4">
              To the noise of modern travel. <br />
              To luxury performed, not lived.
            </p>

            <p className="col-span-6 lg:col-span-4">
              Nothing competes attention. <br />
              Everything deserves it.
            </p>

            <p className="col-span-6 lg:col-span-4">
              Architectural essence. <br />
              Materials remain honest.
            </p>

            <p className="col-span-6 lg:col-span-4">
              Nature is not framed. <br />
              It is allowed to exist.
            </p>

            <p className="col-span-6 lg:col-span-4">
              Not a destination. <br />A deliberate pause.
            </p>
          </div>

          {/* CTA */}
          <CTA text="Book Your Trip" />
        </div>

        {/* RIGHT COLUMN (IMAGE / VISUAL) */}
        <div className="bg-red-500 min-h-[40vh]" />
      </div>

      {/* BOTTOM: OFFERING + LIST */}
      <div className="grid grid-cols-[1fr_30vw] gap-x-20 w-full">
        {/* LEFT COLUMN */}
        <div className="grid grid-cols-12 gap-x-10 w-full">
          <span className="uppercase font-bold col-start-5 col-span-4">
            Timeless
          </span>

          <span className="uppercase col-start-9 col-span-4 whitespace-nowrap">
            Memories
          </span>
        </div>

        {/* RIGHT COLUMN — EDITORIAL LIST */}
        <div className="flex flex-col divide-y divide-black/10">
          {editorialListItems.map((text, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-[3rem_1fr] items-center py-5",
                i === 0 ? "pt-0" : null,
                i === editorialListItems.length - 1 ? "pb-0" : null
              )}
            >
              <span className="text-[2rem] -tracking-[0.04em] leading-[1.2]">
                {(i + 1).toString().padStart(2, "0")}
              </span>

              <span className="text-[2rem] -tracking-[0.04em] leading-[1.2] text-right">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
