import Container from "../../../components/defaults/Container";
import FAQs from "../../../components/defaults/FAQs";
import Footer from "../../../components/defaults/Footer";
import DomainExtensionPricing from "../../../components/domains/DomainExtensionPricing";
import Qualifications from "../../../components/domains/Qualifications";
import Testimonials from "../../../components/home/Testimonials";
import { DiagArrow, SearchIcon } from "../../../components/svgs/Icons";

const RegisterDomain = () => {
  const domainInfo = [
    {
      id: 1,
      type: ".net",
      theme: "#FF6688",
      price: "$2.99",
    },
    {
      id: 2,
      type: ".com",
      theme: "#FFB64D",
      price: "$5.99",
    },
    {
      id: 3,
      type: ".org",
      theme: "#9398F9",
      price: "$7.99",
    },
    {
      id: 4,
      type: ".xyz",
      theme: "#DC61F7",
      price: "$4.99",
    },
    {
      id: 5,
      type: ".biz",
      theme: "#93B5F5",
      price: "$5.09",
    },
    {
      id: 6,
      type: ".info",
      theme: "#1A2E6C",
      price: "$7.99",
    },
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] pt-20 bg-no-repeat min-h-screen">
        <div className="w-[90vw] mx-auto">
          <div className="flex flex-col lg:items-center items-start space-y-3">
            <div className="bg-[#12214D] text-[#fff] font-semibold py-2 px-4 rounded-full">
              <span>Register Domain</span>
            </div>
            <h2 className="lg:text-[60px] text-[30px] lg:text-center font-semibold">
              Your name, your brand, your space.
            </h2>
            <p className="lg:text-[20px] text-gray-600 lg:w-[60%] mx-auto lg:text-center">
              Secure your unique domain name and establish your online identity.
              Our domain registration is quick, affordable, and hassle-free.
            </p>

            <div className="lg:bg-[#fff] lg:w-[60vw] w-[95vw] p-3 rounded-xl mt-4 flex lg:flex-row flex-col justify-between">
              <div className="flex items-center space-x-3 w-[100%] lg:w-[80%] lg:bg-inherit bg-[#fff] p-3 lg:p-0 rounded-lg lg:rounded-none">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Enter domain name you want..."
                  className="bg-inherit outline-none border-nones w-[100%]"
                />
              </div>
              <button className="bg-[#182A62] text-white px-6 lg:py-4 py-3 mt-4 lg:mt-0 text-[16px] font-semibold rounded-lg">
                Search domain
              </button>
            </div>

            <div className="mt-10 w-[90vw] mx-auto shadow-xl bg-[#fff] lg:p-6 p-3 rounded-2xl">
              <div className="flex justify-center">
                <div className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full">
                  <span>Popular domains</span>
                </div>
              </div>
              <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 lg:mt-10 mt-6">
                {domainInfo.map((item) => (
                  <div
                    key={item.id}
                    className="border border-[#3359D2] w-[100%] flex flex-col text-center items-center lg:p-10 p-3 space-y-6 rounded-2xl"
                  >
                    <h2
                      style={{ color: item.theme }}
                      className="text-[20px] font-semibold"
                    >
                      {item.type}
                    </h2>

                    <div className="flex items-baseline">
                      <h1 className="text-[30px] font-semibold">
                        {item.price}
                      </h1>
                      <span className="text-[#333] text-[12px]">/yr</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:mt-14 my-6">
              <div className="bg-[#EFF4FF] text-[#05038E] lg:text-[15px] text-[13px] flex items-center space-x-4 p-2 lg:p-3 rounded-full">
                <p className="">Already own a domain?</p>
                <button className="bg-[#fff] flex items-center space-x-2 p-3 rounded-full">
                  <span>Transfer it now</span>
                  <DiagArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DomainExtensionPricing />
      <Qualifications />
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

export default RegisterDomain;
