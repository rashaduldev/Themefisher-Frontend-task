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

  const { translations, isRTL } = context;
  const skills: Skill[] = translations.skills.skillsList || [];

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="skills"
      className={`py-10 max-w-[835px] ${isRTL ? "mr-auto" : "ml-auto"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[706px]">
        <h2
          className={`font-bold text-[48px] leading-[100%] tracking-[0%] mb-6 ${
            isRTL ? "text-right mr-2" : "text-left ml-2"
          }`}
        >
          {translations.skills.skillsTitle || "Skills"}
        </h2>
        <ul className="space-y-5 px-2 md:px-4">
       {skills.map((skill, idx) => (
        <li key={idx}>
          <div
            className={`flex justify-between mb-1 ${
              isRTL ? "flex-row" : ""
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
            className="bg-[#5b3f1d] h-[16px] rounded-2xl max-w-[670px] overflow-hidden relative"
            role="progressbar"
            aria-valuenow={skill.value}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${skill.name} skill proficiency is ${skill.value} percent`}
          >
            <div
              className="h-full rounded-full transition-all duration-[1500ms] ease-in-out flex items-center justify-center text-white absolute top-0 bottom-0"
              style={{
                width: loaded ? `${skill.value}%` : "0%",
                background: "linear-gradient(to right, #F5BD4D, #F89222)",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "120%",
                letterSpacing: "0%",
                textAlign: "center",
                right: isRTL ? 0 : "auto",
                left: isRTL ? "auto" : 0,
              }}
            />
          </div>
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;