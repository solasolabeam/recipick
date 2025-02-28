import type { Metadata } from "next";
import QueryProvider from "./QueryProvider";

import "./globals.css";
import SessionProvider from "./SessionProvider";

export const metadata: Metadata = {
  title: "RECIPICK",
  description:
    "레시피 조회, 저장 및 추천 기능을 제공하는 웹 애플리케이션. 사용자는 개인 맞춤형 레시피를 쉽게 찾고, 즐겨찾기하거나 나만의 레시피를 추가할 수 있습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <QueryProvider>{children}</QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
