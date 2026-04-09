import localFont from 'next/font/local';
import './page.css';

const objectSans = localFont({
  src: '../../public/fonts/PPObjectSans-Regular.otf',
  variable: '--font-object-sans',
  display: 'swap',
});

const neueMontreal = localFont({
  src: '../../public/fonts/PPNeueMontreal-Medium.otf',
  variable: '--font-neue-montreal',
  display: 'swap',
});

export default function ClickToChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${objectSans.variable} ${neueMontreal.variable} antialiased`}>
      {children}
    </div>
  );
}
