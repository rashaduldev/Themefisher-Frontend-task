"use client";
import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "./context";
import { Skill } from "@/types/translations";

const Skills = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("LayoutContext must be used within a LayoutContext.Provider");

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
      className={`py-10 max-w-[905px] ${isRtl ? "mr-auto" : "ml-auto"}`}
      dir={direction}
    >
      <div className="max-w-[685px]">
        <h2
          className={`text-4xl font-semibold mb-6 ${
            isRtl ? "text-right mr-2" : "text-left ml-2"
          }`}
        >
          {translations.skills.skillsTitle || "Skills"}
        </h2>
        <ul className="space-y-5 px-2 md:px-4">
          {skills.map((skill, idx) => (
            <li key={idx}>
              <div className={`flex justify-between mb-1 ${isRtl ? "flex-row-reverse" : ""}`}>
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div
                className="w-full bg-gray-800 h-2 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={skill.value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-2 rounded-full transition-all duration-[1500ms] ease-in-out"
                  style={{
                    width: loaded ? `${skill.value}%` : "0%",
                    background: "linear-gradient(to right, #F5BD4D, #F89222)",
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
