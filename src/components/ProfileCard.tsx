"use client";

import { useContext, useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { LayoutContext } from "./context";
import handsomeimage from "../../public/assets/handsome.png";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Image from "next/image";
import download from "../../public/assets/icons/download.svg";
import home from "../../public/assets/icons/Home.svg";
import img1 from "../../public/assets/icons/active-home.svg";
import img2 from "../../public/assets/icons/profile-about.svg";
import img3 from "../../public/assets/icons/portfolio.svg";
import img4 from "../../public/assets/icons/blog.svg";
import img5 from "../../public/assets/icons/contact.svg";
import Link from "next/link";

const socialLinks = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaLinkedinIn />, url: "#" },
  { icon: <FaPinterestP />, url: "#" },
  { icon: <FaGithub />, url: "#" },
];

const sideMenuIcons = [
  {
    img: img1,
    alt: "Home",
    href: "/",
  },
  {
    img: img2,
    alt: "Resume",
    href: "#resume",
  },
  {
    img: img3,
    alt: "Portfolio",
    href: "#portfolio",
  },
  {
    img: img4,
    alt: "Blogs",
    href: "#blogs",
  },
  {
    img: img5,
    alt: "Contact",
    href: "#contact",
  },
];
export default function ProfileCard() {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error(
      "LayoutContext must be used within a LayoutContext.Provider"
    );

  const { language, setLanguage, translations, isRTL } = context;
  const PROFILEinfo = translations.PROFILE;
  const info = translations.info;

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
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
      <div className="w-full max-w-[1320px] relative z-10">
        {/* Background text behind */}
        <h1 className="absolute -top-10 -left-20 text-7xl font-bold leading-[100%] tracking-[0] text-[#ffffff30] select-none pointer-events-none w-[257px] h-[90px] z-0">
          Home
        </h1>
        {/* Topbar */}
        <div className="w-full grid grid-cols-[36px_1fr] sm:grid-cols-[44px_1fr] md:grid-cols-[42px_368px_1fr] bg-[#121414] dark:bg-[#121414] text-white px-3 sm:px-4 md:px-6 z-50 relative">
          <div></div>
          <div className="relative flex">
            <div className="flex flex-col justify-center -ml-6 md:-ml-0 pr-3 py-3 sm:pr-4 sm:py-4 md:pr-6 md:py-4 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold leading-[100%] flex items-center gap-1 sm:gap-2">
                Daryl
                <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent">
                  Smith
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-[18px] text-[#C2C2C2] mt-1 sm:mt-2">
                UI/UX designer
              </p>
            </div>
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-zinc-700" />
          </div>

          <div className="flex items-center justify-between w-[355px] md:w-full pl-3 sm:pl-4 md:pl-6 py-3 md:py-4 flex-wrap gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-gradient-to-r from-[#F5BD4D] to-[#F89222] flex items-center justify-center text-white p-1">
                <Image
                  height={20}
                  width={20}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  src={home.src}
                  alt=""
                />
              </span>
              <span className="text-xl sm:text-2xl font-bold">Home</span>
            </div>
            <div className="flex flex-row-reverse items-center gap-2 sm:gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className="text-lg md:text-xl text-yellow-400 hover:text-yellow-300 transition"
              >
                {darkMode ? <BsSunFill /> : <BsMoonFill />}
              </button>
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center
                w-auto h-[42px] sm:h-[45px] rounded-[50px] border border-transparent
                px-4 sm:px-6 py-2 gap-2 font-bold text-sm sm:text-[16px]
                text-transparent whitespace-nowrap"
                style={{
                  background: "linear-gradient(to right, #F5BD4D, #F89222)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span
                  className="absolute inset-0 rounded-[50px]"
                  style={{
                    padding: "1px",
                    background: "linear-gradient(to right, #F5BD4D, #F89222)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                  }}
                />
                Talk To Me
              </a>
            </div>
          </div>
        </div>
        {/* Main layout */}
        <div className="bg-[#171B1A] dark:bg-[#171B1A] grid grid-cols-1 md:grid-cols-[auto_68px_365px_1fr_68px_auto]">
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
                <Link
                  key={i}
                  href={icon.href}
                  className="text-gray-400 hover:text-yellow-400 text-2xl cursor-pointer transition-transform duration-300 hover:scale-110 w-[32px] h-[32px]"
                >
                  <Image
                    src={icon.img}
                    alt={icon.alt}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black dark:bg-black w-full max-w-[368px] mx-auto flex flex-col justify-between items-center border border-transparent hover:border-[#f5bd4d8e] transition-all duration-300"
          >
            {/* Image section */}
            <div className="relative w-full h-[504px] overflow-hidden">
              <Image
                height={504}
                width={368}
                src={handsomeimage}
                alt="Daryl Smith"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social icons container */}
            <div
              className="flex gap-2 py-4 px-4 flex-wrap justify-center w-full relative z-10 dark:bg-zinc-800 overflow-x-auto"
              style={{
                boxShadow: `
                -10px -10px 30px rgba(255, 255, 255, 0.1),  
                10px -10px 30px rgba(255, 255, 255, 0.1),   
                0px -15px 40px rgba(255, 255, 255, 0.01)     
              `,
              }}
            >
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
            className="flex flex-col w-full px-4 md:px-0 max-w-[611px] md:ml-12 justify-center mt-10 md:mt-0"
          >
            <span className="font-bold text-[14px] md:text-[16px] leading-[100%] tracking-[0%] bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent uppercase mb-2">
              {PROFILEinfo.INTRODUCTION}
            </span>
            <h1 className="text-[32px] md:text-[48px] leading-[130%] tracking-normal font-bold mb-4 text-white">
              {PROFILEinfo.CREATIVE_ROLE}
            </h1>
            <p className="text-sm md:text-base font-bold leading-[140%] tracking-normal text-white mb-4">
              {info.age} / {info.author} / {info.location}
            </p>
            <p className="text-[#C6C6C6] my-5 text-sm md:text-base font-medium leading-[120%] tracking-normal mb-6 max-w-full">
              {info.description}
            </p>
           <a
            href="/assets/Resume of Md Rashadul Islam.pdf"
            download="Rashadul-Islam-CV.pdf"
            rel="noopener noreferrer"
            className="bg-gradient-to-r mt-5 from-[#F5BD4D] to-[#F89222] hover:opacity-90 text-white w-fit px-6 py-3 rounded-[50px] font-bold text-base leading-[100%] tracking-normal flex items-center gap-[10px] transition"
          >
            {PROFILEinfo.DOWNLOAD_CV}
            <Image
              height={18}
              width={20}
              className="w-5 h-[18px]"
              src={download.src}
              alt="download"
            />
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
              <div
                className="rotate-90 origin-center text-gray-300 whitespace-nowrap mt-24"
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                © design by themefisher developed by gethugothemes
              </div>
              <div className="flex flex-col items-center gap-3">
                {["fr", "en", "ar"].map((lang) => (
                  <span
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`w-[32px] h-[32px] text-white text-[10px] px-2 py-1 rounded-full cursor-pointer transition flex items-center justify-center ${
                      language === lang
                        ? "text-black"
                        : "bg-zinc-700 hover:bg-yellow-400 hover:text-black"
                    }`}
                    style={
                      language === lang
                        ? {
                            background:
                              "linear-gradient(to right, #F5BD4D, #F89222)",
                          }
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
