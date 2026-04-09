"use client";

import Image from "next/image";
import HeroBg from "./images/hero-bg.png";
import Thumbnail1 from "./images/thumbnail-1.png";
import Thumbnail2 from "./images/thumbnail-2.png";
import Thumbnail3 from "./images/thumbnail-3.png";

export const Hero = () => {
  return (
    <section className="relative min-h-svh bg-background text-foreground overflow-hidden">
      {/* Promo Banner / Header */}
      <header className="relative flex items-center justify-between px-10 pt-5 pb-10 border-b border-black/10 backdrop-blur-[12px]">
        {/* Logo */}
        <div className="flex items-end font-serif leading-[0.8] text-foreground">
          <p className="text-[16px] tracking-[-0.8px]">COZA</p>
          <div className="flex items-start justify-center">
            <p className="text-[8px] tracking-[-0.4px]">nest</p>
            <p className="text-[4px] tracking-[-0.2px]">&copy;</p>
          </div>
        </div>

        {/* Center promo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[10px] text-center text-foreground text-[16px] tracking-[-0.8px] leading-normal">
          <p className="uppercase">Exclusive WEB Offer</p>
          <p>
            <span className="font-bold">20% OFF</span>
            {" for website bookings!"}
          </p>
        </div>

        {/* Right nav placeholder */}
        <p className="font-serif text-[16px] tracking-[-0.8px] leading-[0.8] italic">
          Test
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-5 w-full">
        {/* Heading + Booking */}
        <div className="flex flex-col items-center gap-[60px] w-full max-w-[1019px] mt-[90px]">
          {/* Heading */}
          <div className="flex flex-col items-center gap-[60px]">
            <div className="font-serif text-foreground text-center tracking-[-0.05em] whitespace-nowrap">
              <p className="text-[96px] leading-[0.8] mb-0">
                For timeless memories.
              </p>
              <p className="text-[96px] leading-[0.8]">
                A tropical touch &amp; experience.
              </p>
            </div>

            {/* Booking Bar */}
            <div className="booking-bar">
              <div className="booking-bar-item w-[195px]">CHECK IN</div>
              <div className="booking-bar-item w-[195px]">CHECK OUT</div>
              <div className="booking-bar-item w-[162.5px]">GUESTS</div>
              <div className="booking-bar-item w-[162.5px] border-r-0">
                BOOK
              </div>
            </div>
          </div>

          {/* Thumbnail images */}
          <div className="flex items-center gap-2.5">
            <div className="h-[55px] w-[100px] relative rounded-[4px] overflow-hidden shrink-0">
              <Image
                src={Thumbnail1}
                alt="Resort view"
                className="object-cover"
                fill
              />
            </div>
            <div className="h-[55px] w-[100px] relative rounded-[4px] overflow-hidden shrink-0">
              <Image
                src={Thumbnail2}
                alt="Resort pool"
                className="object-cover"
                fill
              />
            </div>
            <div className="h-[55px] w-[100px] relative rounded-[4px] overflow-hidden shrink-0">
              <Image
                src={Thumbnail3}
                alt="Resort interior"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[1440/722]">
          <div className="absolute inset-0">
            <Image
              src={HeroBg}
              alt="CozaNest tropical resort"
              className="object-cover"
              fill
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Bottom overlay text */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-10 py-5">
            <div className="hero-overlay-text">
              <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                <p className="coza-text col-start-1 row-start-1 text-[192px] leading-[0.8] tracking-[-9.6px]">
                  COZA
                </p>
                <p className="nest-text col-start-1 row-start-1 text-[96px] leading-[0.8] tracking-[-4.8px] ml-[451px] mt-[70px]">
                  nest
                </p>
                <p className="col-start-1 row-start-1 text-[32px] leading-none tracking-[-1.6px] ml-[599px] mt-[80px]">
                  &reg;
                </p>
              </div>
            </div>

            <p className="text-white text-[16px] tracking-[-0.32px] leading-[0.8] whitespace-nowrap">
              LANGKAWI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
