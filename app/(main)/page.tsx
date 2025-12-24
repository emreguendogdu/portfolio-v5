import { ReactLenis } from "lenis/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <main className="px-4 sm:px-10 py-4 flex flex-col gap-20">
        <Header />
        <Hero />
        <SelectedWorks />
        <Footer />
      </main>
    </>
  );
}
