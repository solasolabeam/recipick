import {
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <section className="mt-9 flex items-center justify-between">
      <div className="text-5xl font-bold" onClick={() => router.push("/")}>
        LOGO
      </div>
      <section className="flex gap-5">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faArrowRightToBracket} size="2x" />
          <p className="text-xs">로그인</p>
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
  );
}
