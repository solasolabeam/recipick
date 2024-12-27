"use client";
import {
  faArrowRightToBracket,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const banner = "/assets/images/banner.png";
const recipebook = "/assets/images/recipebook.png";
const freezer = "/assets/images/freezer.png";
const food = "/assets/images/food.jpg";

export default function MainPage() {
  const [] = useState();

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
          className="h-full w-full rounded-md bg-inputGray pl-10 text-xs"
          placeholder={`재료 또는 레시피 검색`}
        />
      </section>
      {/* 배너이미지 */}
      <div className="w-90 relative mt-5 h-[230px] rounded-md border-none bg-gray-200">
        <Image
          className="w-full h-full rounded-xl object-cover"
          src={banner}
          alt="배너이미지"
          width={1024}
          height={682}
        ></Image>
        <section className="absolute bottom-5 left-[10px]">
          <p className="text-2xl font-bold text-white">맛있는 레시피 발견</p>
          <p className="text-base text-white">당신을 위한 레시피</p>
        </section>
      </div>
      {/* 메뉴선택 버튼 */}
      <section className="mt-[73px] flex items-center justify-center gap-[32px]">
        <div className="flex flex-col items-center">
          <div className="bg-recipeSearch relative flex h-[126px] w-[126px] items-center justify-center rounded-xl">
            <Image
              className="h-[100px] w-[100px]"
              src={recipebook}
              alt="레시피북"
              width={1024}
              height={1024}
            ></Image>
          </div>
          <p className="mt-4 text-base font-semibold">모든 레시피</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-freezerSearch relative flex h-[126px] w-[126px] items-center justify-center rounded-xl">
            <Image
              className="h-[100px] w-[100px]"
              src={freezer}
              alt="냉장고"
              width={1024}
              height={1024}
            ></Image>
          </div>
          <p className="mt-4 text-base font-semibold">냉장고 털기</p>
        </div>
      </section>
      {/* 추천레시피*/}
      <section className="mt-16">
        <div>
          <p className="text-2xl font-bold">추천 레시피</p>
        </div>
        <div className="mt-4">
          <div className="w-52 border border-black">
            <div className="h-40 w-full">
              <Image
                className="h-full w-full object-cover"
                src={food}
                alt="food"
                width={450}
                height={450}
              ></Image>
            </div>
            <div className="h-[146px] w-full p-5">
              <p className="text-base font-semibold">떡볶이</p>
              <p className="text-materialAdd pt-3 text-xs">
                떡을 볶을 때는 약불로 볶아야 간장이 타지 않는다.
              </p>
              <button className="m-3 border bg-inputGray px-8 py-2">
                레시피 보기
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div>
          <p className="text-2xl font-bold">인기 레시피</p>
        </div>
        <div className="mt-4">
          <div className="w-52 border border-black">
            <div className="h-40 w-full">
              <Image
                className="h-full w-full object-cover"
                src={food}
                alt="food"
                width={450}
                height={450}
              ></Image>
            </div>
            <div className="h-[146px] w-full p-5">
              <p className="text-base font-semibold">떡볶이</p>
              <p className="text-materialAdd pt-3 text-xs">
                떡을 볶을 때는 약불로 볶아야 간장이 타지 않는다.
              </p>
              <button className="m-3 border bg-inputGray px-8 py-2">
                레시피 보기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
