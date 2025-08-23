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

const WindowsVDSServer = () => {
  const items = [
    "Scale with ease: Powerful performance and expandable resources",
    "Transparent pricing",
    "High-availability architecture",
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] pt-20 bg-no-repeat min-h-screen">
        <div className="w-[90vw] mx-auto flex justify-between lg:flex-row flex-col">
          <div className="lg:w-[50%]">
            <div className="flex">
              <div className="bg-[#12214D] text-[#fff] font-semibold py-2 px-4 rounded-full">
                <span>Windows VDS server</span>
              </div>
            </div>
            <h2 className="text-gray-900 lg:text-[60px] text-[30px] mt-3 font-semibold">
              Power, Control, and Flexibility in One
            </h2>
            <p className="lg:text-[20px] text-[14px] text-gray-900 w-[90%] mt-2">
              A Windows VDS gives you dedicated resources on a virtual Windows
              server, combining power and flexibility. Run Windows apps, host
              websites, and manage workloads with ease. Enjoy full admin access,
              scalability, and strong security for reliable performance.
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
                  <h2 className="text-[30px] font-semibold">$2.99</h2>
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
              src="/assets/gifs/windows.gif"
              alt="windows"
              className="w-[100%]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#fff] py-20">
        <div className="flex items-center justify-center">
          <div className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full">
            <span>Windows VDS server plans & prices</span>
          </div>
        </div>

        <div className="lg:w-[90vw] w-[95vw] mx-auto border border-[#ccc] rounded-3xl mt-10 py-6 px-3 lg:px-16">
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <h2 className="lg:text-[30px] text-[18px] font-semibold mt-2 text-[#1A2E6C]">
              Windows VDS server plans & prices
            </h2>
            <div className="flex items-center space-x-4 mt-3 lg:mt-0 lg:space-x-10">
              <LeftArrow />
              <RightArrow />
            </div>
          </div>

          <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 w-[100%] gap-6">
            <PricingCard
              type="Windows VDS Starter"
              desc=""
              price="$2.99"
              benefits={[
                "3 vCore Intel Xeon CPU",
                "24GB RAM",
                "450GB NVMe SSD Storage",
                "Unlimited Bandwidth",
                "Latest windows server",
                "2 RDP licenses included",
                "Full DNS & RDNS control",
                "Free static IP address",
                "KVM virtualization",
                "Dedicated resources",
                "Optional backup plans",
                "99% uptime guaranteed",
              ]}
            />
            <PricingCard
              type="Windows VDS Basic"
              desc=""
              price="$5.99"
              mostPopular
              benefits={[
                "4 vCore Intel Xeon CPU",
                "32GB RAM",
                "600GB NVMe SSD Storage",
                "Unlimited Bandwidth",
                "Latest windows server",
                "2 RDP licenses included",
                "Full DNS & RDNS control",
                "Free static IP address",
                "KVM virtualization",
                "Dedicated resources",
                "Optional backup plans",
                "99% uptime guaranteed",
              ]}
            />
            <PricingCard
              type="Windows VDS Premium"
              desc=""
              price="$9.99"
              benefits={[
                "6 vCore Intel Xeon CPU",
                "48GB RAM",
                "900GB NVMe SSD Storage",
                "Unlimited Bandwidth",
                "Latest windows server",
                "2 RDP licenses included",
                "Full DNS & RDNS control",
                "Free static IP address",
                "KVM virtualization",
                "Dedicated resources",
                "Optional backup plans",
                "99% uptime guaranteed",
              ]}
            />
          </div>
        </div>
      </div>
      <ServerLocation />
      <Testimonials />
      <FAQs />
      <Footer />
    </Container>
  );
};

export default WindowsVDSServer;
