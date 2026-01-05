import Header from "@/components/Header";
import CtaButton from "@/components/ui/CtaButton";
import Galaxy from "@/components/ui/Galaxy";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "404 - Page Not Found",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <section className="relative w-full h-svh overflow-hidden">
      <div className="relative w-full h-full bg-black">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={6}
          glowIntensity={0.2}
          saturation={0.4}
          hueShift={240}
        />
      </div>

      <Header className="text-white z-1000" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-999">
        <h1
          className="text-white text-center leading-[1.3] -tracking-[0.04em]"
          style={{ fontSize: "clamp(2rem, 2vw + 0.5rem, 909rem)" }}
        >
          This page doesn&apos;t exist.
        </h1>

        <CtaButton
          type="big"
          text="Return to Homepage"
          target="_self"
          href="/"
          className="bg-white text-black"
        />
      </div>
    </section>
  );
}
