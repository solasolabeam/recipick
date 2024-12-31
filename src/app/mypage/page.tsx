"use client";
import {
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyPage() {
  return (
    <>
      <div className="mx-5">
        {/* 로고, 로그인, 마이페이지 */}
        <section className="mt-9 flex items-center justify-between">
          <div className="text-5xl font-bold">LOGO</div>
          <section className="flex gap-5">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faArrowRightToBracket} size="2x" />
              <p className="text-xs">로그인</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faUser} size="2x" />
              <p className="text-xs">My</p>
            </div>
          </section>
        </section>
        {/* 사용자 정보 */}
        <section className="mt-12 flex gap-5">
          <div className="h-[100px] w-[100px] flex-shrink-0 rounded-[100%] bg-Gray20"></div>
          <div className="w-auto">
            <section className="mt-5">
              <p className="text-xl font-bold">김민수</p>
              <p className="mt-1 text-base text-Gray30">minsu@gmail.com</p>
              <p className="mt-3 text-xs">
                요리와 여행을 사랑하는 미식가입니다. 새로운 레시피를 공유하고
                싶어요!
              </p>
            </section>
          </div>
        </section>
        {/* 최근 본, 북마크 탭 */}
        <section className="mt-20 flex justify-center gap-2">
          <span className="border-b border-black px-5 py-3">최근 본</span>
          <span className="px-5 py-3">북마크</span>
        </section>
      </div>
      {/* 푸터 디자인 */}
      <section className="mt-40 flex h-20 w-full items-center bg-Gray20">
        <p className="pl-5 text-sm">© 2024 Recipick. All rights reserved.</p>
      </section>
    </>
  );
}
