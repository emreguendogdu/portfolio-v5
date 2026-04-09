import { constructMetadata } from "@/lib/siteConfig";
import { Hero } from "./components/Hero";

export const metadata = constructMetadata({
  title: "CozaNest Tropical Resort",
  description:
    "For timeless memories. A tropical touch & experience. Luxury resort in Langkawi.",
});

export default function Page() {
  return <Hero />;
}
