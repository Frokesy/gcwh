import PricingCard from "../cards/PricingCard";

const Pricing = () => {
  const buttonItems = [
    "Web hosting",
    "Email hosting",
    "Wordpress hosting",
    "LiteSpeed hosting",
  ];
  return (
    <div className="lg:mt-10 w-[90vw] mx-auto py-20 flex flex-col lg:space-y-6 space-y-3 items-center justify-center">
      <div className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full">
        <span>Simple, transparent pricing</span>
      </div>
      <h2 className="lg:text-[48px] text-[20px] text-center font-semibold">
        Select the best plan for your website
      </h2>
      <p className="lg:text-[20px] lg:w-[60%] text-center">
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
                className={`${
                  item === "Web hosting"
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

        <div className="flex justify-between items-center w-[100%] mt-10">
          <h2 className="text-[#1A2E6C] lg:text-[30px] text-[18px] font-semibold">
            Web Hosting
          </h2>
          <button className="bg-[#182A62] text-white px-6 py-2 text-[16px] font-semibold rounded-lg">
            View all plans
          </button>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 grid-cols-1 w-[100%] gap-6">
          <PricingCard
            type="Starter"
            desc="Perfect for personal sites"
            price="$2.99"
            benefits={[
              "Free .com.ng Domain",
              "Free SitePro sitebuilder",
              "20 GB SSD Storage",
              "2 Websites",
              "25 Email Accounts",
              "5 Subdomains",
            ]}
          />
          <PricingCard
            type="Business"
            desc="For growing projects"
            price="$5.99"
            mostPopular
            benefits={[
              "Free .com.ng Domain",
              "Free SitePro sitebuilder",
              "40 GB SSD Storage",
              "5 Websites",
              "100 Email Accounts",
              "100 Subdomains",
            ]}
          />
          <PricingCard
            type="Pro"
            desc="Advanced features & scale"
            price="$9.99"
            benefits={[
              "Free .com.ng Domain",
              "Free SitePro sitebuilder",
              "100 GB SSD Storage",
              "10 Websites",
              "Unlimited Email Accounts",
              "500 Subdomains",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
