import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
      const { nextUrl } = req;
      const isLoggedIn = !!req.auth;
      const hasTokenCookie = req.cookies.has("token");
      const isAuthenticated = isLoggedIn || hasTokenCookie;

      const protectedRoutes = ["/dashboard"];
      const authRoutes = ["/auth/login", "/auth/register"];

      const isProtectedRoute = protectedRoutes.some((route) =>
            nextUrl.pathname.startsWith(route)
      );
      const isAuthRoute = authRoutes.some((route) =>
            nextUrl.pathname.startsWith(route)
      );

      // Redirect logged-in users away from auth pages
      if (isAuthRoute && isAuthenticated) {
            return NextResponse.redirect(new URL("/dashboard", nextUrl));
      }

      // Redirect unauthenticated users to login
      if (isProtectedRoute && !isAuthenticated) {
            return NextResponse.redirect(new URL("/auth/login", nextUrl));
      }

      return NextResponse.next();
});

export const config = {
      matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
