"use client";

import { faComment, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="rounded bg-blue-500 p-2 text-white"
      >
        Open Modal
      </button>

      <Dialog open={isOpen} onClose={closeModal}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <DialogPanel className="mx-4 w-full max-w-sm rounded bg-white p-3 shadow-lg">
            <div className="text-right">
              <button
                onClick={closeModal}
                className="h-8 w-8 rounded p-2 text-white"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  color="black"
                  className="text-base"
                />
              </button>
            </div>
            <DialogTitle className="mt-4 text-center text-base font-semibold">
              오늘의 레시피, 당신을 기다립니다!
            </DialogTitle>
            <Description className="mt-2 text-center text-gray-500">
              &quot;로그인하고, 더 맛있는 하루를 시작해보세요!&quot;
            </Description>
            <div className="mt-20 text-center">
              <button
                onClick={closeModal}
                className="w-full rounded bg-yellow-300 py-3 text-black"
              >
                <FontAwesomeIcon icon={faComment} />
                &nbsp; 카카오로 3초만에 로그인하기
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
