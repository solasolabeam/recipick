"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIsFetching } from "@tanstack/react-query";
import AllList, { AllListLoading } from "../(components)/AllList";
import React, { Suspense, useEffect, useState } from "react";
import Header from "../(components)/Header";
import { useSearchParams } from "next/navigation";

//메인 이미지
// const food = "/assets/images/food.jpg";

export default function SearchPage() {
  return (
    <Suspense>
      <SearchList />
    </Suspense>
  );
}

function SearchList() {
  const isFetching = useIsFetching();
  const [input, setInput] = useState("");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const searchParams = useSearchParams();

  const handleSumbit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setItemName(input);
    }
  };

  useEffect(() => {
    console.log('searchParams.get("category")', searchParams.get("category"));
    if (searchParams.get("category")) {
      setCategory(searchParams.get("category") || "");
    }
  }, [searchParams]);
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-5 flex-grow">
        {/* 로고, 로그인, 마이페이지 */}
        <Header />
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={handleSumbit}
          />
        </section>
        {/* 카테고리 버튼 */}
        <section className="mt-6 flex flex-wrap gap-4">
          <button
            className="rounded-xl bg-gray-600 px-8 py-4 text-white"
            onClick={() => setCategory("")}
          >
            전체
          </button>
          <button
            className="rounded-xl bg-rice px-8 py-4 text-white"
            onClick={() => setCategory("밥")}
          >
            밥
          </button>
          <button
            className="rounded-xl bg-sideDish px-8 py-4 text-white"
            onClick={() => setCategory("반찬")}
          >
            반찬
          </button>
          <button
            className="rounded-xl bg-soup px-8 py-4 text-white"
            onClick={() => setCategory("국")}
          >
            국&찌개
          </button>
          <button
            className="rounded-xl bg-dessert px-8 py-4 text-white"
            onClick={() => setCategory("후식")}
          >
            후식
          </button>
          <button
            className="rounded-xl bg-best px-8 py-4 text-white"
            onClick={() => setCategory("일품")}
          >
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
              <AllList
                startIndex={1}
                endIndex={6}
                queryKey="allData"
                itemName={itemName}
                category={category}
              />
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
