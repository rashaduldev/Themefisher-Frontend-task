"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { LayoutContext } from "./context";
import img1 from "../../public/assets/icons/Line 120.svg";
import Image from "next/image";

const Blog: React.FC = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error(
      "LayoutContext must be used within a LayoutContext.Provider"
    );

  const { translations, isRTL } = context;
  const { blog } = translations;

  // Truncate description to 13 words
  const truncateDescription = (text: string, wordLimit = 13): string => {
    const words = text.trim().split(/\s+/);
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <section
      id="blogs"
      className={`py-14 lg:px-0 max-w-[964px] w-full ${
        isRTL ? "mr-auto" : "ml-auto"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[674px] mx-auto">
        <h2
          className={`font-bold text-[48px] leading-[100%] tracking-[0%] mb-8 text-white ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          Blog
        </h2>

        {/* Blog Cards */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {blog.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`} passHref>
              <article className="group cursor-pointer overflow-hidden border border-black bg-black mb-10 rounded-md">
                <Image
                  width={400}
                  height={400}
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6 text-white space-y-3">
                  <p className="font-normal text-xs opacity-70">
                    {item.category} | {item.date}
                  </p>
                  <h3 className="text-lg font-bold leading-[1.4]">{item.title}</h3>
                  <p className="text-sm font-normal opacity-70 leading-[1.4]">
                    {truncateDescription(item.description)}
                  </p>
                  <p className="flex items-center gap-2 text-sm font-normal leading-[1.3]">
                    <Image width={4} height={4} className="w-4" src={img1.src} alt="" />
                    Posted By {item.author}
                    <Image width={4} height={4} className="w-4" src={img1.src} alt="" />
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;