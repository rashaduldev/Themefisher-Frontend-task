"use client";

import { useContext } from "react";
import { LayoutContext } from "./context";

type Plan = {
  title: string;
  price: string;
  features: { label: string; available: boolean }[];
  featured?: boolean;
};

const Pricing = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("LayoutContext must be used within a LayoutContext.Provider");

  const { translations } = context;
  const t = translations.pricing;

  const plans: Plan[] = t.plans;

  return (
    <section className="py-10 ml-auto max-w-[905px] px-2 md:px-4">
      <div className="max-w-[665px]">
        <h2 className="text-4xl font-semibold mb-10 text-white ml-2">{t.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-lg border border-gray-800 shadow-md"
            >
              {/* Make span start from very left by using negative margin */}
              <div className="-ml-6 mb-4">
                <span className="inline-block bg-yellow-900 text-yellow-400 text-sm font-medium px-3 py-1 rounded-r-full">
                  {plan.title}
                </span>
              </div>

              <div className="text-3xl font-bold mb-1">
                {plan.price} <span className="text-base font-normal">/ {t.month}</span>
              </div>

              <ul className="my-6 space-y-2 text-sm text-gray-200">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`${
                      feature.available ? "text-white" : "text-gray-500 line-through"
                    }`}
                  >
                    {feature.label}
                  </li>
                ))}
              </ul>

              <button className="w-[140px] py-2 rounded-md font-semibold border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
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