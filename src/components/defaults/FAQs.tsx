import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "../svgs/Icons";

interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

interface FaqsProps {
  page: string;
  questions: QuestionProps[];
}

const FAQs = ({ page, questions }: FaqsProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-20">
      <div className="flex flex-col items-center lg:w-[60vw] w-[95vw] mx-auto text-center space-y-3">
        <h2 className="lg:text-[36px] text-[20px] font-semibold">
          {page} FAQs
        </h2>
        <p className="lg:text-[20px] text-gray-700">
          Everything you need to know about our {page}
        </p>
      </div>

      <div className="bg-[#fff] shadow-lg rounded-2xl p-6 space-y-6 mt-10 lg:w-[60vw] w-[95vw] mx-auto">
        {questions.map((item) => (
          <div key={item.id} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleQuestion(item.id)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="lg:text-[20px] font-semibold text-[#333]">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: openId === item.id ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <PlusIcon />
              </motion.div>
            </button>

            <AnimatePresence>
              {openId === item.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#666] lg:text-[16px] text-[13px] mt-3 leading-relaxed"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="lg:w-[90vw] w-[95vw] mx-auto bg-[#fff] p-6 rounded-2xl mt-10 py-10 flex flex-col items-center space-y-6 justify-center text-center">
        <img src="/assets/avatar-group.png" alt="avatar-group" />
        <h2 className="text-[20px]">Still have questions?</h2>
        <p className="text-[#858888] lg:text-[16px] text-[13px]">
          Can&apos;t find the answer you&apos;re looking for? Please chat with
          our friendly team.
        </p>
        <button className="bg-[#182A62] text-white px-6 py-2 text-[16px] font-semibold rounded-lg">
          <a href="mailto:support@goatclouds.com">Get in touch</a>
        </button>
      </div>
    </div>
  );
};

export default FAQs;
