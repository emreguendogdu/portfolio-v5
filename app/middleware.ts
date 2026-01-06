import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  if (hostname.startsWith("kiani.")) {
    url.pathname = `/kiani${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname.startsWith("solara.")) {
    url.pathname = `/solara${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
    