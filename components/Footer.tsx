import Link from "next/link";
import CtaButton from "./ui/CtaButton";
import Header from "./Header";

export default function Footer() {
  return (
    <footer className="relative w-full h-svh flex flex-col gap-6 justify-between">
      <div aria-hidden />
      <div
        id="footer-center"
        className="flex flex-col gap-10 items-center justify-center"
      >
        <h2 className="text-center">
          Let's turn your website into <br />
          your strongest business asset.
        </h2>

        <CtaButton
          text="Schedule a Call"
          type="big"
          href="https://cal.com/emregnd/inquiry"
        />
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <p>© 2025 - Emre Gundogdu</p>

        <div className="flex items-center gap-2 sm:gap-4 justify-between sm:justify-start w-full sm:w-auto">
          <Link href="https://linkedin.com/in/emregnd/" target="_blank">
            LinkedIn
          </Link>
          <Link href="https://dribbble.com/emregnd/" target="_blank">
            Dribbble
          </Link>
          <Link href="https://github.com/emreguendogdu/" target="_blank">
            Github
          </Link>
          <Link href="https://instagram.com/emregnd/" target="_blank">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
