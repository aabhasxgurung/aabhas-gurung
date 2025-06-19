// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  if (url === "/on-the-side") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
