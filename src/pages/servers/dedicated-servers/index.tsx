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

const DedicatedServers = () => {
  const items = [
    "Free hardware setup",
    "Data centre hands",
    "1 Gbit/s network",
    "24-hour setup",
    "Free internal traffic",
    "RMI & IPMI access",
    "Unlimited traffic",
    "24/7 monitoring",
    "Fast & expert support",
    "Dual power supplies",
    "DDoS mitigation",
    "99.9% uptime guarantee",
    "Cloud-ready servers",
    "Customisable servers",
    "Tier 3 ISO Accredited DC",
    "After-hours support",
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] pt-20 bg-no-repeat min-h-screen">
        <div className="w-[90vw] mx-auto">
          <div className="flex">
            <div className="bg-[#12214D] text-[#fff] font-semibold py-2 px-4 rounded-full">
              <span>Dedicated server</span>
            </div>
          </div>
          <h2 className="text-gray-900 lg:text-[60px] text-[30px] mt-6 font-semibold">
            Power and control, all yours.
          </h2>
          <p className="lg:text-[20px] text-[14px] text-gray-900 w-[90%] mt-6">
            A dedicated server gives you full control and exclusive resources
            for maximum performance, security, and reliability—perfect for
            high-traffic sites and demanding applications.
          </p>

          <div className="mt-10 bg-[#fff] p-6 rounded-2xl grid lg:grid-cols-4 gap-6 lg:gap-10 w-[100%]">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 lg:text-[16px] text-[14px] min-w-max"
              >
                <GreenTick />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:space-x-10 mt-10">
            <div className="flex items-center space-x-2">
              <p className="text-[18px] text-gray-800">Starting from</p>
              <div className="flex items-baseline">
                <h2 className="text-[30px] font-semibold">$2.99</h2>
                <span className="text-[12px]">/mo</span>
              </div>
            </div>
            <div className="flex items-center lg:space-x-4 space-y-3 lg:space-y-0 lg:flex-row flex-col">
              <button className="bg-[#182A62] text-white px-20 py-2 text-[16px] lg:w-auto w-[100%] font-semibold rounded-lg">
                View all plans
              </button>
              <button className="text-[#182A62] bg-white px-20 py-2 text-[16px] lg:w-auto w-[100%] font-semibold rounded-lg">
                Choose your plans
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-6 min-w-max lg:mb-0 mb-10">
            <GreenTick />
            <p>30-Day Money Back Guarantee</p>
          </div>
        </div>
      </div>

      <div className="bg-[#fff] py-20">
        <div className="flex items-center justify-center">
          <div className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full">
            <span>Dedicated servers</span>
          </div>
        </div>

        <div className="lg:w-[90vw] w-[95vw] mx-auto border border-[#ccc] rounded-3xl mt-10 py-6 px-3 lg:px-16">
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <h2 className="lg:text-[30px] text-[18px] font-semibold mt-2 text-[#1A2E6C]">
              Self-managed server prices
            </h2>
            <div className="flex items-center space-x-4 mt-3 lg:mt-0 lg:space-x-10">
              <LeftArrow />
              <RightArrow />
            </div>
          </div>

          <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 w-[100%] gap-6">
            <PricingCard
              type="D1 Server"
              desc="Supermicro Server"
              price="$2.99"
              benefits={[
                "Intel Xeon E-2234: 4 Cores 8 Threads",
                "1TB Micron Pro SSD or similar",
                "16GB ECC RAM",
                "Unlimited Traffic",
                "Software RAID",
                "Hotswap SSD & PSU",
                "Dual Power Supply",
                "IPMI & RMI Access",
                "1Gbit/s Network",
              ]}
            />
            <PricingCard
              type="D2 Server"
              desc="Dell Server"
              price="$5.99"
              mostPopular
              benefits={[
                "Intel Xeon E-2234: 6 Cores 12 Threads",
                "1TB Micron Pro SSD or similar",
                "32GB ECC RAM",
                "Unlimited Traffic",
                "Hardware RAID",
                "Hotswap SSD & PSU",
                "Dual Power Supply",
                "IPMI & RMI Access",
                "1Gbit/s Network",
              ]}
            />
            <PricingCard
              type="D3 Server"
              desc="Dell Server"
              price="$9.99"
              benefits={[
                "Intel Xeon E-2234: 10 Cores 20 Threads",
                "1TB Micron Pro SSD or similar",
                "64GB ECC RAM",
                "Unlimited Traffic",
                "Hardware RAID",
                "Hotswap SSD & PSU",
                "Dual Power Supply",
                "IPMI & RMI Access",
                "1Gbit/s Network",
              ]}
            />
          </div>
        </div>
      </div>
      <ServerLocation />
      <Testimonials />
      <FAQs
        page="Dedicated Servers"
        questions={[
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
            question:
              "What is the difference between a VPS and a dedicated server?",
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
        ]}
      />
      <Footer />
    </Container>
  );
};

export default DedicatedServers;
