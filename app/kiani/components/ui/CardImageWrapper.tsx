import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  src: StaticImageData;
  alt: string;
  className?: string;
  ariaHidden?: boolean;
}

export default function CardImageWrapper({
  src,
  alt = '.',
  className,
  ariaHidden = false,
}: Props) {
  return (
    <div
      className={cn(
        'card-image-wrapper w-auto aspect-square h-[120px] 2xl:h-[180px] bg-white flex p-[5px] z-10',
        className
      )}
      aria-hidden={ariaHidden}
    >
      <Image
        className="w-full h-full object-cover object-center card-image"
        src={src}
        alt={alt}
      />
    </div>
  );
}
