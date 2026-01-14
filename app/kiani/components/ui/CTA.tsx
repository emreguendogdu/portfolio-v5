interface CTAProps {
  text?: string;
  type?: "default" | "outline" | "white";
}

export default function CTA({ text = "Book Now", type = "default" }: CTAProps) {
  let buttonClass =
    "px-5 py-[10px] flex items-center gap-5 rounded-full cursor-pointer transition-colors w-fit";
  let spanClass = "uppercase whitespace-nowrap";

  switch (type) {
    case "white":
      buttonClass += " bg-white";
      spanClass += " text-black";
      break;
    case "outline":
      buttonClass += " bg-transparent border border-black";
      spanClass += " text-black";
      break;
    default:
      buttonClass += " bg-black";
      spanClass += " text-white";
      break;
  }

  let iconOutlineClass =
    type === "white" ? "outline outline-black" : "outline outline-white";

  return (
    <button className={buttonClass}>
      <span className={spanClass}>{text}</span>
      <div
        className={`w-auto h-2 aspect-square rounded-full ${iconOutlineClass}`}
        aria-hidden
      />
    </button>
  );
}
