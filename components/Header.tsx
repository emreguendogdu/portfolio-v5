import { getIstanbulTime, cn } from "@/lib/utils";
import HeaderLogo from "./HeaderLogo";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 px-4 sm:px-10 py-4 w-full flex justify-between items-center z-10",
        className
      )}
    >
      <div className="flex gap-1.75 items-center">
        <p className="opacity-50 capitalize">
          Currently building — <br />
          v1.0
        </p>
      </div>

      <HeaderLogo />

      <div className="text-right opacity-50">
        <p>Istanbul, TR</p>
        <p>{getIstanbulTime()}</p>
      </div>
    </header>
  );
}
