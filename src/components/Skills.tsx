"use client";
import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "./context";
import { Skill } from "@/types/translations";

const Skills = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error(
      "LayoutContext must be used within a LayoutContext.Provider"
    );

  const { translations } = context;

  const direction = translations.direction || "ltr";
  const isRtl = direction === "rtl";

  const skills: Skill[] = translations.skills.skillsList;

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`py-10 max-w-[835px] ${isRtl ? "mr-auto" : "ml-auto"}`}
      dir={direction}
    >
      <div className="max-w-[706px]">
        <h2
          className={`font-bold text-[48px] leading-[100%] tracking-[0%] mb-6 ${
            isRtl ? "text-right mr-2" : "text-left ml-2"
          }`}
        >
          {translations.skills.skillsTitle || "Skills"}
        </h2>
        <ul className="space-y-5 px-2 md:px-4">
          {skills.map((skill, idx) => (
            <li key={idx}>
              <div
                className={`flex justify-between mb-1 ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span className="font-medium text-[24px] leading-[120%] tracking-[0%] mb-2">
                  {skill.name}
                </span>
                <span
                  className="font-medium text-[20px] leading-[120%] text-center"
                  style={{
                    background: "linear-gradient(to right, #F5BD4D, #F89222)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {skill.value}%
                </span>
              </div>
              <div
                className="bg-[#5b3f1d] max-w-[670px] overflow-hidden"
                style={{
                  width: "685px",
                  height: "16px",
                  borderRadius: "25px",
                }}
                role="progressbar"
                aria-valuenow={skill.value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full transition-all duration-[1500ms] ease-in-out flex items-center justify-center text-white"
                  style={{
                    width: loaded ? `${skill.value}%` : "0%",
                    background: "linear-gradient(to right, #F5BD4D, #F89222)",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    textAlign: "center",
                  }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
