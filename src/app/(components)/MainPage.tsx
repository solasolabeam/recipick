"use client";
import {
  faArrowRight,
  faArrowRightToBracket,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//메인 이미지
const banner = "/assets/images/banner.png";
const food = "/assets/images/food.jpg";
//카테고리 이미지
const rice = "/assets/images/rice.png";
const soup = "/assets/images/soup.png";
const sidedish = "/assets/images/sidedish.png";
const dessert = "/assets/images/dessert.png";
const best = "/assets/images/best.png";

const getData = async (count: number) => {
  const res = await fetch(
    `http://openapi.foodsafetykorea.go.kr/api/de77957df6d04d03a521/COOKRCP01/json/${count}/6`,
  );
  return await res.json();
};

export default function MainPage() {
  const [] = useState();
  const { data: get, isLoading } = useQuery({
    queryKey: ["allData"],
    queryFn: () => getData(1),
    staleTime: 10000,
  });
  console.log("get", get);
  console.log("isLoading", isLoading);
  console.log("get?.COOKRCP01.row", get?.COOKRCP01.row);

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
        {/* 검색창 */}
        <section className="w-90 relative mt-3 h-10 rounded border-none">
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
        {/* 배너이미지 */}
        <div className="w-90 relative mt-5 h-[230px] rounded-md border-none bg-gray-200">
          <Image
            className="h-full w-full rounded-xl object-cover"
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
        {/* 추천 레시피 */}
        <section className="mt-16">
          <div>
            <p className="text-2xl font-bold">추천 레시피</p>
          </div>
          <div className="mt-4 flex gap-3">
            {/* {get?.COOKRCP01.row.map((item) => {
              return (
                <div className="w-52 border border-none" key={item.RCP_SEQ}>
                  <div className="h-40 w-full">
                    <Image
                      className="h-full w-full rounded-xl object-cover"
                      src={food}
                      alt="음식"
                      width={450}
                      height={450}
                    ></Image>
                  </div>
                  <div className="h-[146px] w-full p-5">
                    <p className="text-base font-semibold">떡볶이</p>
                    <p className="text-materialAdd pt-3 text-sm">
                      떡을 볶을 때는 약불로 볶아야 간장이 타지 않는다.
                    </p>
                  </div>
                </div>
              );
            })} */}

            {/* 스켈레톤 로딩 */}
            {/* <div className="w-52 border border-none">
              <Skeleton height="160px" width="100%" />
              <div className="h-[146px] w-full p-5">
                <Skeleton width="50%" />
                <Skeleton width="100%" />
                <Skeleton width="100%" />
              </div>
            </div> */}
          </div>
        </section>
        {/* 인기 레시피 */}
        <section className="mt-16">
          <div>
            <p className="text-2xl font-bold">인기 레시피</p>
          </div>
          <div className="mt-4 flex gap-3">
            <div className="w-52 border border-none">
              <div className="h-40 w-full">
                <Image
                  className="h-full w-full rounded-xl object-cover"
                  src={food}
                  alt="음식"
                  width={450}
                  height={450}
                ></Image>
              </div>
              <div className="h-[146px] w-full p-5">
                <p className="text-base font-semibold">떡볶이</p>
                <p className="text-materialAdd pt-3 text-sm">
                  떡을 볶을 때는 약불로 볶아야 간장이 타지 않는다.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 모든 레시피 한눈에 보기 */}
        <section className="mt=[80px]">
          <p className="text-2xl font-bold">모든 레시피 한눈에 보기</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex w-full gap-5">
              <div className="h-[178px] w-[144px]">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={food}
                  alt="음식"
                  width={450}
                  height={450}
                ></Image>
              </div>
              <div className="h-[178px] w-auto">
                <button className="rounded bg-soup px-3 py-2 text-xs text-soupText">
                  국&찌개
                </button>
                <p className="mt-2 text-base font-extrabold">
                  새우 두부 계란찜
                </p>
                <p className="mt-2 line-clamp-2 w-52 text-sm">
                  나트륨의 배출을 도와주는 것으로나트륨의 배출을 도와주는
                  것으로나트륨의 배출을 도와주는 것으로
                </p>
                <p className="mt-[30px] w-52 text-xs">칼로리 | 203 kal</p>
              </div>
            </div>
            {/* 스켈레톤 로딩 */}
            {/* <div className="flex w-full gap-5">
              <div className="h-[178px] w-[144px]">
                <Skeleton height="100%" width="100%" />
              </div>
              <div className="h-[178px] w-auto">
                <Skeleton height={30} width={60} />
                <Skeleton className="mt-2" height={25} width={130} />
                <Skeleton className="mt-2" />
                <Skeleton />
                <Skeleton className="mt-[30px]" width="40%" />
              </div>
            </div> */}
          </div>
          {/* More 버튼 */}
          <div className="mt-10 flex justify-center">
            <div className="flex h-12 w-20 cursor-pointer items-center justify-center gap-2 rounded border border-Gray30">
              <p className="text-sm text-Gray40">More</p>
              <FontAwesomeIcon icon={faArrowRight} color="#656565" />
            </div>
          </div>
        </section>
        {/* 카테고리별 레시피 */}
        <section className="mt-[80px]">
          <p className="text-2xl font-bold">카테고리별 레시피</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex flex-col items-center">
              <div className="h-[125px] w-[172px] rounded-xl bg-rice">
                <Image
                  className="h-full w-full"
                  src={rice}
                  alt="쌀"
                  width={1024}
                  height={768}
                ></Image>
              </div>
              <p className="pt-5 text-base">밥</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[125px] w-[172px] rounded-lg bg-soup">
                <Image
                  className="h-full w-full"
                  src={soup}
                  alt="국&찌개"
                  width={1024}
                  height={768}
                ></Image>
              </div>
              <p className="pt-5 text-base">국&찌개</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[125px] w-[172px] rounded-lg bg-sideDish">
                <Image
                  className="h-full w-full"
                  src={sidedish}
                  alt="반찬"
                  width={1024}
                  height={768}
                ></Image>
              </div>
              <p className="pt-5 text-base">반찬</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[125px] w-[172px] rounded-xl bg-dessert">
                <Image
                  className="h-full w-full"
                  src={dessert}
                  alt="디저트"
                  width={1024}
                  height={768}
                ></Image>
              </div>
              <p className="pt-5 text-base">디저트</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[125px] w-[172px] rounded-xl bg-best">
                <Image
                  className="h-full w-full"
                  src={best}
                  alt="일품"
                  width={1024}
                  height={768}
                ></Image>
              </div>
              <p className="pt-5 text-base">일품</p>
            </div>
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
