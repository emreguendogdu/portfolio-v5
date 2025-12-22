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
  if (!type) {
    throw new Error("Define type for the CTA button.");
  }
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center bg-foreground text-background rounded-lg",
        type === "big"
          ? "h3 uppercase px-10 py-5 gap-5"
          : "px-5 pr-2.5 py-2.5 gap-2.5"
      )}
    >
      <span>{text}</span>
      <ArrowRightIcon
        className={cn(
          "w-[1em] h-[1em]",
          type === "small" ? "mb-[0.05em]" : null
        )}
      />
    </Link>
  );
}
