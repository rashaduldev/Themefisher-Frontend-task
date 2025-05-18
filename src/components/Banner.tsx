"use client";

import { useContext, useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { MdHome, MdOutlinePermPhoneMsg } from "react-icons/md";
import { motion } from "framer-motion";
import { LayoutContext } from "./context";
import handsomeimage from "../../public/assets/handsome.png";
import { HiOutlineUser } from "react-icons/hi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Image from "next/image";
import { RxDownload } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";

const socialLinks = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaLinkedinIn />, url: "#" },
  { icon: <FaPinterestP />, url: "#" },
  { icon: <FaGithub />, url: "#" },
];

const sideMenuIcons = [
  <IoHomeOutline />,
  <HiOutlineUser />,
  <CgWorkAlt />,
  <TfiWrite />,
  <MdOutlinePermPhoneMsg />,
];

export default function ProfileCard() {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("LayoutContext must be used within a LayoutContext.Provider");

  const { translations, isRTL } = context;
  const PROFILEinfo = translations.PROFILE;
  const info = translations.info;

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true" || false;
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="flex justify-center items-start transition-colors duration-300 px-2 sm:px-4 md:px-6"
    >
      <div className="w-full max-w-[1320px]">
        <div className="w-full grid grid-cols-[44px_1fr] md:grid-cols-[44px_300px_1fr] bg-[#121414] dark:bg-zinc-900 border-b border-zinc-800 text-white px-4 sm:px-6">
          <div></div>
          <div className="relative flex">
            <div className="flex flex-col justify-center pr-4 py-3 md:pr-6 md:py-4 w-full">
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">
                Daryl<span className="text-yellow-400"> Smith</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-400">UI/UX designer</p>
            </div>
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-zinc-700" />
          </div>
          <div className="flex items-center justify-between pl-4 md:pl-6 py-3 md:py-4 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <MdHome className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] text-xl md:text-2xl rounded p-1 text-white" />
              <span className="text-base md:text-lg">Home</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className="text-lg md:text-xl text-yellow-400 hover:text-yellow-300 transition"
              >
                {darkMode ? <BsSunFill /> : <BsMoonFill />}
              </button>
              <a
                href="/assets/Resume of Md Rashadul Islam.pdf"
                download="Resume of Md Rashadul Islam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-1 md:px-4 md:py-1.5 rounded-full font-medium text-xs md:text-sm"
              >
                Talk To Me
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#171B1A] dark:bg-zinc-900 grid grid-cols-1 md:grid-cols-[auto_68px_300px_1fr_68px_auto]"
        >
          <div className="hidden md:block relative w-full h-full overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{ background: "linear-gradient(225deg, #171B1A 50%, #121414 50%)" }}
            />
          </div>

          <div className="hidden md:flex relative max-w-[68px] w-full flex-col items-center justify-center py-8 overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{ background: "linear-gradient(225deg, #171B1A 50%, #121414 50%)" }}
            />
            <div className="relative z-10 flex flex-col gap-8">
              {sideMenuIcons.map((icon, i) => (
                <div key={i} className="text-gray-400 hover:text-yellow-400 text-2xl cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black dark:bg-zinc-800 max-w-[300px] w-full mx-auto flex flex-col justify-between items-center">
            <Image
              height={400}
              width={300}
              src={handsomeimage}
              alt="Daryl Smith"
              className="w-full h-auto object-cover scale-[0.95]"
            />
            <div className="flex gap-2 py-4 flex-wrap justify-center">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="text-gray-300 text-[16px] p-2 bg-[#121414] rounded-full transition duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-10 flex flex-col max-w-full justify-center">
            <span className="text-yellow-400 uppercase tracking-widest text-xs sm:text-sm mb-2">
              {PROFILEinfo.INTRODUCTION}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-4 leading-tight text-white">
              {PROFILEinfo.CREATIVE_ROLE}
            </h1>
            <p className="text-sm sm:text-base text-[#FFFFFF] mb-2">
              {info.age} / {info.author} / {info.location}
            </p>
            <p className="text-[#C6C6C6] text-sm sm:text-base leading-relaxed mb-6">
              {info.description}
            </p>
            <a
              href="/assets/Resume of Md Rashadul Islam.pdf"
              download="Resume of Md Rashadul Islam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] hover:opacity-90 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold text-sm w-fit flex items-center gap-2 transition"
            >
              {PROFILEinfo.DOWNLOAD_CV}
              <RxDownload />
            </a>
          </div>

          <div className="hidden md:flex relative max-w-[68px] w-full items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{ background: "linear-gradient(135deg, #171B1A 50%, #121414 50%)" }}
            />
            <div className="absolute inset-0 z-10 flex flex-col gap-20 justify-evenly items-center">
              <div className="transform rotate-90 origin-center text-[10px] lg:text-[12px] mt-24 text-gray-300 whitespace-nowrap">
                © design by themefisher developed by gethugothemes
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="bg-zinc-700 text-white text-[10px] px-3 py-1 rounded-full">Fr</span>
                <span className="bg-yellow-500 text-white text-[10px] px-3 py-1 rounded-full">En</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block" />
        </motion.div>
      </div>
    </div>
  );
}
