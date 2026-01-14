import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface FullScreenImageLayoutProps {
  children: ReactNode;
  imageUrl?: StaticImageData;
  imageAlt?: string;
  sectionId?: string;
  className?: string;
  contentClassName?: string;
  objectPosition?: string;
}

export default function FullScreenImageLayout({
  children,
  imageUrl,
  imageAlt = "",
  sectionId,
  className,
  objectPosition = "center",
  contentClassName,
}: FullScreenImageLayoutProps) {
  return (
    <section
      id={sectionId}
      className={cn(
        "relative w-full h-[95svh] px-10 py-10 text-white",
        className
      )}
    >
      {/* Image Container */}
      <div className="absolute inset-0">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black z-10"
          aria-hidden
          style={{ opacity: 0.4 }}
        />

        {/* Image */}
        <div className="relative w-full h-full">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className={cn("object-cover")}
              style={{ objectPosition }}
            />
          ) : (
            <div className="w-full h-full object-cover object-center bg-red-500" />
          )}
        </div>
      </div>

      <div className={cn("relative z-20", contentClassName)}>{children}</div>
    </section>
  );
}
