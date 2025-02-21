import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "", // 카카오 앱에서 발급 받은 클라이언트 ID
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "", // 카카오 앱에서 발급 받은 클라이언트 Secret
    }),
  ],
  // 추가 설정 (콜백, 데이터베이스 연결 등)
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
