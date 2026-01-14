import localFont from 'next/font/local';
import './kiani.css';

const bosch = localFont({
  src: './fonts/Bosch-Regular.otf',
  variable: '--font-bosch',
  display: 'swap',
});

const satoshi = localFont({
  src: './fonts/Satoshi-Regular.otf',
  display: 'swap',
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
