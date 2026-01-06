import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface CardImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

export default function CardImage({
  src,
  alt = ".",
  className,
}: CardImageProps) {
  return (
    <div
      className={cn(
        "card-image-wrapper w-auto aspect-square h-[120px] 2xl:h-[180px] bg-white flex p-[5px] z-10",
        className
      )}
    >
      <Image
        className="w-full h-full object-cover object-center card-image"
        src={src}
        alt={alt}
      />
    </div>
  );
}
