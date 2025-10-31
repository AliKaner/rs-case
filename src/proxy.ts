// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = new Set<string>(["/", "/login"]);

function isPublicPath(pathname: string) {
  if (PUBLIC_PATHS.has(pathname)) return true;
  if (pathname.startsWith("/login")) return true;
  return false;
}

function isAssetOrInternal(pathname: string) {
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return true;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/public") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return true;
  }
  return false;
}

export function proxy(request: NextRequest) {
  const { nextUrl, cookies, url } = request;
  const { pathname, search, hash } = nextUrl;

  if (pathname.startsWith("/api/")) {
    const upstreamRoot =
      process.env.NEXT_PUBLIC_FRONT_SERVICE_ROOT ||
      process.env.NEXT_PUBLIC_SERVICE_ROOT;

    if (upstreamRoot) {
      const targetUrl = new URL(
        pathname.replace(/^\/api/, "") + (search || ""),
        upstreamRoot.endsWith("/") ? upstreamRoot : upstreamRoot + "/"
      );

      const requestHeaders = new Headers(request.headers);
      const token = cookies.get("auth-token")?.value;
      if (token) {
        requestHeaders.set("Authorization", `Bearer ${token}`);
      }

      return NextResponse.rewrite(targetUrl, {
        request: { headers: requestHeaders },
      });
    }
  }

  if (isAssetOrInternal(pathname)) {
    return NextResponse.next();
  }

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const token = cookies.get("auth-token")?.value;

  if (!token) {
    const redirectTarget = `${pathname}${search || ""}${hash || ""}`;
    const loginUrl = new URL("/login", url);
    return NextResponse.redirect(loginUrl, { status: 307 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!_next/|favicon.ico|robots.txt|sitemap.xml|assets/|public/).*)",
  ],
};
