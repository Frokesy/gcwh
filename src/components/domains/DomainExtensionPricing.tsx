import DomainExtensionPricingCard from "../cards/DomainExtensionPricingCard";
import { DiagArrow } from "../svgs/Icons";

const DomainExtensionPricing = () => {
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
          <DomainExtensionPricingCard
            type=".academy"
            category="Education"
            catBgColor="#EFF4FF"
            catColor="#05038E"
            regCost="$2.99"
            transferCost="$2.99"
            renewalCost="$4.99"
          />
          <DomainExtensionPricingCard
            type=".agency"
            category="Professional"
            catBgColor="#F0FDF9"
            catColor="#107569"
            regCost="$2.99"
            transferCost="$2.99"
            renewalCost="$4.99"
          />
          <DomainExtensionPricingCard
            type=".app"
            category="Technology"
            popular
            catBgColor="#F9F5FF"
            catColor="#9F1AB1"
            regCost="$2.99"
            transferCost="$2.99"
            renewalCost="$4.99"
          />
          <DomainExtensionPricingCard
            type=".art"
            category="Music, Photography & Arts"
            catBgColor="#FDF4FF"
            catColor="#9F1AB1"
            regCost="$2.99"
            transferCost="$2.99"
            renewalCost="$4.99"
          />
          <DomainExtensionPricingCard
            type=".africa"
            category="Africa"
            popular
            catBgColor="#F0FDF9"
            catColor="#107569"
            regCost="$2.99"
            transferCost="$2.99"
            renewalCost="$4.99"
          />
          <DomainExtensionPricingCard
            type=".asia"
            category="International"
            catBgColor="#FEFBE8"
            catColor="#A15C07"
            regCost="$2.99"
            transferCost="$2.99"
            renewalCost="$4.99"
          />
          <DomainExtensionPricingCard
            type=".associates"
            category="Professional"
            catBgColor="#FFF1F3"
            catColor="#C01048"
            regCost="$2.99"
            transferCost="$2.99"
            renewalCost="$4.99"
          />
          <DomainExtensionPricingCard
            type=".audio"
            category="Music, Photography & Arts"
            catBgColor="#FDF4FF"
            catColor="#9F1AB1"
            regCost="$2.99"
            transferCost="$2.99"
            renewalCost="$4.99"
          />
        </div>
      </div>
    </div>
  );
};

export default DomainExtensionPricing;
