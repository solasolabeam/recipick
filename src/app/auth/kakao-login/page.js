"use client";

import { useEffect } from "react";
import { auth, db, OAuthProvider } from "../../lib/firebase";
import { signInWithCredential } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore/lite";

export default function KakaoLoginPage() {
  useEffect(() => {
    // 카카오 SDK 로드
    // const loadKakaoSDK = () => {
    //   if (window.Kakao && !window.Kakao.isInitialized()) {
    //     window.Kakao.init("493f2a64c6482158ffbb408c31c32112");
    //   }
    // };

    // loadKakaoSDK();

    const getData = async () => {
      try {
        // 특정 문서를 가져오기 위한 Firestore `doc`과 `getDoc` 사용
        const docRef = doc(db, "go", "JKnJOuVsgxIVs6OtieUW"); // "go" 컬렉션 안에서 "documentId"라는 ID를 가진 문서
        const docSnap = await getDoc(docRef); // 문서 데이터 가져오기

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    getData();
  }, []);

  const handleKakaoLogin = async () => {
    try {
      // 카카오 로그인
      window.Kakao.Auth.login({
        success: async (authObj) => {
          // 로그인 성공 후, 카카오의 액세스 토큰을 가져옵니다.
          const kakaoAccessToken = authObj.access_token;

          // Firebase에 카카오 로그인 정보를 넘기기 위해 OAuthProvider 사용
          const credential = OAuthProvider.credential(kakaoAccessToken);

          // Firebase로 로그인
          const userCredential = await signInWithCredential(auth, credential);

          console.log("Firebase 로그인 성공:", userCredential);
        },
        fail: (err) => {
          console.error("카카오 로그인 실패:", err);
        },
      });
    } catch (error) {
      console.error("로그인 처리 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <h2>카카오 로그인</h2>
      <button onClick={handleKakaoLogin}>카카오 로그인</button>
    </div>
  );
}
