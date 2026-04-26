import Link from 'next/link';
import CtaButton from './ui/CtaButton';
import AnimatedText from './ui/AnimatedText';

const workLinks = [
  { label: 'Kiani', href: '/kiani' },
  { label: 'Solara', href: '/solara' },
  { label: 'CozaNest', href: '/cozanest' },
];

const toolsLinks = [
  { label: 'WhatsApp Click To Chat', href: '/click-to-chat' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/emregnd/' },
  { label: 'Dribbble', href: 'https://dribbble.com/emregnd/' },
  { label: 'Github', href: 'https://github.com/emreguendogdu/' },
  { label: 'Instagram', href: 'https://instagram.com/emregnd/' },
];

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
  external?: boolean;
};

function FooterColumn({ title, links, external = false }: FooterColumnProps) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3">
      <h3 className="text-xs uppercase tracking-widest opacity-50">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              className="hover:opacity-60 transition-opacity duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full min-h-svh flex flex-col gap-16 justify-between">
      <div aria-hidden />

      <div
        id="footer-center"
        className="flex flex-col gap-10 items-center justify-center"
      >
        <AnimatedText>
          <h2 className="text-center">
            Let's turn your website into <br />
            your strongest business asset.
          </h2>
        </AnimatedText>

        <CtaButton
          text="Schedule a Call"
          type="big"
          href="https://cal.com/emregnd/inquiry"
        />
      </div>

      <div className="w-full flex flex-col gap-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
          <FooterColumn title="Work" links={workLinks} />
          <FooterColumn title="Tools" links={toolsLinks} />
          <FooterColumn title="Social" links={socialLinks} external />
        </div>

        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pt-6 border-t border-current/10">
          <p>© {year} — Emre Gundogdu (Emre Gündoğdu)</p>
          <p className="opacity-50 text-xs uppercase tracking-widest">
            Freelance Front-End Developer · Turkey
          </p>
        </div>
      </div>
    </footer>
  );
}
