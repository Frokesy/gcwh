import DomainExtensionPricingCard from "../cards/DomainExtensionPricingCard";
import { DiagArrow } from "../svgs/Icons";

const DomainExtensionPricing = () => {
  const domainExtensions = [
    {
      type: ".academy",
      category: "Education",
      catBgColor: "#EFF4FF",
      catColor: "#05038E",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".agency",
      category: "Professional",
      catBgColor: "#F0FDF9",
      catColor: "#107569",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".app",
      category: "Technology",
      popular: true,
      catBgColor: "#F9F5FF",
      catColor: "#9F1AB1",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".art",
      category: "Music, Photography & Arts",
      catBgColor: "#FDF4FF",
      catColor: "#9F1AB1",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".africa",
      category: "Africa",
      popular: true,
      catBgColor: "#F0FDF9",
      catColor: "#107569",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".asia",
      category: "International",
      catBgColor: "#FEFBE8",
      catColor: "#A15C07",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".associates",
      category: "Professional",
      catBgColor: "#FFF1F3",
      catColor: "#C01048",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".audio",
      category: "Music, Photography & Arts",
      catBgColor: "#FDF4FF",
      catColor: "#9F1AB1",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
  ];

  return (
    <div className="bg-[#fff] py-10">
      <div className="w-[90vw] mx-auto border border-[#ccc] p-3 lg:p-6 rounded-2xl">
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <h2 className="text-[#1A2E6C] lg:text-[30px] text-[18px] font-semibold">
            Domain Extension Pricing
          </h2>
          <button className="flex items-center space-x-3 py-2 px-6 mt-4 lg:mt-0 border border-[#ccc] bg-[#fff]">
            <span>View all domains</span>
            <DiagArrow />
          </button>
        </div>

        <div className="lg:pt-10 pt-6 grid lg:grid-cols-4 gap-6">
          {domainExtensions.map((ext, index) => (
            <DomainExtensionPricingCard key={index} {...ext} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainExtensionPricing;
