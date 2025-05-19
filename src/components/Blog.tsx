"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { LayoutContext } from "./context";

const Blog: React.FC = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("LayoutContext must be used within a LayoutContext.Provider");

  const { translations } = context;
  const { blog } = translations;

  // Truncate description to 13 words
  const truncateDescription = (text: string, wordLimit: number = 13): string => {
    const words = text.trim().split(/\s+/);
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-0 ml-auto max-w-[1120px] w-full">
      <div className="max-w-[695px] mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-white text-center sm:text-left">
          Blog Posts
        </h2>

        {/* Blog Cards */}
        <div className="space-y-8 columns-1 sm:columns-2 gap-4">
          {blog.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`} passHref>
              <article className="group rounded-md overflow-hidden border border-black bg-black cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="p-6 text-white space-y-3">
                  <p className="text-sm opacity-70">{item.category} | {item.date}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-70">
                    {truncateDescription(item.description)}
                  </p>
                  <p className="text-xs italic opacity-50 border-t border-gray-700 pt-3">
                    — Posted By {item.author} —
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