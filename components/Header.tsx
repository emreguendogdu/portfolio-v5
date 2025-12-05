import { getIstanbulTime } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 px-4 sm:px-10 py-6 w-full flex justify-between items-center">
      <p>
        Booking projects <br /> for— Dec ‘25
      </p>

      <Link
        href="/"
        className="capitalize absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        Emre Gundogdu
      </Link>

      <div className="text-right">
        <p>Istanbul, TR</p>
        <p>{getIstanbulTime()}</p>
      </div>
    </header>
  );
}
