import { constructMetadata } from "@/lib/siteConfig";
import Philosophy from "@/app/kiani/components/sections/Philosophy";
import SomeStays from "@/app/kiani/components/sections/SomeStays";
import RoomsSuites from "@/app/kiani/components/sections/RoomsSuites";
import SpaWellness from "@/app/kiani/components/sections/SpaWellness";
import TestimonialSection from "@/app/kiani/components/sections/TestimonialSection";
import Hero from "@/app/kiani/components/Hero";
import Preloader from "@/app/kiani/components/Preloader";
import Footer from "@/app/kiani/components/sections/Footer";

export const metadata = constructMetadata({
  title: "Kiani Luxury Hotel & Spa",
  description:
    "Experience timeless memories in the heart of Canggu, Bali. Kiani is a place designed for rest, recovery, and genuine connection.",
});

export default function KianiHomePage() {
  return (
    <main className="relative flex flex-col gap-30 bg-background">
      <Preloader />
      <Hero />
      <Philosophy />
      <SomeStays />
      <RoomsSuites />
      <SpaWellness />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
