interface Props {
  type: string;
  category: string;
  regCost: string;
  transferCost: string;
  renewalCost: string;
  popular?: boolean;
  catColor: string;
  catBgColor: string;
}

const DomainExtensionPricingCard = ({
  type,
  category,
  regCost,
  transferCost,
  renewalCost,
  popular,
  catColor,
  catBgColor,
}: Props) => {
  return (
    <div
      className={`${popular ? "border-4 border-[#182A62]" : "border border-[#ccc]"} rounded-2xl p-6 relative flex flex-col`}
    >
      {popular && (
        <button className="bg-[#0B132D] px-3 py-1 font-semibold rounded-full text-white text-[10px] absolute -top-3 right-[40%]">
          Popular
        </button>
      )}
      <div className="flex flex-col items-center space-y-2">
        <h2 className="">{type}</h2>
        <button
          style={{ color: catColor, backgroundColor: catBgColor }}
          className="p-2 rounded-full text-[14px]"
        >
          {category}
        </button>
      </div>

      <button className="bg-[#182A62] text-white px-6 py-2 w-[100%] mt-3 text-[16px] font-semibold rounded-lg">
        Register
      </button>

      <div className="mt-6 space-y-3 lg:space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-semibold">Register</p>
          <div className="flex items-baseline">
            <h1 className="text-[30px] font-semibold">{regCost}</h1>
            <span className="text-[#333] text-[12px]">/mo</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-semibold">Transfer</p>
          <div className="flex items-baseline">
            <h1 className="text-[30px] font-semibold">{transferCost}</h1>
            <span className="text-[#333] text-[12px]">once</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-semibold">Renewal</p>
          <div className="flex items-baseline">
            <h1 className="text-[30px] font-semibold">{renewalCost}</h1>
            <span className="text-[#333] text-[12px]">/yr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainExtensionPricingCard;
