import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "../svgs/Icons";

const FAQs = () => {
  const questions = [
    {
      id: 1,
      question: "What is a dedicated server?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 2,
      question: "Who should use a dedicated server?",
      answer:
        "Businesses and developers who need high performance, full control, and better security should use a dedicated server. It’s ideal for large websites, applications, and enterprises with heavy traffic.",
    },
    {
      id: 3,
      question: "What is the difference between a VPS and a dedicated server?",
      answer:
        "A VPS (Virtual Private Server) shares physical hardware with other VPS instances, but has dedicated resources virtually. A dedicated server gives you the entire physical server without sharing.",
    },
    {
      id: 4,
      question: "Can I customize my dedicated server?",
      answer:
        "Yes, you can configure CPU, RAM, storage, and software based on your exact requirements. Dedicated servers are fully customizable.",
    },
    {
      id: 5,
      question: "Do you manage the server for me?",
      answer:
        "We offer both managed and unmanaged plans. Managed means we handle maintenance, updates, and monitoring; unmanaged gives you full control.",
    },
    {
      id: 6,
      question: "What security features are included?",
      answer:
        "We provide DDoS protection, firewalls, regular security patches, and optional monitoring to ensure your server stays safe.",
    },
    {
      id: 7,
      question: "How reliable are your dedicated servers?",
      answer:
        "Our servers have a 99.9% uptime guarantee, enterprise-grade hardware, and redundant network connections for maximum reliability.",
    },
    {
      id: 8,
      question: "Can I upgrade my dedicated server later?",
      answer:
        "Yes, you can scale your hardware resources by upgrading storage, RAM, or CPU depending on your growing needs.",
    },
    {
      id: 9,
      question: "Do you provide backups?",
      answer:
        "We offer automated backup options that can be scheduled daily, weekly, or on demand, ensuring your data is safe.",
    },
    {
      id: 10,
      question: "Is technical support available?",
      answer:
        "Yes, our technical support team is available 24/7 via chat, email, or phone to assist with any server-related issues.",
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-20">
      {/* Heading */}
      <div className="flex flex-col items-center lg:w-[60vw] w-[95vw] mx-auto text-center space-y-3">
        <h2 className="lg:text-[36px] text-[20px] font-semibold">
          Dedicated server FAQs
        </h2>
        <p className="lg:text-[20px] text-gray-700">
          Everything you need to know about our dedicated servers.
        </p>
      </div>

      {/* FAQ list */}
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
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQs;
