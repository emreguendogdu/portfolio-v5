"use client";

import { getIstanbulTime, cn } from "@/lib/utils";
import HeaderLogo from "./HeaderLogo";
import { useRef } from "react";

export default function Header({ className }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  return (
    <header
      ref={container}
      className={cn(
        "absolute top-4 left-0 right-0 px-4 sm:px-10 pb-4 w-full flex justify-between items-center z-10 invisible",
        className
      )}
    >
      <div className="flex gap-1.75 items-center">
        <p className="header-anim-item header-build opacity-50 capitalize hidden sm:block">
          Currently building — <br />
          v1.0
        </p>
      </div>
      <div className="absolute top-0 sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 overflow-hidden">
        <div className="header-logo">
          <HeaderLogo className="relative" />
        </div>
      </div>

      <div className="text-right opacity-50">
        <div className="header-anim-item header-location">
          <p>Istanbul, TR</p>
        </div>
        <div className="header-anim-item header-time">
          <p>{getIstanbulTime()}</p>
        </div>
      </div>
    </header>
  );
}
