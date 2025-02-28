"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";
import AllList from "../(components)/AllList";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useRecipeStore from "../store";

//메인 이미지
// const food = "/assets/images/food.jpg";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const selectedCategory = useRecipeStore((state) => state.selectedCategory);
  const selectedItemName = useRecipeStore((state) => state.selectedItemName);

  const handleSumbit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setItemName(input);
    }
  };

  const handleClick = () => {
    setItemName(input);
  };

  useEffect(() => {
    setCategory(selectedCategory);
    setItemName(selectedItemName);
    setInput(selectedItemName);
  }, [selectedCategory, selectedItemName]);

  const allListComponent = useMemo(
    () => (
      <AllList
        queryKey="allData"
        itemName={itemName}
        category={category}
        isSearch={true}
      />
    ),
    [itemName, category], // itemName, category 변경될 때만 새로 생성
  );
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-5 flex-grow">
        {/* 로고, 로그인, 마이페이지 */}
        <Header />
        {/* 상단 description */}
        <section className="mt-6 text-center">
          <p className="text-2xl font-bold">맛있는 레시피 탐험</p>
          <p className="mt-3 text-sm">
            다양한 요리법을 통해 새로운 맛을 경험해보세요
          </p>
        </section>

        <div className="mt-6 flex w-full flex-col items-center gap-4">
          {/* 카테고리 select */}
          <div className="min-h-[50px] w-full flex-1">
            <Select
              onValueChange={(value) =>
                value == "none" ? setCategory("") : setCategory(value)
              }
              value={category}
            >
              <SelectTrigger className="min-h-[50px] w-full">
                <SelectValue placeholder="전체" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>카테고리</SelectLabel>
                  <SelectItem value="none">전체</SelectItem>
                  <SelectItem value="밥">밥</SelectItem>
                  <SelectItem value="반찬">반찬</SelectItem>
                  <SelectItem value="국">국&찌개</SelectItem>
                  <SelectItem value="후식">후식</SelectItem>
                  <SelectItem value="일품">일품</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* 검색창 */}
          <section className="relative min-h-[60px] w-full flex-1 rounded border-none">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-5 h-5 w-5 cursor-pointer text-black"
              onClick={handleClick}
            />
            <input
              className="h-full min-h-[50px] w-full rounded-md bg-inputGray pl-10 text-base"
              placeholder="레시피 검색"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={handleSumbit}
            />
          </section>
        </div>
        {/* 레시피 검색 결과 */}
        <section className="mt-4">
          <div className="mt-4 flex flex-wrap gap-4">{allListComponent}</div>
        </section>
      </main>
      {/* 푸터 디자인 */}
      <Footer />
    </div>
  );
}
