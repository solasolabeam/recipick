"use client";
// import Image from "next/image";
import { Card } from "../(components)/AllList";
import { useEffect, useState } from "react";
import { recipeProps } from "../type/recipe";
import getStoredRecipes from "../util/getStoredRecipes";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";
import { useSession } from "next-auth/react";

//메인 이미지
// const food = "/assets/images/food.jpg";

export default function MyPage() {
  const [recent, setRecent] = useState<recipeProps[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    setRecent(getStoredRecipes());
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-5 flex-grow">
        {/* 로고, 로그인, 마이페이지 */}
        <Header />
        {/* 사용자 정보 */}
        <section className="mt-12 flex gap-5">
          <div className="h-[100px] w-[100px] flex-shrink-0 rounded-[100%] bg-Gray20"></div>
          <div className="w-auto">
            <section className="mt-5">
              <p className="text-xl font-bold">
                {session?.user?.name || "이름 없음"}
              </p>
              <p className="mt-1 text-base text-Gray30">
                {session?.user?.email || "이메일 없음"}
              </p>
              <p className="mt-3 text-xs">
                요리와 여행을 사랑하는 미식가입니다. 새로운 레시피를 공유하고
                싶어요!
              </p>
            </section>
          </div>
        </section>
        {/* 최근 본, 북마크 탭 */}
        <section className="mt-20 flex justify-center gap-2">
          <span className="border-b border-black px-5 py-3">최근 본</span>
          <span className="px-5 py-3">북마크</span>
        </section>
        {/* 레시피 검색 결과 */}
        <section className="mt-4">
          <div className="mt-4 flex flex-wrap gap-4">
            {recent.map((recipe, index) => (
              <Card key={index} recipe={recipe} />
            ))}
          </div>
        </section>
      </main>
      {/* 푸터 디자인 */}
      <Footer />
    </div>
  );
}
