"use client";

import { useContext } from "react";
import { LayoutContext } from "./context";
import pricing from "../../public/assets/icons/pricing.svg";
import Image from "next/image";

type Plan = {
  title: string;
  price: string;
  features: { label: string; available: boolean }[];
  featured?: boolean;
};

const Pricing = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error(
      "LayoutContext must be used within a LayoutContext.Provider"
    );

  const { translations } = context;
  const t = translations.pricing;

  const plans: Plan[] = t.plans;

  return (
    <section className="py-10 ml-auto max-w-[835px] md:px-4">
      <div className="max-w-[674px]">
        <h2 className="text-4xl font-semibold mb-10 text-white ">
          {t.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
  <div
    key={index}
    className="relative bg-black text-white p-6 overflow-hidden"
  >
    {/* Background image on right */}
    <div className="absolute right-0 top-0 bottom-0 text-#121414 w-[160px] h-[124px] opacity-10 pointer-events-none">
      <Image
        // height={100}
        // width={100}
        src={pricing}
        alt="Pricing background"
        layout="fill"
        objectFit="contain"
        className="object-right"
      />
    </div>

    {/* Make span start from very left by using negative margin */}
    <div className="-ml-6 mb-4 z-10 relative">
      <span className="inline-block bg-[#f5bd4d62] text-[#FFFFFF] text-sm font-medium px-[24px] py-[12px] rounded-r-[50px]">
        {plan.title}
      </span>
    </div>
    <div className="text-3xl font-bold mb-1 z-10 relative">
      {plan.price}{" "}
      <span className="text-base font-normal">/ {t.month}</span>
    </div>

    <ul className="my-6 space-y-2 text-gray-200 bg-[#121414] p-4 font-normal text-base leading-[120%] tracking-[0%] z-10 relative">
      {plan.features.map((feature, idx) => (
        <li
          key={idx}
          className={`${
            feature.available
              ? "text-white"
              : "text-gray-500 line-through"
          }`}
        >
          {feature.label}
        </li>
      ))}
    </ul>

    <button
      className="border px-6 py-3 rounded-lg text-[#F5BD4D] border-yellow-400 hover:text-white z-10 relative transition-colors duration-300 cursor-pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(89.71deg, #F5BD4D 0.36%, #F89222 99.88%)";
        e.currentTarget.style.border = "none";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.border = "1px solid #FACC15";
      }}
    >
      {t.button}
    </button>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;
