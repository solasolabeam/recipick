"use client";
import {
  faArrowRightToBracket,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AllList, AllListLoading } from "../(components)/MainPage";
import { useIsFetching } from "@tanstack/react-query";

//메인 이미지
// const food = "/assets/images/food.jpg";

export default function SearchPage() {
  const isFetching = useIsFetching();
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-5 flex-grow">
        {/* 로고, 로그인, 마이페이지 */}
        <section className="mt-9 flex items-center justify-between">
          <div className="text-5xl font-bold">LOGO</div>
          <section className="flex gap-5">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faArrowRightToBracket} size="2x" />
              <p className="text-xs">로그인</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faUser} size="2x" />
              <p className="text-xs">My</p>
            </div>
          </section>
        </section>
        {/* 상단 description */}
        <section className="mt-6 text-center">
          <p className="text-2xl font-bold">맛있는 레시피 탐험</p>
          <p className="mt-3 text-base">
            다양한 요리법을 통해 새로운 맛을 경험해보세요.
          </p>
        </section>
        {/* 검색창 */}
        <section className="w-90 relative mt-6 h-10 rounded border-none">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="1x"
            className="absolute left-3 top-3 h-5 w-5 cursor-pointer text-gray-400"
          />
          <input
            className="h-full w-full rounded-md bg-inputGray pl-10 text-xs"
            placeholder="레시피 검색"
          />
        </section>
        {/* 카테고리 버튼 */}
        <section className="mt-6 flex flex-wrap gap-4">
          <button className="rounded-xl bg-rice px-8 py-4 text-white">
            밥
          </button>
          <button className="rounded-xl bg-sideDish px-8 py-4 text-white">
            반찬
          </button>
          <button className="rounded-xl bg-soup px-8 py-4 text-white">
            국&찌개
          </button>
          <button className="rounded-xl bg-dessert px-8 py-4 text-white">
            후식
          </button>
          <button className="rounded-xl bg-best px-8 py-4 text-white">
            일품
          </button>
        </section>
        {/* 레시피 검색 결과 */}
        <section className="mt-16">
          <div className="mt-4 flex flex-wrap gap-4">
            {isFetching ? (
              /* 스켈레톤 로딩 */
              <AllListLoading />
            ) : (
              <AllList startIndex={1} endIndex={6} queryKey="allData" />
            )}
          </div>
        </section>
      </main>
      {/* 푸터 디자인 */}
      <footer className="mt-40 flex h-20 w-full items-center bg-Gray20">
        <p className="pl-5 text-sm">© 2024 Recipick. All rights reserved.</p>
      </footer>
    </div>
  );
}
