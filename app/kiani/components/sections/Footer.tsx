import Link from "next/link";
import CTA from "../ui/CTA";
import Facebook from "../ui/icons/Facebook";
import Instagram from "../ui/icons/Instagram";
import Youtube from "../ui/icons/YouTube";
import { PORTFOLIO_SITE_LINK } from "@/lib/siteConfig";

const SOCIAL_LINKS_COUNT: number = 3;

type NAV_COLUMN_TYPE = {
  links: string[];
  bottomText: string;
};

type SOCIAL_LINKS_TYPE = {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
};

const NAVIGATION_COLUMNS: NAV_COLUMN_TYPE[] = [
  {
    links: ["Rooms & Suites", "SPA & Wellness"],
    bottomText: "Terms of Service",
  },
  {
    links: ["Dining", "Experiences"],
    bottomText: "Privacy Policy",
  },
  {
    links: ["Offers", "About Kiani"],
    bottomText: "© 2025",
  },
];

const SOCIAL_LINKS: SOCIAL_LINKS_TYPE[] = [
  {
    icon: <Instagram />,
    href: PORTFOLIO_SITE_LINK,
    ariaLabel: "Instagram",
  },
  {
    icon: <Facebook />,
    href: PORTFOLIO_SITE_LINK,
    ariaLabel: "Facebook",
  },
  {
    icon: <Youtube />,
    href: PORTFOLIO_SITE_LINK,
    ariaLabel: "Youtube",
  },
];

interface NavigationColumnProps {
  links: string[];
  bottomText: string;
}

function NavigationColumn({ links, bottomText }: NavigationColumnProps) {
  return (
    <div className="flex flex-col self-stretch justify-between gap-5">
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link} className="secondary-text">
            {link}
          </li>
        ))}
      </ul>
      <span className="secondary-text opacity-50">{bottomText}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-foreground/20">
      <div className="flex flex-col gap-30 px-10 py-10">
        <div className="relative w-full flex justify-between gap-5">
          <div className="flex flex-col gap-10">
            <h2 className="h3">
              The stay <br />
              that you'll never forget
            </h2>
            <CTA text="Book Your Stay" />
          </div>

          <div className="flex flex-col self-stretch justify-between">
            <div className="flex flex-col gap-2.5">
              <p className="text-right">
                Jl. Pantai Batu Bolong No. 88B <br />
                Banjar Canggu, Kuta Utara <br />
                Badung, Bali
              </p>
              <p className="text-right">+62 812 3456 7890</p>
            </div>

            <div className="flex items-center gap-5 justify-end text-[1.5rem]">
              {SOCIAL_LINKS.map((link, i) => (
                <Link key={i} href={link.href} aria-label={link.ariaLabel}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-between gap-20">
          <div className="flex items-center gap-20 self-stretch">
            {NAVIGATION_COLUMNS.map((column, i) => (
              <NavigationColumn key={i} {...column} />
            ))}
          </div>

          <div className="flex flex-col items-end justify-between self-stretch gap-2.5">
            <span className="h0 h0-small">Kiani</span>
            <span className="hotel-text hotel-text-small">
              Luxury Hotel & Spa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
