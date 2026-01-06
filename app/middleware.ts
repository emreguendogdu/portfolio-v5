import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  if (host.startsWith("kiani.")) {
    return NextResponse.rewrite(new URL("/kiani", req.url));
  }

  if (host.startsWith("solara.")) {
    return NextResponse.rewrite(new URL("/solara", req.url));
  }

  return NextResponse.next();
}
