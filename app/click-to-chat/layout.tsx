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

const themeInitScript = `(function(){try{var t=localStorage.getItem('ctc_theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}var w=document.currentScript&&document.currentScript.parentElement;if(w&&t==='light'){w.dataset.theme='light';}}catch(e){}})();`;

export default function ClickToChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`ctc-scope ${objectSans.variable} ${neueMontreal.variable} antialiased`}>
      <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      {children}
    </div>
  );
}
