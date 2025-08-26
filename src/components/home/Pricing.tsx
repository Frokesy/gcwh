import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PricingCard from "../cards/PricingCard";
import { pricingData } from "../data/pricingData";

type PricingCategory =
  | "Web hosting"
  | "Email hosting"
  | "Wordpress hosting"
  | "LiteSpeed hosting";

const buttonItems: PricingCategory[] = [
  "Web hosting",
  "Wordpress hosting",
  "LiteSpeed hosting",
];
const Pricing = () => {
  const [activeCategory, setActiveCategory] =
    useState<PricingCategory>("Web hosting");

  return (
    <div className="lg:mt-10 w-[90vw] mx-auto py-20 flex flex-col lg:space-y-6 space-y-3 items-center justify-center">
      <div
        data-aos="fade-down"
        className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full"
      >
        <span>Simple, transparent pricing</span>
      </div>
      <h2
        data-aos="fade-up"
        className="lg:text-[48px] text-[20px] text-center font-semibold"
      >
        Select the best plan for your website
      </h2>
      <p data-aos="fade-up" className="lg:text-[20px] lg:w-[60%] text-center">
        Choose a hosting plan that fits your needs and budget. Whether you're
        starting small or scaling big, we've got the right option for you.
      </p>

      <div className="bg-[#fff] mt-10 lg:p-10 p-4 rounded-2xl w-[100%] flex flex-col lg:items-center">
        <div className="buttons flex items-center lg:space-x-6 text-[13px] lg:text-[14px] justify-center bg-[#f1f1f1] p-2 rounded-lg">
          {buttonItems.map((item, index) => {
            const firstWord = item.split(" ")[0];
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(item)}
                className={`${
                  activeCategory === item
                    ? "bg-[#fff] text-[#333] rounded-lg"
                    : "text-[#667085]"
                } cursor-pointer px-4 py-2 font-semibold`}
              >
                <span className="block lg:hidden">{firstWord}</span>
                <span className="hidden lg:block">{item}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="flex justify-between items-center w-[100%] mt-10">
              <h2 className="text-[#1A2E6C] lg:text-[30px] text-[18px] font-semibold">
                {pricingData[activeCategory].title}
              </h2>
              <button className="bg-[#182A62] text-white px-6 py-2 text-[16px] font-semibold rounded-lg">
                View all plans
              </button>
            </div>

            <div className="mt-20 grid lg:grid-cols-3 grid-cols-1 w-[100%] gap-6">
              {pricingData[activeCategory].plans.map((plan, idx) => (
                <PricingCard key={idx} {...plan} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Pricing;
