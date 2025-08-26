import { NavLink } from "react-router-dom";
import { GreenTick } from "../svgs/Icons";

interface PricingCardProps {
  type: string;
  desc: string;
  category?: string;
  mostPopular?: boolean;
  link?: string;
  price: string;
  benefits: string[];
}

const PricingCard = ({
  type,
  desc,
  price,
  benefits,
  link,
  mostPopular,
}: PricingCardProps) => {
  return (
    <div
      className={`${mostPopular ? "border-4 border-[#1A2E6C]" : "border border-[#ccc]"} relative rounded-2xl p-6`}
    >
      {mostPopular && (
        <button className="bg-[#0B132D] px-3 py-1 font-semibold rounded-full text-white text-[10px] absolute -top-3 right-[40%]">
          Most Popular
        </button>
      )}
      <h2 className="text-[18px] font-semibold">{type}</h2>
      <p className="text-[14px] text-[#333] mt-3">{desc}</p>
      <div className="flex items-baseline mt-6">
        <h1 className="text-[30px] font-semibold">{price}</h1>
        <span className="text-[#333] text-[12px]">/mo</span>
      </div>
      <button className="bg-[#182A62] text-white px-6 py-2 w-[100%] mt-6 text-[16px] font-semibold rounded-lg">
        <NavLink to={link as string} target="_blank">
          Choose {type}
        </NavLink>
      </button>

      <div className="mt-6 flex flex-col space-y-3">
        {benefits.map((item, index) => (
          <div className="flex items-center space-x-3" key={index}>
            <GreenTick />
            <p className="text-[14px]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
