import { motion } from "framer-motion";
import PricingCard from "../cards/PricingCard";
import { NavLink } from "react-router-dom";

const directAdminPlans = [
  {
    type: "Ultra Lite package",
    price: "$1.50",
    url: "https://clients.goatclouds.com/order/config/index/DirectAdmin-Shared-hosting/?group_id=2&pricing_id=5",
    benefits: [
      "Free SitePad sitebuilder",
      "1 GB SSD Storage",
      "1 website",
      "5 Email Accounts",
      "1 subdomain",
      "1 MySQL Databases",
      "1 FTP Account",
      "Unlimited Bandwidth",
      "Free Let's Encrypt SSL",
      "No Backups",
      "DirectAdmin Control Panel",
    ],
  },
  {
    type: "Lite Package",
    price: "$2.50",
    url: "https://clients.goatclouds.com/order/config/index/DirectAdmin-Shared-hosting/?group_id=2&pricing_id=7",
    mostPopular: true,
    benefits: [
      "Free SitePad sitebuilder",
      "10 GB SSD Storage",
      "3 websites",
      "20 Email Accounts",
      "10 subdomains",
      "5 MySQL Databases",
      "1 FTP Account",
      "Unlimited Bandwidth",
      "Free Let's Encrypt SSL",
      "Free weekly Backups",
      "DirectAdmin Control Panel",
    ],
  },
  {
    type: "Standard",
    price: "$2.99",
    url: "https://clients.goatclouds.com/order/config/index/DirectAdmin-Shared-hosting/?group_id=2&pricing_id=10",
    benefits: [
      "Free SitePad sitebuilder",
      "20 GB SSD Storage",
      "5 websites",
      "25 Email Accounts",
      "13 subdomains",
      "8 MySQL Databases",
      "1 FTP Account",
      "Unlimited Bandwidth",
      "Free Let's Encrypt SSL",
      "Free weekly Backups",
      "DirectAdmin Control Panel",
    ],
  },
];

const Pricing = () => {
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
        Choose a DirectAdmin Shared Hosting plan that fits your needs and
        budget. Whether you're starting small or scaling big, we've got the
        right option for you.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#fff] mt-10 lg:p-10 p-4 rounded-2xl w-full flex flex-col lg:items-center"
      >
        <div className="flex justify-between items-center w-full">
          <h2 className="text-[#1A2E6C] lg:text-[30px] text-[18px] font-semibold">
            DirectAdmin Shared Hosting Plans & Prices
          </h2>
          <button className="bg-[#182A62] text-white px-6 py-2 text-[16px] font-semibold rounded-lg">
            <NavLink to="/hosting/shared-hosting">View all plans</NavLink>
          </button>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 grid-cols-1 w-full gap-6">
          {directAdminPlans.map((plan, idx) => (
            <PricingCard
              key={idx}
              type={plan.type}
              desc=""
              link={plan.url}
              price={plan.price}
              mostPopular={plan.mostPopular}
              benefits={plan.benefits}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
