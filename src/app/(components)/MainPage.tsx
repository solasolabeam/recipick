"use client";
import {
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import "swiper/css";
import "react-loading-skeleton/dist/skeleton.css";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import AllList, { AllListLoading } from "./AllList";
import RankList, { RankListLoading } from "./RankList";
import { useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import { useMemo } from "react";

//메인 이미지
const banner = "/assets/images/banner.png";
// const food = "/assets/images/food.jpg";

const fetchData = async () => {
  const res = await fetch(
    "https://openapi.foodsafetykorea.go.kr/api/de77957df6d04d03a521/COOKRCP01/json/1/18",
  );

  const data = await res.json();
  return data;
};

export default function MainPage() {
  const router = useRouter();
  const isFetching = useIsFetching();

  const { data } = useQuery({
    queryKey: ["main"],
    queryFn: fetchData,
    staleTime: 2 * 60 * 1000,
  });

  // useMemo로 최적화
  const [first, second, third] = useMemo(() => {
    if (!data || data.length < 18) return [[], []];
    return [
      data.COOKRCP01.row.slice(0, 6),
      data.COOKRCP01.row.slice(6, 12),
      data.COOKRCP01.row.slice(12, 18),
    ];
  }, [data]);

  return (
    <>
      <div className="mx-5">
        {/* 로고, 로그인, 마이페이지 */}
        <Header />
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
          {isFetching ? (
            /* 스켈레톤 로딩 */
            <RankListLoading />
          ) : (
            <RankList data={third} />
          )}
        </section>
        {/* 인기 레시피 */}
        <section className="mt-16">
          <div>
            <p className="text-2xl font-bold">인기 레시피</p>
          </div>
          {<RankList data={second} />}
        </section>
        {/* 모든 레시피 한눈에 보기 */}
        <section className="mt-[80px]">
          <p className="text-2xl font-bold">모든 레시피 한눈에 보기</p>
          <div className="mt-4 flex flex-wrap gap-4">
            {isFetching ? (
              /* 스켈레톤 로딩 */

              <AllListLoading />
            ) : (
              <AllList data={first} isSearch={false} />
            )}
          </div>
          {/* More 버튼 */}
          <div className="mt-10 flex justify-center">
            <div
              className="flex h-12 w-20 cursor-pointer items-center justify-center gap-2 rounded border border-Gray30"
              onClick={() => router.push("/list")}
            >
              <p className="text-sm text-Gray40">More</p>
              <FontAwesomeIcon icon={faArrowRight} color="#656565" />
            </div>
          </div>
        </section>
        {/* 카테고리별 레시피 */}
        <section className="mt-[80px]">
          <p className="text-2xl font-bold">카테고리별 레시피</p>
          <Category />
        </section>
      </div>
      {/* 푸터 디자인 */}
      <Footer />
    </>
  );
}
