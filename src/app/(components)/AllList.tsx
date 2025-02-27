"use client";

import { useRouter } from "next/navigation";
import { recipeProps, searchProps } from "../type/recipe";
import useRecipeStore from "../store";
import { useQuery } from "@tanstack/react-query";
import getData from "../../utills/getData";
import Image from "next/image";
import getColor from "../../utills/getColor";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as offHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as onHeart } from "@fortawesome/free-solid-svg-icons";

export default function AllList({
  queryKey = "allList",
  itemName = "",
  category = "",
  data = [],
  isSearch,
}: searchProps) {
  const [page, setPage] = useState(1);
  const rowPerPage = 6;

  // props에 startIndex, endIndex가 있으면 그대로 사용, 없으면 page 기반으로 계산
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(6);
  const [bookmark, setBookmark] = useState<recipeProps[]>([]);

  useEffect(() => {
    setPage(1);
  }, [itemName, category]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setStartIndex((newPage - 1) * rowPerPage + 1); // startIndex 업데이트
    setEndIndex((newPage - 1) * rowPerPage + 1 + (rowPerPage - 1)); // startIndex 업데이트
    setPage(newPage); // page 업데이트
  };

  const doBookMarksSearch = async () => {
    try {
      const res = await fetch("/api/bookmarks");
      return await res.json();
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    const fetchBookmarks = async () => {
      const bookmarks = await doBookMarksSearch();
      setBookmark(bookmarks);
    };
    fetchBookmarks();
  }, []);

  const memoizedQueryKey = useMemo(
    () => [queryKey, itemName, category, page],
    [queryKey, itemName, category, page],
  );

  const {
    data: fetchData,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: memoizedQueryKey,
    queryFn: () => getData(startIndex, endIndex, itemName, category),
    staleTime: 300000,
    enabled: isSearch,
  });

  if (isError) {
    // 에러 처리
    console.error("Error!:", error);
    return <div>Error occurred!</div>;
  }
  if (isLoading && isSearch) {
    return <AllListLoading />;
  }

  const totalPage = Math.floor(fetchData?.COOKRCP01.total_count / rowPerPage); // 총 페이지

  // data가 존재하면 그대로 사용하고, 없으면 fetchData 사용
  const recipes = data.length > 0 ? data : fetchData?.COOKRCP01.row || [];

  return (
    <>
      {recipes.map((recipe: recipeProps) => {
        return (
          <Card recipe={recipe} key={recipe.RCP_SEQ} bookmark={bookmark} />
        );
      })}
      {isSearch && (
        <Stack spacing={2} sx={{ mt: 5 }}>
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      )}
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

export const Card = ({
  recipe,
  bookmark,
}: {
  recipe: recipeProps;
  bookmark: recipeProps[];
}) => {
  const router = useRouter();
  const [isPick, setIsPick] = useState(true);
  const setSelectedItem = useRecipeStore((state) => state.setSelectedItem);

  const handleItemClick = (recipe: recipeProps) => {
    setSelectedItem(recipe);
    router.push(`/detail/${recipe.RCP_SEQ}`);
  };

  useEffect(() => {
    setIsPick(bookmark.some((data) => data.RCP_SEQ == recipe.RCP_SEQ));
  }, [bookmark, recipe.RCP_SEQ]);

  // ATT_FILE_NO_MK가 유효한 이미지 URL인지 확인하는 함수
  const getImageSrc = (src: string) => {
    return src && src !== "" ? src : "/assets/images/default.jpg"; // 대체 이미지 경로
  };

  const handleClick = async (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    try {
      await fetch(`/api/bookmarks/${recipe.RCP_SEQ}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });

      setIsPick(!isPick);
    } catch (error) {
      console.error("Error:", error);
    }
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
          src={getImageSrc(recipe.ATT_FILE_NO_MK)} // 이미지 경로 확인 후 사용
          alt="음식"
          width={200}
          height={178}
        />
      </div>

      {/* 텍스트 컨테이너 */}
      <div className="h-[178px] w-full flex-1">
        <div className="flex items-center justify-between">
          <button
            className={`rounded bg-${getColor(recipe.RCP_PAT2)} px-3 py-2 text-xs text-white`}
          >
            {recipe.RCP_PAT2}
          </button>

          <FontAwesomeIcon
            icon={isPick ? onHeart : offHeart}
            className="text-xl text-red-400"
            onClick={handleClick}
          />
        </div>
        <p className="mt-2 line-clamp-1 text-base font-extrabold">
          {recipe.RCP_NM}
        </p>
        <p className="mt-2 line-clamp-2 w-full text-sm">{recipe.RCP_NA_TIP}</p>
        <p className="mt-[30px] w-full text-xs">{`칼로리 | ${recipe.INFO_ENG} kal`}</p>
      </div>
    </div>
  );
};
