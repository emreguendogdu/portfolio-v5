import type { Metadata } from "next";
import localFont from "next/font/local";
import "./index.css";

const objectSans = localFont({
  src: "../../public/fonts/PPObjectSans-Regular.otf",
  variable: "--font-object-sans",
  display: "swap",
});

const neueMontreal = localFont({
  src: "../../public/fonts/PPNeueMontreal-Medium.otf",
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emre Gundogdu | Web Design & Development Partner",
  description:
    "Turkey-based Web Design & Development Partner. Crafting unforgettable, performance-driven websites and web apps (E-Commerce, SAAS, Luxury). See selected work and book your project.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${objectSans.variable} ${neueMontreal.variable} antialiased`}
    >
      {children}
    </div>
  );
}
