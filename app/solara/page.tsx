import { constructMetadata } from "@/lib/siteConfig";
import { Hero } from "./components/Hero";
import { Preloader } from "./components/Preloader";
import { AnimationProvider } from "./context/AnimationContext";

export const metadata = constructMetadata({
  title: "Solara Grand & Aqua Hotel",
  description:
    "A luxury retreat on the Turkish Riviera shaped by light, space, and silence. Experience refined luxury at Solara Grand & Aqua Hotel.",
});

export default function Page() {
  return (
    <AnimationProvider>
      <Preloader />
      <Hero />
    </AnimationProvider>
  );
}
