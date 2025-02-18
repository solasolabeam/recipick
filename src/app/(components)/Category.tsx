"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

//카테고리 이미지
const rice = "/assets/images/rice.png";
const soup = "/assets/images/soup.png";
const sidedish = "/assets/images/sidedish.png";
const dessert = "/assets/images/dessert.png";
const best = "/assets/images/best.png";

export default function Category() {
  const router = useRouter();

  return (
    <div className="mt-4 flex flex-wrap items-start justify-start gap-4">
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
  );
}
