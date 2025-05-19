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
  if (!context)
    throw new Error("LayoutContext must be used within a LayoutContext.Provider");

  const { language, setLanguage, translations, isRTL } = context
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
      className="flex justify-center items-start transition-colors duration-300"
    >
      <div className="w-full max-w-[1320px]">
        {/* Topbar */}
        {/* Topbar */}
      {/* Topbar */}
<div className="w-full bg-[#121414] dark:bg-zinc-900 border-b border-zinc-800 px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
  {/* Left: Name & Role */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-grow min-w-0">
    <h1 className="text-white text-lg sm:text-xl font-semibold truncate">
      Daryl <span className="text-yellow-400">Smith</span>
    </h1>
    <p className="text-gray-400 text-sm whitespace-nowrap">
      UI/UX Designer
    </p>
  </div>

  {/* Right: Controls */}
  <div className="flex items-center gap-5 flex-wrap justify-end min-w-0">
    <button
      type="button"
      aria-label="Go to Home"
      className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition text-sm sm:text-base font-medium whitespace-nowrap"
    >
      <MdHome className="text-xl sm:text-2xl" />
      <span className="hidden sm:inline">Home</span>
    </button>

    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      className="text-yellow-400 hover:text-yellow-300 transition text-xl sm:text-2xl"
    >
      {darkMode ? <BsSunFill /> : <BsMoonFill />}
    </button>

    <a
      href="/assets/Resume of Md Rashadul Islam.pdf"
      download="Resume of Md Rashadul Islam.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-r from-[#F5BD4D] to-[#F89222] hover:opacity-90 text-black font-semibold text-sm sm:text-base rounded-full px-4 py-1.5 whitespace-nowrap transition"
    >
      Talk To Me
    </a>
  </div>
</div>

        {/* Main layout */}
        <div className="bg-[#171B1A] dark:bg-zinc-900 grid grid-cols-1 md:grid-cols-[auto_68px_300px_1fr_68px_auto]">
          {/* Left gradient */}
          <div className="hidden md:block relative w-full h-full overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "linear-gradient(225deg, #171B1A 50%, #121414 50%)",
              }}
            />
          </div>

          {/* Side menu icons */}
          <div className="hidden md:flex relative max-w-[68px] w-full flex-col items-center justify-center py-8 overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "linear-gradient(225deg, #171B1A 50%, #121414 50%)",
              }}
            />
            <div className="relative z-10 flex flex-col gap-8">
              {sideMenuIcons.map((icon, i) => (
                <div
                  key={i}
                  className="text-gray-400 hover:text-yellow-400 text-2xl cursor-pointer transition-transform duration-300 hover:scale-110"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black dark:bg-zinc-800 max-w-[300px] w-full mx-auto flex flex-col justify-between items-center border border-transparent hover:border-[#f5bd4d8e] transition-all duration-300 rounded"
          >
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
                  className="text-gray-300 text-[16px] p-2 bg-[#121414] rounded-full transition duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 md:p-10 flex flex-col max-w-full justify-center"
          >
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
          </motion.div>

          {/* Right gradient and footer */}
          <div className="hidden md:flex relative max-w-[68px] w-full items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "linear-gradient(135deg, #171B1A 50%, #121414 50%)",
              }}
            />
            <div className="absolute top-10 inset-0 z-10 flex flex-col gap-32 justify-evenly items-center">
              <div className="rotate-90 origin-center text-[10px] lg:text-[12px] mt-24 text-gray-300 whitespace-nowrap">
                © design by themefisher developed by gethugothemes
              </div>
           <div className="flex flex-col items-center gap-3">
              {["fr", "en", "ar"].map((lang) => (
                <span
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`text-white text-[10px] px-2 py-1 rounded-full cursor-pointer transition
                ${
                  language === lang
                    ? "text-black"
                    : "bg-zinc-700 hover:bg-yellow-400 hover:text-black"
                }`}
              style={
                language === lang
                  ? { background: "linear-gradient(to right, #F5BD4D, #F89222)" }
                  : {}
              }
            >
              {lang.toUpperCase()}
            </span>
              ))}
            </div>
            </div>
          </div>

          {/* Right empty column for layout symmetry */}
          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}