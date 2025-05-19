"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaLink } from "react-icons/fa";

const portfolioData = [
  {
    id: 1,
    category: "Graphic Design",
    title: "Figma Mockup",
    description: "Figma mockup PSD editable",
    image:
      "https://res.cloudinary.com/de8yddexc/image/upload/v1747650966/front-end-task/grivjtwuoz7cksw1rw8b.png",
    live: "#",
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Mobile App UI",
    description: "Plant store mobile UI",
    image:
      "https://res.cloudinary.com/de8yddexc/image/upload/v1747650966/front-end-task/ehhihhxpoaofrd74mmfn.png",
    live: "#",
  },
  {
    id: 3,
    category: "Graphic Design",
    title: "Sticky Notes Design",
    description: "Office branding",
    image:
      "https://res.cloudinary.com/de8yddexc/image/upload/v1747650966/front-end-task/hkh7fb329mx2lfitqrph.png",
    live: "#",
  },
  {
    id: 5,
    category: "Graphic Design",
    title: "Shopping Bag Design",
    description: "Elegant packaging",
    image:
      "https://res.cloudinary.com/de8yddexc/image/upload/v1747650966/front-end-task/y1lo5u07ve5vk6ozwc8a.png",
    live: "#",
  },
  {
    id: 4,
    category: "UI/UX Design",
    title: "Smartwatch UI",
    description: "Modern wearable interface",
    image:
      "https://res.cloudinary.com/de8yddexc/image/upload/v1747650966/front-end-task/ff4h2hjdfadqjeyhc7uy.png",
    live: "#",
  },
  {
    id: 6,
    category: "Graphic Design",
    title: "Mug Mockup",
    description: "Product branding",
    image:
      "https://res.cloudinary.com/de8yddexc/image/upload/v1747650965/front-end-task/wj14cww01hups2pcfybd.png",
    live: "#",
  },
  {
    id: 7,
    category: "Photography",
    title: "Photography Layout",
    description: "Product shoot layout",
    image:
      "https://res.cloudinary.com/de8yddexc/image/upload/v1747650966/front-end-task/aucejk2fzmli1ilhdpgm.png",
    live: "#",
  },
  {
    id: 8,
    category: "UI/UX Design",
    title: "Website Design",
    description: "Fitness Studio Website",
    static: true,
  },
  {
    id: 9,
    category: "Photography",
    title: "Photography",
    description: "Photography Project",
    static: true,
  },
];

const categories = [
  "All",
  "Graphic Design",
  "Mobile App",
  "Photography",
  "UI/UX Design",
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const dynamicItems = portfolioData.filter((item) => !item.static);
  const staticItems = portfolioData.filter((item) => item.static);

  const filtered =
    active === "All"
      ? dynamicItems
      : dynamicItems.filter((item) => item.category === active);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-0 ml-auto max-w-[1120px] w-full">
      <div className="max-w-[695px] mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-white text-center sm:text-left">
          Portfolio
        </h2>

        {/* Category Filter */}
        <nav
          className="mb-8 flex flex-wrap gap-4 bg-black rounded-lg overflow-x-auto"
          aria-label="Portfolio Categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[16px] p-3 whitespace-nowrap cursor-pointer ${
                active === cat
                  ? "border-b-2 text-yellow-300 border-b-yellow-300"
                  : "text-white border-white/20"
              }`}
              aria-pressed={active === cat}
              type="button"
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Dynamic Items */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {filtered.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <div className="relative group overflow-hidden rounded-md border border-black bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-100 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 text-white bg-gray-600 rounded-full p-2 hover:text-gray-300"
                  >
                    <FaLink />
                  </a>
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-center">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {staticItems.map((item) => (
            <div
              key={item.id}
              className="bg-black rounded-md p-6 text-white relative flex flex-col justify-center items-center"
              style={{ height: 300 }}
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
              <div
                className="absolute top-3 right-3 text-white/70 hover:text-white transition-all cursor-pointer"
                aria-label={`More info about ${item.title}`}
                role="button"
                tabIndex={0}
              >
                <ExternalLink size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;