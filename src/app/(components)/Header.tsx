import {
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  console.log("session", session);

  const handleClick = () => {
    if (session) {
      signOut();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <section className="mt-9 flex items-center justify-between">
        <div className="text-5xl font-bold" onClick={() => router.push("/")}>
          LOGO
        </div>
        <section className="flex gap-5">
          <div className="flex flex-col items-center" onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowRightToBracket} size="2x" />
            <p className="text-xs">{session ? "로그아웃" : "로그인"}</p>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => router.push("/mypage")}
          >
            <FontAwesomeIcon icon={faUser} size="2x" />
            <p className="text-xs">My</p>
          </div>
        </section>
      </section>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
