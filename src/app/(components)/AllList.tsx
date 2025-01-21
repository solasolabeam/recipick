import { useRouter } from "next/navigation";
import { recipeProps, searchProps } from "../type/recipe";
import useRecipeStore from "../store";
import { useQuery } from "@tanstack/react-query";
import getData from "../util/getData";
import Image from "next/image";
import getColor from "../util/getColor";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AllList({
  startIndex,
  endIndex,
  queryKey,
}: searchProps) {
  const router = useRouter();
  const setSelectedItem = useRecipeStore((state) => state.setSelectedItem);
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

  const handleItemClick = (recipe: recipeProps) => {
    setSelectedItem(recipe);
    router.push(`/detail/${recipe.RCP_SEQ}`);
  };

  return data?.COOKRCP01.row.map((recipe: recipeProps) => (
    <div
      className="flex w-full cursor-pointer gap-5"
      key={recipe.RCP_SEQ}
      onClick={() => handleItemClick(recipe)}
    >
      <div className="h-[178px] w-[144px]">
        <Image
          className="h-full w-full rounded-lg object-cover"
          src={recipe.ATT_FILE_NO_MK}
          alt="음식"
          width={450}
          height={450}
        ></Image>
      </div>
      <div className="h-[178px] w-auto">
        <button
          className={`rounded bg-${getColor(recipe.RCP_PAT2)} px-3 py-2 text-xs text-white`}
        >
          {recipe.RCP_PAT2}
        </button>
        <p className="mt-2 text-base font-extrabold">{recipe.RCP_NM}</p>
        <p className="mt-2 line-clamp-2 w-52 text-sm">{recipe.RCP_NA_TIP}</p>
        <p className="mt-[30px] w-52 text-xs">{`칼로리 | ${recipe.INFO_ENG} kal`}</p>
      </div>
    </div>
  ));
}

export const AllListLoading = () => {
  return Array.from({ length: 4 }).map((_, idx) => (
    <div className="flex w-full gap-5" key={idx}>
      <div className="h-[178px] w-[144px]">
        <Skeleton height="100%" width="100%" />
      </div>
      <div className="h-[178px] w-auto">
        <Skeleton height={30} width={60} />
        <Skeleton className="mt-2" height={25} width={130} />
        <Skeleton className="mt-2" width="100%" />
        <Skeleton />
        <Skeleton className="mt-[30px]" width="40%" />
      </div>
    </div>
  ));
};
