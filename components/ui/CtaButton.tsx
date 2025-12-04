import { cn } from "@/lib/utils";
import Link from "next/link";
import ArrowRightIcon from "./ArrowRightIcon";

export default function CtaButton({
  text,
  href,
  type,
}: {
  text: string;
  href: string;
  type: "small" | "big";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5",
        type === "big" ? "h3 uppercase" : "gap-2"
      )}
    >
      <span>{text}</span>
      <ArrowRightIcon
        className={cn(
          "w-[1em] h-[1em]",
          type === "small" ? "mb-[0.2em]" : null
        )}
      />
    </Link>
  );
}
