export default function Home() {
  return (
    <div className="mx-5">
      <div className="mt-9 text-4xl font-bold">LOGO</div>
      <section className="mt-3 w-90 h-10 border-none rounded">
        <input
          className="w-full h-full bg-inputGray rounded text-xs p-4"
          placeholder="재료 또는 레시피 검색"
        />
      </section>
      <div className="mt-5 w-90 h-[230px] border-none bg-gray-200 rounded"></div>
      <section className="mt-16">
        <p className="text-xs">냉장고에 뭐가 있나요?</p>
      </section>
      <section className="flex flex-col gap-3 mt-3 items-center">
        <input
          type="text"
          placeholder="재료 입력"
          className="w-[312px] h-10 border-none bg-inputGray rounded text-xs p-4"
        />
        <button className="w-[312px] h-10 border-none bg-materialGet rounded text-white text-xs">
          불러오기
        </button>
        <button className="w-[312px] h-10 border-none bg-recipeFind rounded text-white text-xs">
          레시피 찾기
        </button>
      </section>
      <section className="mt-16">
        <div>
          <p className="text-2xl font-bold">추천 레시피</p>
        </div>
        <div className="mt-4">
          <div className="w-52 h-[220px] border border-black">
            <div className="w-full h-40 border-none bg-gray-200"></div>
            <div className="w-full h-[60px] pl-6">
              <p className="pt-3 text-base">된장찌개</p>
              <p className="pt-1 text-xs text-materialAdd">
                구수한 된장찌개 레시피
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div>
          <p className="text-2xl font-bold">인기 레시피</p>
        </div>
        <div className="mt-4">
          <div className="w-52 h-[220px] border border-black">
            <div className="w-full h-40 border-none bg-gray-200"></div>
            <div className="w-full h-[60px] pl-6">
              <p className="pt-3 text-base">김치찌개</p>
              <p className="pt-1 text-xs text-materialAdd">
                매콤한 한국 전통 찌개
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
