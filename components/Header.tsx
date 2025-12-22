import { getIstanbulTime } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 px-4 sm:px-10 py-4 w-full flex justify-between items-center">
      <div className="flex gap-1.75 items-center">
        {/* <div className="w-1.75 h-1.75 rounded-full bg-black opacity-50" /> */}
        <p className="opacity-50 capitalize">
          Currently building — <br />
          v1.0
        </p>
        {/* Booking projects <br /> for— Dec ‘25 */}
      </div>

      <Link
        href="/"
        className="capitalize absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
      >
        Emre <br className="inline sm:hidden" /> Gundogdu
      </Link>

      <div className="text-right opacity-50">
        <p>Istanbul, TR</p>
        <p>{getIstanbulTime()}</p>
      </div>
    </header>
  );
}
