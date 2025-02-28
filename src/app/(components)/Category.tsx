"use client";

import Image from "next/image";
import useRecipeStore from "../store";
import { useRouter } from "next/navigation";

//카테고리 이미지
const rice = "/assets/images/rice.png";
const soup = "/assets/images/soup.png";
const sidedish = "/assets/images/sidedish.png";
const dessert = "/assets/images/dessert.png";
const best = "/assets/images/best.png";

export default function Category() {
  const router = useRouter();
  const setSelectedCategory = useRecipeStore(
    (state) => state.setSelectedCategory,
  );

  const handleClick = (name: string) => {
    setSelectedCategory(name);
    router.push("/list");
  };

  return (
    <div className="mt-4 grid grid-cols-2 items-start justify-start gap-4 sm:grid-cols-3">
      <div
        className="flex cursor-pointer flex-col items-center justify-center"
        onClick={() => handleClick("밥")}
      >
        <div className="aspect-[4/3] w-full rounded-xl bg-rice">
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
        className="flex cursor-pointer flex-col items-center justify-center"
        onClick={() => handleClick("국")}
      >
        <div className="aspect-[4/3] w-full rounded-xl bg-soup">
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
        className="flex cursor-pointer flex-col items-center justify-center"
        onClick={() => handleClick("반찬")}
      >
        <div className="aspect-[4/3] w-full rounded-xl bg-sideDish">
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
        className="flex cursor-pointer flex-col items-center justify-center"
        onClick={() => handleClick("후식")}
      >
        <div className="aspect-[4/3] w-full rounded-xl bg-dessert">
          <Image
            className="h-full w-full"
            src={dessert}
            alt="후식"
            width={1024}
            height={768}
          ></Image>
        </div>
        <p className="pt-5 text-base">후식</p>
      </div>
      <div
        className="flex cursor-pointer flex-col items-center justify-center"
        onClick={() => handleClick("일품")}
      >
        <div className="aspect-[4/3] w-full rounded-xl bg-best">
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
  );
}
