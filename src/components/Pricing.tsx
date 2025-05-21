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

  const { translations, isRTL } = context;
  const t = translations.pricing;

  const plans: Plan[] = t.plans;

  return (
    <section
      className={`py-10 max-w-[835px] md:px-4 ${isRTL ? "ml-0 mr-auto" : "ml-auto mr-0"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[674px]">
        <h2
          className={`text-4xl font-semibold mb-10 text-white ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-black text-white p-6 overflow-hidden"
            >
              {/* Background image aligned for RTL or LTR */}
              <div
                className={`absolute top-0 bottom-0 h-[124px] w-[140px] opacity-10 pointer-events-none z-0 ${
                  isRTL ? "left-0" : "right-0"
                }`}
              >
                <Image
                  src={pricing}
                  alt="Pricing background"
                  width={140}
                  height={124}
                  className={`object-contain ${
                    isRTL ? "object-left" : "object-right"
                  }`}
                />
              </div>

              {/* Title badge with proper margin direction */}
              <div
                className={`mb-4 z-10 relative ${
                  isRTL ? "me-[-24px]" : "ms-[-24px]"
                }`}
              >
                <span
                  className={`inline-block bg-[#f5bd4d62] text-[#FFFFFF] text-sm font-medium px-[24px] py-[12px] ${
                    isRTL
                      ? "rounded-l-[50px] rounded-r-none md:-mr-8"
                      : "rounded-r-[50px] rounded-l-none"
                  }`}
                >
                  {plan.title}
                </span>
              </div>

              <div
                className={`text-3xl font-bold mb-1 z-10 relative ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {plan.price}{" "}
                <span className="text-base font-normal">/ {t.month}</span>
              </div>

              <ul
                className={`my-6 space-y-2 bg-[#121414] p-4 font-normal text-base leading-[120%] tracking-[0%] z-10 relative ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`${
                      feature.available
                        ? "text-white"
                        : "text-[#979797] line-through"
                    }`}
                  >
                    {feature.label}
                  </li>
                ))}
              </ul>

              <div className={`${isRTL ? "text-right" : "text-left"}`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
