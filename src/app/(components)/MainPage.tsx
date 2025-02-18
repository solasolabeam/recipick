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
import { useIsFetching } from "@tanstack/react-query";
import AllList, { AllListLoading } from "./AllList";
import RankList, { RankListLoading } from "./RankList";
import { useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

//메인 이미지
const banner = "/assets/images/banner.png";
// const food = "/assets/images/food.jpg";
//카테고리 이미지
const rice = "/assets/images/rice.png";
const soup = "/assets/images/soup.png";
const sidedish = "/assets/images/sidedish.png";
const dessert = "/assets/images/dessert.png";
const best = "/assets/images/best.png";

export default function MainPage() {
  const router = useRouter();
  const isFetching = useIsFetching();

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
            <RankList startIndex={18} endIndex={23} queryKey="recommend" />
          )}
        </section>
        {/* 인기 레시피 */}
        <section className="mt-16">
          <div>
            <p className="text-2xl font-bold">인기 레시피</p>
          </div>
          {isFetching ? (
            /* 스켈레톤 로딩 */
            <RankListLoading />
          ) : (
            <RankList startIndex={12} endIndex={17} queryKey="popular" />
          )}
        </section>
        {/* 모든 레시피 한눈에 보기 */}
        <section className="mt-[80px]">
          <p className="text-2xl font-bold">모든 레시피 한눈에 보기</p>
          <div className="mt-4 flex flex-wrap gap-4">
            {isFetching ? (
              /* 스켈레톤 로딩 */
              <AllListLoading />
            ) : (
              <AllList startIndex={1} endIndex={6} queryKey="allData" />
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
          <div className="mt-4 flex flex-wrap gap-4">
            <div
              className="flex flex-col items-center"
              onClick={() => router.push("/list?category=밥")}
            >
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
            <div
              className="flex flex-col items-center"
              onClick={() => router.push("/list?category=국")}
            >
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
            <div
              className="flex flex-col items-center"
              onClick={() => router.push("/list?category=반찬")}
            >
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
            <div
              className="flex flex-col items-center"
              onClick={() => router.push("/list?category=후식")}
            >
              <div className="h-[125px] w-[172px] rounded-xl bg-dessert">
                <Image
                  className="h-full w-full"
                  src={dessert}
                  alt="디저트"
                  width={1024}
                  height={768}
                ></Image>
              </div>
              <p className="pt-5 text-base">후식</p>
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => router.push("/list?category=일품")}
            >
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
      <Footer />
    </>
  );
}
