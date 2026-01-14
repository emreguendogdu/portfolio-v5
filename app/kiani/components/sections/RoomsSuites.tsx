import { cn } from "@/lib/utils";
import Image from "next/image";
import CTA from "../ui/CTA";

// Mock data based on the image
const ROOMS = [
  {
    id: 1,
    title: "Concrete Garden",
    description:
      "Ground floor immersion. Floor-to-ceiling glass dissolving the barrier between the bedroom and the private botanical courtyard.",
    specs: ["85 sqm", "Private plunge pool", "Rain shower"],
    alignment: "left", // Text alignment
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop", // Placeholder: Tropical Concrete
  },
  {
    id: 2,
    title: "Horizon Frame",
    description:
      "Elevated perspective. A monolithic structure facing the Indian Ocean. Designed for light, airflow, and absolute privacy.",
    specs: ["110 sqm", "Panoramic balcony", "Freestanding stone tub"],
    alignment: "right",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop", // Bedroom with ocean view
  },
  {
    id: 3,
    title: "Horizon Frame",
    description:
      "Elevated perspective. A monolithic structure facing the Indian Ocean. Designed for light, airflow, and absolute privacy.",
    specs: ["110 sqm", "Panoramic balcony", "Freestanding stone tub"],
    alignment: "left",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop", // Another angle of Horizon Frame
  },
  {
    id: 4,
    title: "Kiani Apex",
    description:
      "The crown of the structure. A brutalist masterpiece offering a 270-degree view of the Canggu coastline.",
    specs: ["250 sqm", "Rooftop infinity pool", "Private chef access"],
    alignment: "right",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop", // Modern living with ocean view
  },
];

export default function RoomsSuites() {
  return (
    <section id="rooms-suites" className="min-h-svh px-10">
      {/* --- HEADER SECTION --- */}
      <div className="mb-20 flex flex-col items-center">
        {/* Big Title */}
        <div className="flex items-center gap-4 md:gap-12">
          <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-light tracking-tight leading-none">
            Rooms
          </h2>
          <span className="font-serif italic text-6xl md:text-[8rem] lg:text-[10rem] font-light leading-none relative top-2">
            &
          </span>
          <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-light tracking-tight leading-none">
            Suites
          </h2>
        </div>

        {/* Subheader with Line */}
        <div className="flex items-center gap-4 mt-8 w-full max-w-lg">
          <span className="secondary-text">Your Place</span>
          <div className="h-px bg-black/20 w-full" />
          <span className="secondary-text">To Unwind</span>
        </div>
      </div>

      {/* --- GRID SECTION --- */}
      {/* The grid columns replicate the 2-column layout in the image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1600px] mx-auto">
        {ROOMS.map((room) => (
          <RoomCard key={room.id} data={room} />
        ))}
      </div>
    </section>
  );
}

interface RoomData {
  title: string;
  description: string;
  specs: string[];
  image: string;
  alignment: string | "left" | "right";
}

export const RoomCard = ({ data }: { data: RoomData }) => {
  const isRight = data.alignment === "right";

  return (
    <div
      className={cn(
        "relative group w-full h-[600px] md:h-[750px] overflow-hidden bg-gray-200"
      )}
    >
      {/* Background Image */}
      <div className={cn("absolute inset-0 w-full h-full")}>
        <Image
          src={data.image}
          alt={data.title}
          fill
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          )}
        />
        {/* Dark overlay to ensure text readability */}
        <div className={cn("absolute inset-0 bg-black/20")} />
      </div>

      {/* Content Overlay */}
      <div
        className={cn(
          "absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-white",
          isRight ? "items-end text-right" : "items-start text-left"
        )}
      >
        {/* Top Content: Title & Description */}
        <div
          className={cn(
            "space-y-4 inline-block",
            isRight && "flex flex-col items-end"
          )}
        >
          <h2 className={cn("text-4xl md:text-5xl font-light tracking-tight")}>
            {data.title}
          </h2>
          <p
            className={cn(
              "text-sm md:text-base font-light opacity-90 leading-relaxed max-w-xs"
            )}
          >
            {data.description}
          </p>
        </div>

        {/* Bottom Content: Specs & Button */}
        <div
          className={cn(
            "flex flex-col gap-8",
            isRight ? "items-end" : "items-start"
          )}
        >
          {/* Spec List */}
          <ul
            className={cn(
              "space-y-2 text-sm font-light tracking-wide opacity-80",
              isRight ? "text-right" : "text-left"
            )}
          >
            {data.specs.map((spec, i) => (
              <li
                key={i}
                className={cn(
                  "flex items-center gap-3",
                  isRight ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "w-auto h-1.5 aspect-square bg-white border-white rounded-full"
                  )}
                />
                {spec}
              </li>
            ))}
          </ul>

          {/* Button */}
          <CTA type="white" text="View & Book" />
        </div>
      </div>
    </div>
  );
};
