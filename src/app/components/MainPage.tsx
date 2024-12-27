"use client";
import {
  faArrowRightToBracket,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function MainPage() {
  const [] = useState();
  const banner = "/assets/images/banner.png";
  return (
    <div className="mx-5">
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
      {/* 검색창 */}
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
      {/* 배너이미지 */}
      <div className="w-90 relative mt-5 h-[230px] rounded border-none bg-gray-200">
        <Image
          className="rounded"
          src={banner}
          alt="배너이미지"
          width={1024}
          height={682}
        ></Image>
        <section className="absolute bottom-5 left-[10px]">
          <p className="text-2xl font-bold text-white">맛있는 레시피 발견</p>
          <p className="text-base  text-white">당신을 위한 레시피</p>
        </section>
      </div>

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
