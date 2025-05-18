"use client";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { RiPokerDiamondsLine } from "react-icons/ri";

const educationData = [
  {
    period: "2016–2020",
    university: "Harvard University",
    degree: "B.A. and M.S., Computer Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
  },
  {
    period: "2014–2016",
    university: "Helwan University",
    degree: "Bachelor Degree",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
  },
];

const workHistoryData = [
  {
    period: "2021–Present",
    company: "Google",
    role: "Senior Software Engineer",
    description:
      "Worked on scalable front-end applications and improved UI/UX across multiple products.",
  },
  {
    period: "2020–2021",
    company: "Facebook",
    role: "Frontend Developer",
    description:
      "Built responsive React components and maintained company web presence.",
  },
];

export default function Resume() {
  return (
    <section className="w-full max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-zinc-900 text-white py-10">
      <div className="max-w-[905px] ml-auto">
        <h2 className="text-2xl font-semibold mb-6 text-left">Resume</h2>

        {/* Education Section */}
        <div className="max-w-[685px] mb-14">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold">Education</h3>
            <FaGraduationCap className="text-yellow-500 text-lg" />
          </div>

          <Timeline data={educationData} type="education" />
        </div>

        {/* Work History Section */}
        <div className="max-w-[685px]">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold">Work History</h3>
            <FaBriefcase className="text-yellow-500 text-lg" />
          </div>

          <Timeline data={workHistoryData} type="work" />
        </div>
      </div>
    </section>
  );
}

function Timeline({ data, type }) {
  return (
    <div className="relative pl-10">
      {/* Decorative double bar */}
      <div className="absolute left-4 top-0 bottom-0 flex flex-col items-center z-0 border-y rounded-full border-gray-600">
        <div className="relative flex flex-col items-center h-full">
          <div className="flex gap-[3px] h-full">
            <div className="w-[2px] bg-gray-600" />
            <div className="w-[2px] bg-gray-600" />
          </div>
        </div>
      </div>

      {data.map((item, index) => (
        <div key={index} className="mb-12 relative z-10">
          {/* Icon */}
          <div className="absolute -left-[29px] top-0 flex items-center justify-center">
            <div className="absolute w-3 h-3 bg-black rounded-full z-0" />
            <RiPokerDiamondsLine className="rotate-90 text-[16px] text-gray-600 relative z-10" />
          </div>

          {/* Period */}
          <span className="block text-xs text-gray-400 font-mono mb-2">{item.period}</span>

          {/* Content */}
          <div className="bg-gray-800 p-4 rounded-md shadow-md">
            <h4 className="text-yellow-500 font-semibold">
              {type === "education" ? item.university : item.company}
            </h4>
            <p className="text-sm italic text-gray-400 mb-2">
              {type === "education" ? item.degree : item.role}
            </p>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
