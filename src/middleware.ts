import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const sessionToken =
    req.cookies.get("next-auth.session-token") ||
    req.cookies.get("__Secure-next-auth.session-token");

  if (!sessionToken) {
    console.log("No session, redirecting...");
    return NextResponse.redirect(new URL("/", req.url));
  }

  console.log("Session token exists, allowing access...");
  return NextResponse.next();
}

export const config = {
  matcher: ["/mypage"], // /mypage 경로에만 미들웨어 적용
};
