import { db } from "@/app/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import KakaoProvider from "next-auth/providers/kakao";

const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "", // 카카오 앱에서 발급 받은 클라이언트 ID
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "", // 카카오 앱에서 발급 받은 클라이언트 Secret
    }),
  ],
  // 추가 설정 (콜백, 데이터베이스 연결 등)
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user: User }) => {
      if (user) {
        token.user = {
          name: user.name ?? undefined, // null 또는 undefined일 경우 undefined로 할당
          email: user.email ?? undefined, // null 또는 undefined일 경우 undefined로 할당
          image: user.image ?? undefined, // null 또는 undefined일 경우 undefined로 할당
        };
      }
      return token;
    },
    //유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      session.user = token.user ?? undefined;
      return session;
    },
    signIn: async ({ user }: { user: User }) => {
      if (!user) return false; // Return a boolean

      const userRef = doc(db, "users", user.id);
      const userSnapshot = await getDoc(userRef);

      if (!userSnapshot.exists()) {
        // Firestore에 유저 정보 저장
        await setDoc(userRef, {
          id: user.id,
          name: user.name ?? "사용자",
          email: user.email ?? null,
          image: user.image ?? null,
          provider: "kakao",
          data: new Date(),
          createdAt: new Date().getTime(),
        });
      }
      return true; // Return a boolean
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
