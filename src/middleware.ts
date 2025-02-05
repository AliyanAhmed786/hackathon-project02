// src/middleware.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const IsLogin = cookieStore.get("IsLogin")?.value;

  console.log("Middleware: IsLogin cookie value is:", IsLogin);

  // Redirect to login if not logged in
  if (IsLogin === "" && request.nextUrl.pathname === "") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to homepage if already logged in
  if (IsLogin === "" && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/login"],
};
