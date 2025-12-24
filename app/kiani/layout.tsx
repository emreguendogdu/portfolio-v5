import localFont from "next/font/local";
import "./kiani.css";

const bosch = localFont({
  src: "../../public/work/kiani/fonts/Bosch-Regular.otf",
  variable: "--font-bosch",
  display: "swap",
});

const satoshi = localFont({
  src: "../../public/work/kiani/fonts/Satoshi-Regular.otf",
  display: "swap",
});

export default function KianiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${bosch.variable} ${satoshi.className}`}>{children}</div>
  );
}
