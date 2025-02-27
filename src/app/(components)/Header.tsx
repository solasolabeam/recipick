import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import {
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { signOut, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleClick = () => {
    if (session) {
      signOut({ callbackUrl: "/" });
    } else {
      setIsOpen(true);
    }
  };

  const handleCheck = () => {
    if (session) {
      router.push("/mypage");
    } else {
      toast.error("로그인을 해주세요");
    }
  };

  return (
    <>
      <section className="mt-9 flex items-center justify-between">
        <div
          className="cursor-pointer text-5xl font-bold"
          onClick={() => router.push("/")}
        >
          LOGO
        </div>
        <section className="flex gap-5">
          <div
            className="flex cursor-pointer flex-col items-center"
            onClick={handleClick}
          >
            <FontAwesomeIcon
              icon={faArrowRightToBracket}
              className="text-3xl"
            />
            <p className="text-xs">{session ? "로그아웃" : "로그인"}</p>
          </div>
          <div
            className="flex cursor-pointer flex-col items-center"
            onClick={handleCheck}
          >
            <FontAwesomeIcon icon={faUser} className="text-3xl" />
            <p className="text-xs">My</p>
          </div>
        </section>
      </section>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ToastContainer />
    </>
  );
}
