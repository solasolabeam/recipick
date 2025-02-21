"use client";

import { useRouter } from "next/navigation";
import { recipeProps, searchProps } from "../type/recipe";
import useRecipeStore from "../store";
import { useQuery } from "@tanstack/react-query";
import getData from "../util/getData";
import Image from "next/image";
import getColor from "../util/getColor";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

export default function AllList({
  startIndex: propStartIndex,
  endIndex: propEndIndex,
  queryKey = "allList",
  itemName = "",
  category = "",
  data = [],
  isSearch,
}: searchProps) {
  const [page, setPage] = useState(1);
  const rowPerPage = 6;

  // props에 startIndex, endIndex가 있으면 그대로 사용, 없으면 page 기반으로 계산
  const startIndex =
    propStartIndex !== undefined ? propStartIndex : (page - 1) * rowPerPage;
  const endIndex =
    propEndIndex !== undefined ? propEndIndex : startIndex + rowPerPage;

  const {
    data: fetchData,
    error,
    isError,
  } = useQuery({
    queryKey: [queryKey, itemName, category, startIndex, endIndex],
    queryFn: () => getData(startIndex, endIndex, itemName, category),
    staleTime: 300000,
    enabled: isSearch, // 빈 배열일 때만 활성화
  });

  console.log("data[]", data);

  if (isError) {
    // 에러 처리
    console.error("Error!:", error);
    return <div>Error occurred!</div>;
  }

  const totalPage = fetchData.COOKRCP01.total_count / rowPerPage; // 총 페이지

  // data가 존재하면 그대로 사용하고, 없으면 fetchData 사용
  const recipes = data.length > 0 ? data : fetchData?.COOKRCP01.row || [];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      {recipes.map((recipe: recipeProps) => {
        return <Card recipe={recipe} key={recipe.RCP_SEQ} />;
      })}
      <Stack spacing={2} sx={{ mt: 10 }}>
        <Pagination
          count={totalPage}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChangePage}
        />
      </Stack>
    </>
  );
}

export const AllListLoading = () => {
  return Array.from({ length: 4 }).map((_, idx) => (
    <div className="flex w-full gap-5" key={idx}>
      <div className="h-[178px] w-[140px] flex-1">
        <Skeleton height="100%" width="100%" />
      </div>
      <div className="h-[178px] flex-1">
        <Skeleton height={30} width={60} />
        <Skeleton className="mt-2" height={25} width={130} />
        <Skeleton className="mt-2" width="100%" />
        <Skeleton />
        <Skeleton className="mt-[30px]" width="40%" />
      </div>
    </div>
  ));
};

export const Card = ({ recipe }: { recipe: recipeProps }) => {
  const router = useRouter();
  const setSelectedItem = useRecipeStore((state) => state.setSelectedItem);

  const handleItemClick = (recipe: recipeProps) => {
    setSelectedItem(recipe);
    router.push(`/detail/${recipe.RCP_SEQ}`);
  };

  return (
    <div
      className="flex w-full cursor-pointer flex-wrap gap-5"
      onClick={() => handleItemClick(recipe)}
    >
      {/* 이미지 컨테이너 */}
      <div className="h-[178px] w-[140px] flex-1">
        <Image
          className="h-full w-full rounded-lg object-cover"
          src={recipe.ATT_FILE_NO_MK}
          alt="음식"
          width={200}
          height={178}
        />
      </div>

      {/* 텍스트 컨테이너 */}
      <div className="h-[178px] w-full flex-1">
        <button
          className={`rounded bg-${getColor(recipe.RCP_PAT2)} px-3 py-2 text-xs text-white`}
        >
          {recipe.RCP_PAT2}
        </button>
        <p className="mt-2 text-base font-extrabold">{recipe.RCP_NM}</p>
        <p className="mt-2 line-clamp-2 w-full text-sm">{recipe.RCP_NA_TIP}</p>
        <p className="mt-[30px] w-full text-xs">{`칼로리 | ${recipe.INFO_ENG} kal`}</p>
      </div>
    </div>
  );
};
