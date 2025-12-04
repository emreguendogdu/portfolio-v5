import Link from "next/link";
import CtaButton from "./ui/CtaButton";

export default function Footer() {
  return (
    <footer className="w-full h-svh flex flex-col justify-between">
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
          text="hello@emregnd.com"
          href="mailto:hello@emregnd.com"
          type="big"
        />
      </div>

      <div className="flex items-center justify-between w-full">
        <p>© 2025 - All Rights Reserved</p>

        <div className="flex items-center gap-5">
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
