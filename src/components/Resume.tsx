"use client";

import { useContext } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { RiPokerDiamondsLine } from "react-icons/ri";
import { LayoutContext } from "./context";
import { EducationItem, WorkHistoryItem } from "@/types/translations";

export default function Resume() {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("LayoutContext must be used within a LayoutContext.Provider");

  const { translations } = context;
  const educationData = translations.education;
  const workHistoryData = translations.workHistory;

  return (
   <section className="py-10">
    <div className="max-w-[905px] ml-auto">
      <h2 className="text-4xl font-semibold mb-6 text-left ml-2">Resume</h2>

      {/* Education Section */}
      <section className="max-w-[685px] mb-14">
        <header className="flex flex-row text-start items-center gap-2 ml-2 mb-6">
          <FaGraduationCap className="text-yellow-500 text-2xl p-1 bg-[#333333] rounded" />
          <h3 className="text-[24px] font-semibold">Education</h3>
        </header>
        <Timeline data={educationData} type="education" />
      </section>

      {/* Work History Section */}
      <section className="max-w-[685px]">
        <header className="flex items-center gap-2 mb-6 ml-2">
          <FaBriefcase className="text-yellow-500 text-2xl p-1 bg-[#333333] rounded" />
          <h3 className="text-[24px] font-semibold">Work History</h3>
        </header>
        <Timeline data={workHistoryData} type="work" />
      </section>
    </div>
  </section>
  );
}

type TimelineProps = {
  data: EducationItem[] | WorkHistoryItem[];
  type: "education" | "work";
};

function Timeline({ data, type }: TimelineProps) {
  return (
    <div className="relative pl-10">
      {/* Decorative double bar */}
      <div className="absolute left-4 top-0 bottom-0 flex flex-col items-center z-0 border-y rounded-full border-gray-600 -mt-2.5">
        <div className="relative flex flex-col items-center h-full">
          <div className="flex gap-[3px] h-full">
            <div className="w-[2px] bg-[#646464]" />
            <div className="w-[2px] bg-[#646464]" />
          </div>
        </div>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="mb-12 relative z-10 animate-fadeInUp transition-opacity duration-700 ease-out"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="absolute -left-[29px] top-0 flex items-center justify-center">
            <div className="absolute w-3 h-3 bg-black rounded-full z-0" />
            <RiPokerDiamondsLine className="rotate-90 text-[16px] text-gray-600 relative z-10" />
          </div>

          <span className="inline-block text-[14px] border border-[#FFFFFF33] p-[6px] rounded text-white font-mono mb-2">
            {item.period}
          </span>

          <div className="bg-[#121414] p-4 rounded-md shadow-md transition-all duration-300 border border-transparent hover:border-gray-500 hover:shadow-yellow-500/20">
           <h4
              className="text-[18px] font-semibold bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent"
            >
              {type === "education"
                ? (item as EducationItem).university
                : (item as WorkHistoryItem).company}
            </h4>
            <p className="text-sm my-1 text-gray-400 mb-2">
              {type === "education"
                ? (item as EducationItem).degree
                : (item as WorkHistoryItem).role}
            </p>
            <hr className="border-gray-600 my-3" />
            <p className="text-gray-300 text-[16px]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
