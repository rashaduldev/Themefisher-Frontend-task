"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { LayoutContext } from "./context";
import img1 from "../../public/assets/icons/Line 120.svg";
const Blog: React.FC = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error(
      "LayoutContext must be used within a LayoutContext.Provider"
    );

  const { translations } = context;
  const { blog } = translations;

  // Truncate description to 13 words
  const truncateDescription = (
    text: string,
    wordLimit: number = 13
  ): string => {
    const words = text.trim().split(/\s+/);
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-0 ml-auto max-w-[964px] w-full ">
      <div className="max-w-[674px] mx-auto">
        <h2 className="font-bold text-[48px] leading-[100%] tracking-[0%] mb-8 text-white text-center sm:text-left">
          Blog Posts
        </h2>
        {/* Blog Cards */}
        <div className="space-y-8 columns-1 sm:columns-2 gap-4">
          {blog.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`} passHref>
              <article className="group overflow-hidden border border-black bg-black cursor-pointer mb-16">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="p-6 text-white space-y-3">
                  <p className="font-normal text-xs leading-[100%] tracking-[0%] opacity-70">
                    {item.category} | {item.date}
                  </p>
                  <h3 className="text-lg font-bold leading-[1.4]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-[1.4] opacity-70">
                    {truncateDescription(item.description)}
                  </p>
                  <p className="text-sm font-normal leading-[1.3] flex items-center gap-2">
                    <img className="w-4" src={img1.src} alt="" />
                    Posted By {item.author}
                    <img className="w-4" src={img1.src} alt="" />
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
