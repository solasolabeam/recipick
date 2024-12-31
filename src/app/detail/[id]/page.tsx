"use client";
import {
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

//메인 이미지
const food = "/assets/images/food.jpg";
const chapter = "/assets/images/chapter.png";

export default function DetailPage() {
  return (
    <>
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
      </div>
      {/* 음식 상세이미지 */}
      <section className="mt-4 h-[250px] w-full">
        <Image
          className="h-full w-full object-cover"
          src={food}
          alt="음식"
          width={450}
          height={450}
        ></Image>
      </section>
      <div className="mx-5">
        {/* 카테고리1,2 태그  */}
        <section className="mt-5 gap-2">
          <span className="rounded border border-sideDish bg-sideDish px-4 py-2 text-white">
            반찬
          </span>
          <span className="ml-4 rounded border border-sideDish px-4 py-2 text-sideDish">
            찌기
          </span>
        </section>
        {/* 타이틀, 재료 */}
        <section className="mt-5 gap-2">
          <p className="text-2xl font-bold">새우 두부 계란찜</p>
          <p className="mt-4 text-base font-bold">재료</p>
          <p className="mt-2 text-sm">
            새우두부계란찜 연두부 75g(3/4모), 칵테일새우 20g(5마리), 달걀
            30g(1/2개), 생크림 13g(1큰술), 설탕 5g(1작은술), 무염버터
            5g(1작은술) 고명 시금치 10g(3줄기)
          </p>
        </section>
        {/* 영양정보 */}
        <section className="mt-7 flex flex-col gap-3">
          <section className="flex">
            <p className="w-[100px] text-left text-sm">열량</p>
            <p className="w-20 text-right text-sm">220kcal</p>
          </section>
          <section className="flex">
            <p className="w-[100px] text-left text-sm">탄수화물</p>
            <p className="w-20 text-right text-sm">220kcal</p>
          </section>
          <section className="flex">
            <p className="w-[100px] text-left text-sm">단백질</p>
            <p className="w-20 text-right text-sm">220kcal</p>
          </section>
          <section className="flex">
            <p className="w-[100px] text-left text-sm">지방</p>
            <p className="w-20 text-right text-sm">220kcal</p>
          </section>
          <section className="flex">
            <p className="w-[100px] text-left text-sm">나트륨</p>
            <p className="w-20 text-right text-sm">220kcal</p>
          </section>
        </section>
        {/* 요리 절차 */}
        <section className="mt-16 flex flex-col gap-[120px]">
          <div className="flex flex-col gap-7">
            <div className="h-[200px] w-auto">
              <Image
                className="h-full w-full rounded-md object-cover"
                src={chapter}
                alt="챕터"
                width={196}
                height={130}
              ></Image>
            </div>
            <p className="text-sm">손질된 새우를 끓는 물에 데쳐 건진다.</p>
          </div>
          <div className="flex flex-col gap-7">
            <div className="h-[200px] w-auto">
              <Image
                className="h-full w-full rounded-md object-cover"
                src={chapter}
                alt="챕터"
                width={196}
                height={130}
              ></Image>
            </div>
            <p className="text-sm">손질된 새우를 끓는 물에 데쳐 건진다.</p>
          </div>
        </section>
      </div>
      {/* 푸터 디자인 */}
      <section className="mt-40 flex h-20 w-full items-center bg-Gray20">
        <p className="pl-5 text-sm">© 2024 Recipick. All rights reserved.</p>
      </section>
    </>
  );
}
