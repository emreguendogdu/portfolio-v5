import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./page.css";

const editorsNote = localFont({
  src: [
    {
      path: "./components/fonts/EditorsNote-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-editors-note",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dm-sans",
});

export default function CozaNestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${editorsNote.variable} ${dmSans.variable} font-sans antialiased`}
    >
      {children}
    </div>
  );
}
