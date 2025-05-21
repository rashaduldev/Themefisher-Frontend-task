"use client";

import { useContext, useState } from "react";
import { FaLink } from "react-icons/fa";
import { LayoutContext } from "./context";
import Image from "next/image";

const Portfolio = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("LayoutContext must be used within a LayoutContext.Provider");
  }
  const { translations, isRTL } = context;

  const [activeCategory, setActiveCategory] = useState("All");

  // Separate dynamic and static items
  const dynamicItems = translations.portfolioData.filter((item) => !item.static);
  const staticItems = translations.portfolioData.filter((item) => item.static);

  // Filter based on active category
  const filteredItems =
    activeCategory === "All"
      ? dynamicItems
      : dynamicItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className={`py-10 lg:px-0 max-w-[950px] w-full ${isRTL ? "mr-auto" : "ml-auto"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[688px] mx-auto">
        <h2
          className={`font-bold text-[48px] leading-[100%] tracking-[0%] mb-8 text-white ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {translations.portfolioTitle}
        </h2>
        {/* Category Filter */}
          <nav
            className={`mb-8 bg-black rounded-[6px] overflow-x-auto min-h-[60px] ${
              isRTL ? "pr-10" : "pl-10"
            } scrollbar-hide`}
            style={{ boxShadow: "0px 10px 25px 0px #FFFFFF17" }}
            aria-label="Portfolio Categories"
          >
            <div className="flex w-max gap-4 px-4 py-2">
              {translations.portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-normal text-[16px] leading-[100%] tracking-[0%] p-3 whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? "border-b-2 text-yellow-300 border-b-yellow-300"
                      : "text-white border-white/20"
                  }`}
                  aria-pressed={activeCategory === cat}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </nav>
        {/* Dynamic Items */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4 max-w-[674px]">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <div className="relative group overflow-hidden bg-black">
                {item.image && (
                  <Image
                    height={400}
                    width={400}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4"
                  style={{ direction: isRTL ? "rtl" : "ltr" }}
                >
                  {/* Link icon on hover */}
                  <a
                    href={item.live ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute top-2 ${isRTL ? "left-2" : "right-2"} z-50 bg-black text-white hover:text-gray-300 rounded-full h-8 w-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ boxShadow: "0px 0px 6px 6px #FFFFFF0D" }}
                    aria-label={`More info about ${item.title}`}
                  >
                    <FaLink className="text-white text-base w-[16px] h-[16px] pointer-events-none" />
                  </a>

                  <h3 className="font-bold text-[20px] text-center mb-2">{item.title}</h3>
                  <p className="font-normal text-[16px] text-[#AFAFAF] text-center">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-[674px]">
          {staticItems.map((item) => (
            <div
              key={item.id}
              className="bg-black p-6 max-h-[204px] md:max-w-[332px] text-white relative flex flex-col justify-center items-center"
              style={{ height: 300 }}
            >
              <h3 className={`text-lg font-semibold mb-2 ${isRTL ? "text-center" : "text-left"}`}>
                {item.title}
              </h3>
              <p className={`text-sm text-white/70 ${isRTL ? "text-left" : "text-left"}`}>
                {item.description}
              </p>

              <a
                href={item.live ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-2 ${isRTL ? "left-2" : "right-2"} z-50 bg-black text-white hover:text-gray-300 rounded-full h-8 w-8 flex items-center justify-center opacity-100 transition-opacity duration-300`}
                style={{ boxShadow: "0px 0px 6px 6px #FFFFFF0D" }}
                aria-label={`More info about ${item.title}`}
              >
                <FaLink className="text-white text-base w-[16px] h-[16px] pointer-events-none" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;