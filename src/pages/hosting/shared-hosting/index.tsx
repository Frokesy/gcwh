import { useRef } from "react";
import PricingCard from "../../../components/cards/PricingCard";
import Container from "../../../components/defaults/Container";
import FAQs from "../../../components/defaults/FAQs";
import Footer from "../../../components/defaults/Footer";
import ServerLocation from "../../../components/home/ServerLocation";
import Testimonials from "../../../components/home/Testimonials";
import {
  GreenTick,
  LeftArrow,
  RightArrow,
} from "../../../components/svgs/Icons";

const SharedHosting = () => {
  const items = [
    "Unlimited Bandwidth",
    "Free Let's Encrypt SSL",
    "DirectAdmin Control Panel",
  ];

  const plans = [
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
    {
      type: "Advanced",
      price: "$3.10",
      url: "https://clients.goatclouds.com/order/config/index/DirectAdmin-Shared-hosting/?group_id=2&pricing_id=15",
      benefits: [
        "Free SitePad sitebuilder",
        "30 GB SSD Storage",
        "10 websites",
        "50 Email Accounts",
        "20 subdomains",
        "12 MySQL Databases",
        "1 FTP Account",
        "Unlimited Bandwidth",
        "Free Let's Encrypt SSL",
        "Free weekly Backups",
        "DirectAdmin Control Panel",
        "24/7 Active Support",
      ],
    },
    {
      type: "Pro",
      price: "$3.70",
      url: "https://clients.goatclouds.com/order/config/index/DirectAdmin-Shared-hosting/?group_id=2&pricing_id=35",
      benefits: [
        "Free SitePad sitebuilder",
        "50 GB SSD Storage",
        "25 websites",
        "100 Email Accounts",
        "35 subdomains",
        "50 MySQL Databases",
        "1 FTP Account",
        "Unlimited Bandwidth",
        "Free Let's Encrypt SSL",
        "Free weekly Backups",
        "DirectAdmin Control Panel",
        "24/7 Active Support",
      ],
    },
    {
      type: "Goat X Ultra",
      price: "$9.20",
      url: "https://clients.goatclouds.com/order/config/index/DirectAdmin-Shared-hosting/?group_id=2&pricing_id=29",
      benefits: [
        "Free SitePad sitebuilder",
        "Unlimited NvmeSSD Storage",
        "60 websites",
        "Unlimited Email Accounts",
        "40 subdomains",
        "Unlimited MySQL Databases",
        "5 FTP Accounts",
        "Unlimited Bandwidth",
        "Free Let's Encrypt SSL",
        "Free weekly Backups",
        "DirectAdmin Control Panel",
        "24/7 Active Support",
      ],
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] pt-20 bg-no-repeat min-h-screen">
        <div className="w-[90vw] mx-auto flex justify-between lg:flex-row flex-col">
          <div className="lg:w-[50%]">
            <div className="flex">
              <div className="bg-[#12214D] text-[#fff] font-semibold py-2 px-4 rounded-full">
                <span>DirectAdmin Shared Hosting</span>
              </div>
            </div>
            <h2 className="text-gray-900 lg:text-[60px] text-[30px] mt-3 font-semibold">
              Supercharged website performance.
            </h2>
            <p className="lg:text-[20px] text-[14px] text-gray-900 w-[90%] mt-2">
              DirectAdmin shared hosting delivers reliable performance, enhanced
              security, and efficient resource use — ensuring your visitors
              enjoy a smooth browsing experience.
            </p>

            <div className="mt-4 bg-[#fff] lg:p-6 p-3 rounded-2xl grid gap-6 lg:gap-10 w-[100%]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 lg:text-[16px] text-[13px]"
                >
                  <GreenTick />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-10 mt-10">
              <div className="flex items-center space-x-2">
                <p className="text-[18px] text-gray-800">Starting from</p>
                <div className="flex items-baseline">
                  <h2 className="text-[30px] font-semibold">$1.50</h2>
                  <span className="text-[12px]">/mo</span>
                </div>
              </div>
              <div className="flex items-center lg:space-x-4 space-y-3 lg:space-y-0 lg:flex-row flex-col mt-4">
                <button className="bg-[#182A62] text-white py-2 text-[16px] lg:w-[45%] w-[100%] font-semibold rounded-lg">
                  View all plans
                </button>
                <button className="text-[#182A62] bg-white py-2 text-[16px] lg:w-[45%] w-[100%] font-semibold rounded-lg">
                  Choose your plans
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-6 min-w-max mb-10">
              <GreenTick />
              <p>30-Day Money Back Guarantee</p>
            </div>
          </div>

          <div className="lg:w-[45%]">
            <img
              src="/assets/gifs/litespeed.gif"
              alt="directadmin-hosting"
              className="w-[100%]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#fff] py-20">
        <div className="flex items-center justify-center">
          <div className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full">
            <span>DirectAdmin hosting plans & prices</span>
          </div>
        </div>

        <div className="lg:w-[90vw] w-[95vw] mx-auto border border-[#ccc] rounded-3xl mt-10 py-6 px-3 lg:px-16">
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <h2 className="lg:text-[30px] text-[18px] font-semibold mt-2 text-[#1A2E6C]">
              DirectAdmin hosting plans & prices
            </h2>
            <div className="flex items-center space-x-4 mt-3 lg:mt-0 lg:space-x-10">
              <button onClick={scrollPrev}>
                <LeftArrow />
              </button>
              <button onClick={scrollNext}>
                <RightArrow />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="pt-6 flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {plans.map((plan, idx) => (
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
        </div>
      </div>

      <ServerLocation />
      <Testimonials />
      <FAQs
        page="DirectAdmin hosting"
        questions={[
          {
            id: 1,
            question: "What is DirectAdmin shared hosting?",
            answer:
              "DirectAdmin shared hosting is a hosting solution managed through the DirectAdmin control panel, providing speed, security, and ease of use for websites of all sizes.",
          },
          {
            id: 2,
            question: "Can I upgrade my plan later?",
            answer:
              "Yes, you can seamlessly upgrade your hosting plan as your website grows.",
          },
        ]}
      />
      <Footer />
    </Container>
  );
};

export default SharedHosting;
