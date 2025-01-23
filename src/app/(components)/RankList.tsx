import { useQuery } from "@tanstack/react-query";
import { recipeProps, searchProps } from "../type/recipe";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import getData from "@/app/util/getData";

export default function RankList({
  startIndex,
  endIndex,
  queryKey,
}: searchProps) {
  const {
    data: data,
    error,
    isError,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getData(startIndex, endIndex),
    staleTime: 300000,
  });

  if (isError) {
    // 에러 처리
    console.error("Error!:", error);
    return <div>Error occurred!</div>;
  }

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={100}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className=""
    >
      {data?.COOKRCP01.row.map((recipe: recipeProps) => (
        <SwiperSlide key={recipe.RCP_SEQ} className="mt-4">
          <div className="w-52 border border-none">
            <div className="h-40 w-full">
              <Image
                className="h-full w-full rounded-xl object-cover"
                src={recipe.ATT_FILE_NO_MK}
                alt={recipe.RCP_NM}
                width={450}
                height={450}
              ></Image>
            </div>
            <div className="h-[146px] w-full p-5">
              <p className="text-base font-semibold">{recipe.RCP_NM}</p>
              <p className="text-materialAdd line-clamp-2 pt-3 text-sm">
                {recipe.RCP_NA_TIP}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export const RankListLoading = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={150}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className=""
    >
      {Array.from({ length: 6 }).map((_, idx) => (
        <SwiperSlide className="" key={idx}>
          <div className="w-52 flex-none border border-none">
            <Skeleton height="160px" width="100%" />
            <div className="h-[146px] w-full p-5">
              <Skeleton width="50%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
