import { recipeProps } from "../type/recipe";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useRecipeStore from "../store";
import { useRouter } from "next/navigation";

export default function RankList({ data }: { data: recipeProps[] }) {
  const router = useRouter();

  const setSelectedItem = useRecipeStore((state) => state.setSelectedItem);

  const handleItemClick = (recipe: recipeProps) => {
    setSelectedItem(recipe);
    router.push(`/detail/${recipe.RCP_SEQ}`);
  };

  return (
    <Swiper
      // loop={true}
      slidesPerView={1.5}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mt-4 w-full"
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {data?.map((recipe: recipeProps) => (
        <SwiperSlide
          key={recipe.RCP_SEQ}
          className="w-full cursor-pointer"
          onClick={() => handleItemClick(recipe)}
        >
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export const RankListLoading = () => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mt-4 w-full"
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {Array.from({ length: 6 }).map((_, idx) => (
        <SwiperSlide className="w-full" key={idx}>
          <div className="w-full border border-none">
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
