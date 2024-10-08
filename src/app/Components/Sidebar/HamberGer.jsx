import Link from "next/link";
import { useState } from "react";
import { CloseBtn } from "../(Buttons)/Buttons";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50 flex items-center justify-end mt-1">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 ease-in-out bg-transparent border-none rounded-full outline-none cursor-pointer group md:hidden hover:scale-105"
      >
        <div className="flex flex-col items-center justify-center">
          <span className="block w-6 h-0.5 bg-teal-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-teal-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-teal-700"></span>
        </div>
      </button>

      {isOpen && (
        <div className="">
          <div className="absolute right-0 z-10 p-3 pt-0 ml-4 bg-[#1F2937] bg-opacity-50 rounded-md shadow-lg top-12 w-52 md:hidden backdrop-blur-sm">
            <div className="p-2 mt-1" onClick={handleCloseBtn}>
              <CloseBtn />
            </div>

            <ul>
              <li className="hambergerHover">
                <Link href={"/"}>
                  <p>Home</p>
                </Link>
              </li>
              <li className="hambergerHover">
                <a href="https://www.blogger.com/" target="_blank">
                  <p>Blog</p>
                </a>
              </li>
              <li className="hambergerHover">
                <Link href={"/Components/ReportForm"}>
                  <p>Report Us</p>
                </Link>
              </li>
              <li className="hambergerHover">
                <a href={""}>
                  <p>About Us</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="hidden gap-7 md:flex md:static">
        <Link href="/">
          <p className="p-hover">Home</p>
        </Link>

        <a href="https://www.blogger.com/" target="_blank">
          <p className="p-hover">{"BLog's"}</p>
        </a>

        <a href={""}>
          <p className="p-hover ">About Us</p>
        </a>
        
        <Link href={"/Components/ReportForm"}>
          <p className="p-hover ">Report Us</p>
        </Link>
      </div>
    </div>
  );
}
