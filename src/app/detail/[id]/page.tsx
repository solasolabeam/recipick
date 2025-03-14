"use client";
import Footer from "@/app/(components)/Footer";
import Header from "@/app/(components)/Header";
import useRecipeStore from "@/app/store";
import { recipeProps } from "@/app/type/recipe";
import getColor from "@/utills/getColor";
import getStoredRecipes from "@/utills/getStoredRecipes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { faHeart as offHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as onHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

//메인 이미지
// const food = "/assets/images/food.jpg";
// const chapter = "/assets/images/chapter.png";

export default function DetailPage() {
  const { data: session } = useSession();
  const [isPick, setIsPick] = useState(false);
  const selectedItem = useRecipeStore((state) => state.selectedItem); // 상태 가져오기

  useEffect(() => {
    const fetchBookmarks = async () => {
      const bookmarks = await doBookMarksSearch();

      setIsPick(
        bookmarks.some(
          (data: recipeProps) => data.RCP_SEQ == selectedItem.RCP_SEQ,
        ),
      );
    };
    if (session) {
      fetchBookmarks();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const recentItem = getStoredRecipes();

    recentItem.push(selectedItem);
    // 중복된 id 값 제거
    const uniqueData = recentItem.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.RCP_SEQ === value.RCP_SEQ),
    );

    localStorage.setItem("recipeItem", JSON.stringify(uniqueData));
  }, [selectedItem]);

  const doBookMarksSearch = async () => {
    try {
      const res = await fetch("/api/bookmarks");
      return await res.json();
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const handleClick = async () => {
    if (!session) {
      toast.error("로그인을 해주세요");
      return;
    }
    try {
      await fetch(`/api/bookmarks/${selectedItem.RCP_SEQ}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedItem),
      });

      setIsPick(!isPick);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-auto max-w-6xl sm:px-5">
      <div className="mx-5 mb-4 sm:mb-20">
        {/* 로고, 로그인, 마이페이지 */}
        <Header />
      </div>
      {/* 음식 상세이미지 */}
      <div className="flex flex-col gap-20 sm:flex-row sm:gap-20">
        <div>
          <section className="h-[250px] w-full">
            <Image
              className="h-full w-full object-cover"
              src={selectedItem.ATT_FILE_NO_MK}
              alt="음식"
              width={450}
              height={450}
            ></Image>
          </section>
          {/* 카테고리1,2 태그  */}
          <div className="px-5">
            <section className="mt-5 gap-2">
              <span
                className={`rounded border border-${getColor(selectedItem.RCP_PAT2)} bg-${getColor(selectedItem.RCP_PAT2)} px-4 py-2 text-white`}
              >
                {selectedItem.RCP_PAT2}
              </span>
              <span
                className={`ml-4 rounded border border-${getColor(selectedItem.RCP_PAT2)} px-4 py-2 text-${getColor(selectedItem.RCP_PAT2)}`}
              >
                {selectedItem.RCP_WAY2}
              </span>
            </section>
            {/* 타이틀, 재료 */}
            <section className="mt-5 gap-2">
              <div className="flex items-center justify-center gap-10">
                <p className="text-2xl font-bold">{selectedItem.RCP_NM}</p>
                <FontAwesomeIcon
                  icon={isPick ? onHeart : offHeart}
                  className="cursor-pointer text-xl text-red-400"
                  onClick={handleClick}
                />
              </div>
              <p className="mt-4 text-base font-bold">재료</p>
              <p className="mt-2 text-sm">{selectedItem.RCP_PARTS_DTLS}</p>
            </section>
            {/* 영양정보 */}
            <section className="mt-7 flex flex-col gap-3">
              <section className="flex">
                <p className="w-[100px] text-left text-sm">열량</p>
                <p className="w-20 text-right text-sm">{`${selectedItem.INFO_ENG}kcal`}</p>
              </section>
              <section className="flex">
                <p className="w-[100px] text-left text-sm">탄수화물</p>
                <p className="w-20 text-right text-sm">{`${selectedItem.INFO_CAR}g`}</p>
              </section>
              <section className="flex">
                <p className="w-[100px] text-left text-sm">단백질</p>
                <p className="w-20 text-right text-sm">{`${selectedItem.INFO_PRO}g`}</p>
              </section>
              <section className="flex">
                <p className="w-[100px] text-left text-sm">지방</p>
                <p className="w-20 text-right text-sm">{`${selectedItem.INFO_FAT}g`}</p>
              </section>
              <section className="flex">
                <p className="w-[100px] text-left text-sm">나트륨</p>
                <p className="w-20 text-right text-sm">{`${selectedItem.INFO_NA}g`}</p>
              </section>
            </section>
          </div>
        </div>
        {/* 요리 절차 */}
        <div className="px-5">
          <section className="flex flex-col gap-[120px]">
            <ManualList list={selectedItem} />
          </section>
          {/* 저염조리 TIP */}
          <section className="mt-36 h-auto w-auto rounded-lg border border-black p-5">
            <p className="text-base font-bold">TIP</p>
            <p className="mt-2 text-sm">{selectedItem.RCP_NA_TIP}</p>
          </section>
        </div>
      </div>

      {/* 푸터 디자인 */}
      <Footer />
    </div>
  );
}

const ManualList = ({ list }: { list: recipeProps }) => {
  const manualArray = [];
  for (let i = 1; i <= 20; i++) {
    const cnt = i < 10 ? `0${i}` : i;
    const discription = `MANUAL${cnt}` as keyof recipeProps;
    const img = `MANUAL_IMG${cnt}` as keyof recipeProps;

    manualArray.push({
      img: list[img],
      discription: list[discription],
    });
  }

  const render = manualArray.map((recipe) => {
    if (recipe.img != "" && recipe.discription != "") {
      return (
        <div className="flex flex-col gap-7" key={recipe.img}>
          <div className="h-[200px] w-auto max-w-[200px]">
            <Image
              className="h-full w-full rounded-md object-cover"
              src={recipe.img || "/default-image.jpg"} // 기본 이미지를 지정
              alt="챕터"
              width={196}
              height={130}
            />
          </div>
          <p className="text-sm">
            {recipe.discription
              ? recipe.discription.slice(3)
              : "설명이 없습니다."}
          </p>
        </div>
      );
    }
    return null;
  });

  return render;
};
