import localFont from "next/font/local";
import "./page.css";

const gotham = localFont({
  src: [
    {
      path: "./components/fonts/Gotham-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./components/fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./components/fonts/Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

export default function SolaraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${gotham.variable} font-sans antialiased`}>{children}</div>
  );
}
