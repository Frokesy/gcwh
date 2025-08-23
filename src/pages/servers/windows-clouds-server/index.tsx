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

const WindowsCloudsServer = () => {
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
                <span>Windows cloud server</span>
              </div>
            </div>
            <h2 className="text-gray-900 lg:text-[60px] text-[30px] mt-3 font-semibold">
              Flexible, fast, and always online.
            </h2>
            <p className="lg:text-[20px] text-[14px] text-gray-900 w-[90%] mt-2">
              A Windows cloud server offers scalable resources, high
              availability, and the familiar Windows environment for running
              applications and services. It’s secure, easy to manage, and
              perfect for businesses needing reliable performance with the
              flexibility of the cloud.
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
            <span>Windows cloud server plans & prices</span>
          </div>
        </div>

        <div className="lg:w-[90vw] w-[95vw] mx-auto border border-[#ccc] rounded-3xl mt-10 py-6 px-3 lg:px-16">
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <h2 className="lg:text-[30px] text-[18px] font-semibold mt-2 text-[#1A2E6C]">
              Windows cloud server plans & prices
            </h2>
            <div className="flex items-center space-x-4 mt-3 lg:mt-0 lg:space-x-10">
              <LeftArrow />
              <RightArrow />
            </div>
          </div>

          <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 w-[100%] gap-6">
            <PricingCard
              type="Windows cloud Starter"
              desc=""
              price="$2.99"
              benefits={[
                "2 CPU vCore",
                "4GB ECC RAM",
                "100GB SSD Storage",
                "Unlimited Traffic",
                "1 Static IPv4 address",
                "Web-based console",
                "Instant setup",
                "DNS & RDNS control",
                "Windows server 2016-2022",
                "Flexible solutions",
                "Fast & expert support",
                "SSH & root access",
                "VLAN support",
                "KVM virtualization",
                "Windows OS support",
                "Locally hosted",
                "24/7 monitoring",
                "Cancel anytime",
                "99% uptime guaranteed",
              ]}
            />
            <PricingCard
              type="Windows cloud Basic"
              desc=""
              price="$5.99"
              mostPopular
              benefits={[
                "4 CPU vCore",
                "8GB ECC RAM",
                "200GB SSD Storage",
                "Unlimited Traffic",
                "1 Static IPv4 address",
                "Web-based console",
                "Instant setup",
                "DNS & RDNS control",
                "Windows server 2016-2022",
                "Flexible solutions",
                "Fast & expert support",
                "SSH & root access",
                "VLAN support",
                "KVM virtualization",
                "Windows OS support",
                "Locally hosted",
                "24/7 monitoring",
                "Cancel anytime",
                "99% uptime guaranteed",
              ]}
            />
            <PricingCard
              type="Windows cloud Premium"
              desc=""
              price="$9.99"
              benefits={[
                "6 CPU vCore",
                "12GB ECC RAM",
                "300GB SSD Storage",
                "Unlimited Traffic",
                "1 Static IPv4 address",
                "Web-based console",
                "Instant setup",
                "DNS & RDNS control",
                "Windows server 2016-2022",
                "Flexible solutions",
                "Fast & expert support",
                "SSH & root access",
                "VLAN support",
                "KVM virtualization",
                "Windows OS support",
                "Locally hosted",
                "24/7 monitoring",
                "Cancel anytime",
                "99% uptime guaranteed",
              ]}
            />
          </div>
        </div>
      </div>
      <ServerLocation />
      <Testimonials />
      <FAQs
        page="Windows cloud server"
        questions={[
          {
            id: 1,
            question: "What is a Windows cloud server?",
            answer:
              "A Windows cloud server is a virtual server hosted in the cloud that runs on the Windows Server operating system. It gives you scalable resources, high availability, and the flexibility to run Windows-based applications, software, and databases without the need for physical hardware.",
          },
          {
            id: 2,
            question: "What are the benefits of using a Windows cloud?",
            answer:
              "Windows cloud servers offer several benefits, including easy scalability of resources, high uptime, strong integration with Microsoft tools (like Active Directory, .NET, and SQL Server), and remote accessibility. They are cost-effective since you only pay for the resources you use.",
          },
          {
            id: 3,
            question: "Who should use a Windows cloud server?",
            answer:
              "Windows cloud servers are ideal for businesses and developers who rely on Windows applications, .NET frameworks, Microsoft SQL databases, or need seamless integration with Microsoft 365 and Azure services. They are also great for organizations needing a familiar Windows environment for their teams.",
          },
          {
            id: 4,
            question: "Can I upgrade my resources later?",
            answer:
              "Yes. You can easily scale your Windows cloud server resources such as CPU, RAM, and storage at any time. Upgrades are seamless and typically don’t require downtime, so your server grows with your business needs.",
          },
          {
            id: 5,
            question: "Do I get administrator access?",
            answer:
              "Yes. Every Windows cloud server comes with full administrator (RDP) access, giving you complete control over the operating system, software installations, configurations, and security settings.",
          },
          {
            id: 6,
            question: "What versions of Windows are available?",
            answer:
              "We support multiple versions of Windows Server, including Windows Server 2016, 2019, and 2022. You can choose the version that best matches your software requirements and compatibility needs.",
          },
          {
            id: 7,
            question: "How reliable is the uptime?",
            answer:
              "Our Windows cloud servers come with a 99.9% uptime guarantee, backed by enterprise-grade infrastructure, redundant power, and network systems to ensure your applications and services stay online.",
          },
          {
            id: 8,
            question: "Do you provide technical support?",
            answer:
              "Yes. Our support team is available to help you with setup, configuration, troubleshooting, and general technical issues. Managed support plans are also available if you prefer us to handle server maintenance and monitoring.",
          },
        ]}
      />
      <Footer />
    </Container>
  );
};

export default WindowsCloudsServer;
