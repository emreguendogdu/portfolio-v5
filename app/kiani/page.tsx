import Philosophy from "@/components/works/kiani/components/sections/Philosophy";
import SomeStays from "@/components/works/kiani/components/sections/SomeStays";
import RoomsSuites from "@/components/works/kiani/components/sections/RoomsSuites";
import SpaWellness from "@/components/works/kiani/components/sections/SpaWellness";
import TestimonialSection from "@/components/works/kiani/components/sections/TestimonialSection";
import Hero from "@/components/works/kiani/components/Hero";
import Preloader from "@/components/works/kiani/components/Preloader";
import Footer from "@/components/works/kiani/components/sections/Footer";

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
