"use client";

import { useContext } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { RiPokerDiamondsLine } from "react-icons/ri";
import { LayoutContext } from "./context";
import { EducationItem, WorkHistoryItem } from "@/types/translations";
import education from "../../public/assets/icons/Education.svg";
import work from "../../public/assets/icons/work-history.svg";
import Image from "next/image";

export default function Resume() {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error(
      "LayoutContext must be used within a LayoutContext.Provider"
    );

  const { translations, isRTL } = context;
  const educationData = translations.education;
  const workHistoryData = translations.workHistory;

  return (
    <section className="py-10">
      <div className={`max-w-[835px] ${isRTL ? "mr-auto" : "ml-auto"}`}>
        <h2
          className={`text-[48px] font-bold leading-[100%] tracking-normal mb-6 ${
            isRTL ? "text-right mr-2" : "text-left ml-2"
          }`}
        >
          Resume
        </h2>
        {/* Education Section */}
        <section className="max-w-[685px] mb-14">
          <header
            className={`flex items-center gap-2 mb-6 ml-[6px] ${
              isRTL ? "text-right ml-2" : "text-left mr-2"
            }`}
          >
            <div className="w-[32px] h-[32px] bg-[#333333] flex items-center justify-center rounded">
              <Image
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
                src={education.src}
                alt="Education Icon"
              />
            </div>
            <h3 className="font-bold text-[24px] leading-[100%] tracking-[0%]">
              Education
            </h3>
          </header>

          <Timeline data={educationData} type="education" isRTL={isRTL} />
        </section>

        {/* Work History Section */}
        <section className="max-w-[685px]">
          <header
            className={`flex items-center gap-2 mb-6 ${
              isRTL ? "text-right mr-2" : "ml-2"
            }`}
          >
            <div className="w-[32px] h-[32px] bg-[#333333] flex items-center justify-center rounded">
              <Image
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
                src={work.src}
                alt="Education Icon"
              />
            </div>
            <h3 className="text-[24px] font-semibold">Work History</h3>
          </header>
          <Timeline data={workHistoryData} type="work" isRTL={isRTL} />
        </section>
      </div>
    </section>
  );
}

type TimelineProps = {
  data: EducationItem[] | WorkHistoryItem[];
  type: "education" | "work";
  isRTL: boolean;
};

function Timeline({ data, type, isRTL }: TimelineProps) {
  return (
    <div className={`relative ${isRTL ? "pr-10" : "pl-10"}`}>
      {/* Decorative double bar */}
      <div
        className={`absolute ${
          isRTL ? "right-4" : "left-4"
        } top-0 bottom-0 flex flex-col items-center z-0 border-y-[4px] rounded-full border-[#646464] -mt-2.5`}
      >
        <div className="relative flex flex-col items-center h-full">
          <div className="flex gap-[5px] h-full bg-[#171B1A]">
            <div className="w-[3px] bg-[#646464]" />
            <div className="w-[3px] bg-[#646464]" />
          </div>
        </div>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="mb-12 relative z-10 animate-fadeInUp transition-opacity duration-700 ease-out"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className={`absolute top-0 flex items-center justify-center ${
              isRTL ? "-right-[29px]" : "-left-[29px]"
            }`}
          >
            <div className="absolute w-3 h-3 bg-[#171B1A] rounded-full z-0" />
            <RiPokerDiamondsLine className="rotate-90 text-[22px] text-gray-600 relative z-10" />
          </div>

          <span className="inline-block border min-w-[87px] min-h-[26px] border-[#FFFFFF33] p-[6px] rounded text-white font-mono mb-2 font-bold text-[14px] leading-[100%] tracking-[0%]">
            {item.period}
          </span>
          <div
            className={`bg-[#121414] max-w-[646px] min-h-[154px] p-4 rounded-[8px] border-[#FFFFFF1A] shadow-md transition-all duration-300 border hover:border-gray-500 hover:shadow-yellow-500/20 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <h4 className="font-bold text-[18px] leading-[100%] tracking-[0%] bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent">
              {type === "education"
                ? (item as EducationItem).university
                : (item as WorkHistoryItem).company}
            </h4>
            <p className="font-normal text-[12px] leading-[100%] tracking-[0%] my-2 text-gray-400 mb-2">
              {type === "education"
                ? (item as EducationItem).degree
                : (item as WorkHistoryItem).role}
            </p>
            <hr className="border-gray-600 my-3" />
            <p className="font-normal text-[16px] leading-[140%] tracking-[0%] text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
