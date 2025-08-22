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
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 3,
      question: "What is the difference between a VPS and a dedicated server?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 4,
      question: "Can I customize my dedicated server?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 5,
      question: "Do you manage the server for me?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 6,
      question: "What secuirty features are included?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 7,
      question: "How reliable are your dedicated servers?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 8,
      question: "Can I upgrade my dedicated server later?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 9,
      question: "Do you provide backups?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
    {
      id: 10,
      question: "Is technical support available?",
      answer:
        "A dedicated server is a physical server entirely reserved for your use. Unlike shared hosting, all CPU, RAM, storage, and bandwidth are dedicated to your website or applications, ensuring maximum performance, security, and customization.",
    },
  ];
  return (
    <div className="py-20">
      <div className="flex flex-col items-center lg:w-[60vw] w-[95vw] mx-auto text-center space-y-3">
        <h2 className="lg:text-[36px] text-[20px] font-semibold">
          Dedicated server FAQs
        </h2>
        <p className="lg:text-[20px] text-gray-700">
          Everything you need to know about our dedicated servers.
        </p>
      </div>

      <div className="bg-[#fff] shadow-lg rounded-2xl p-6 space-y-10 mt-10 lg:w-[60vw] w-[95vw] mx-auto">
        {questions.map((item) => (
          <div
            key={item.id}
            className="flex justify-between space-x-10 items-center"
          >
            <div className="flex flex-col space-y-3">
              <h2 className="lg:text-[20px] font-semibold">{item.question}</h2>
              {/* <p className="text-[#858888] lg:text-[16px] text-[13px]">{item.answer}</p> */}
            </div>
            <div className="">
              <PlusIcon />
            </div>
          </div>
        ))}
      </div>

      <div className="lg:w-[90vw] w-[95vw] mx-auto bg-[#fff] p-6 rounded-2xl mt-10 py-10 flex flex-col items-center space-y-6 justify-center text-center">
        <img src="/assets/avatar-group.png" alt="avatar-group" />
        <h2 className="text-[20px]">Still have questions?</h2>{" "}
        <p className="text-[#858888] lg:text-[16px] text-[13px]">
          Can&apos;t find the answer you&pos;re looking for? Please chat to our
          friendly team
        </p>
        <button className="bg-[#182A62] text-white px-6 py-2 text-[16px] font-semibold rounded-lg">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQs;
