"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function MainPage() {
  const [] = useState();
  return (
    <div className="mx-5">
      <div className="mt-9 text-4xl font-bold">LOGO</div>
      <section className="w-90 relative mt-3 h-10 rounded border-none">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="1x"
          className="absolute left-3 top-3 h-5 w-5 cursor-pointer text-gray-400"
        />
        <input
          className="h-full w-full rounded bg-inputGray pl-10 text-xs"
          placeholder={`재료 또는 레시피 검색`}
        />
      </section>
      <div className="w-90 mt-5 h-[230px] rounded border-none bg-gray-200"></div>
      <section className="mt-16">
        <p className="text-xs">냉장고에 뭐가 있나요?</p>
      </section>
      <section className="mt-3 flex flex-col items-center gap-3">
        <input
          type="text"
          placeholder="재료 입력"
          className="h-10 w-[312px] rounded border-none bg-inputGray p-4 text-xs"
        />
        <button className="h-10 w-[312px] rounded border-none bg-materialGet text-xs text-white">
          불러오기
        </button>
        <button className="h-10 w-[312px] rounded border-none bg-recipeFind text-xs text-white">
          레시피 찾기
        </button>
      </section>
      <section className="mt-16">
        <div>
          <p className="text-2xl font-bold">추천 레시피</p>
        </div>
        <div className="mt-4">
          <div className="h-[220px] w-52 border border-black">
            <div className="h-40 w-full border-none bg-gray-200"></div>
            <div className="h-[60px] w-full pl-6">
              <p className="pt-3 text-base">된장찌개</p>
              <p className="text-materialAdd pt-1 text-xs">
                구수한 된장찌개 레시피
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div>
          <p className="text-2xl font-bold">인기 레시피</p>
        </div>
        <div className="mt-4">
          <div className="h-[220px] w-52 border border-black">
            <div className="h-40 w-full border-none bg-gray-200"></div>
            <div className="h-[60px] w-full pl-6">
              <p className="pt-3 text-base">김치찌개</p>
              <p className="text-materialAdd w-2 pt-1 text-xs">
                매콤한 한국 전통 찌개
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
