import { NextRequest, NextResponse } from "next/server";

const PASSWORD = process.env.SITE_PASSWORD ?? "gantidengansandimu";
const COOKIE_NAME = "site_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Izinkan semua asset agar tidak terblokir
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") || // file dengan ekstensi (css, js, jpg, dll)
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Cek cookie
  const cookie = req.cookies.get(COOKIE_NAME);
  if (cookie?.value === PASSWORD) {
    return NextResponse.next();
  }

  // Redirect ke login
  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = "/login";
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};