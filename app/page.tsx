import { ReactLenis } from "lenis/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import MouseTracker from "@/components/MouseTracker";

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <MouseTracker />
      <main className="px-4 sm:px-10 py-5">
        <Header />
        <Hero />
        <SelectedWorks />
        <Footer />
      </main>
    </>
  );
}
