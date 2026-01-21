import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect /chat route - only authenticated users can access
  if (pathname.startsWith("/chat")) {
    try {
      const session = await auth.api.getSession({
        headers: request.headers,
      });

      if (!session) {
        // Redirect to auth page if not authenticated
        return NextResponse.redirect(new URL("/auth", request.url));
      }
    } catch (error) {
      // If there's an error checking session, redirect to auth
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/chat/:path*"],
};
