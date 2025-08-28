import { useState } from "react";
import Container from "../../../components/defaults/Container";
import { UpdatedIcon } from "../../../components/svgs/Icons";
import Footer from "../../../components/defaults/Footer";

const PrivacyPolicy = () => {
  const [activeToc, setActiveToc] = useState<string>("Services provided");
  const toc = [
    "Information we collect",
    "How we use your data",
    "Data Sharing",
    "Data Security",
    "Your rights",
    "Data Retention",
    "Updates",
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] py-20 bg-no-repeat lg:min-h-[80vh] min-h-[60vh] relative">
        <div className="flex flex-col items-center space-y-4 lg:w-[60%] pt-10 mx-auto text-center">
          <button
            data-aos="fade-up"
            className="bg-[#182A62] text-white px-3 py-2 text-[14px] font-semibold rounded-lg mt-10"
          >
            Legal
          </button>
          <h2
            data-aos="fade-down"
            className="lg:text-[60px] text-[30px] font-semibold"
          >
            Terms of Services
          </h2>
          <p data-aos="fade-up" className="text-gray-900 lg:text-[24px]">
            Welcome to Goatclouds Hosting. By accessing or using our website,
            services, or products, you agree to comply with the following Terms
            of Service. Please read them carefully.
          </p>
        </div>
      </div>

      <div className="bg-[#fff] lg:py-20 py-10">
        <div className="w-[90vw] mx-auto flex justify-between items-start">
          <div className="w-[25%] lg:block hidden rounded-2xl shadow-lg p-4">
            <button className="bg-[#E6E6FA] text-[#05038E] py-1 px-3 rounded-full font-semibold">
              Table of contents
            </button>

            <div className="mt-6 space-y-4">
              {toc.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveToc(item)}
                  className={`${activeToc === item ? "border-l-2 border-[#1A2E6C] bg-[#F9FAFB]" : "border-none bg-[#fff]"} p-4 rounded-xl transition-all duration-300 ease-in-out cursor-pointer`}
                >
                  <span>
                    {index + 1}. {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[70%] rounded-2xl shadow-lg p-4 space-y-4">
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  1
                </div>
                <h2 className="text-[20px] font-semibold">
                  Information we collect
                </h2>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#667085]">
                  - Personal Info: Name, email, billing address, phone number.
                </p>
                <p className="text-[#667085]">
                  - Technical Info: IP address, browser type, usage logs.
                </p>
                <p className="text-[#667085]">
                  - Payment Info: Collected via secure third-party processors.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  2
                </div>
                <h2 className="text-[20px] font-semibold">
                  How we use your data
                </h2>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#667085]">
                  - Deliver and manage our services.
                </p>
                <p className="text-[#667085]">
                  - Process billing and account verification.
                </p>
                <p className="text-[#667085]">
                  - Send service alerts, updates, and optional marketing
                  messages.
                </p>
                <p className="text-[#667085]">
                  - Improve our offerings and website experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  3
                </div>
                <h2 className="text-[20px] font-semibold">Data Sharing</h2>
              </div>
              <p className="text-[#667085]">
                We do not sell your personal data. We may share data with
                trusted partners (e.g., registrars, billing systems) under
                strict privacy terms.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  4
                </div>
                <h2 className="text-[20px] font-semibold">Data Security</h2>
              </div>
              <p className="text-[#667085]">
                We utilize encryption, firewalls, and strict access controls to
                protect your data.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  5
                </div>
                <h2 className="text-[20px] font-semibold">Your Rights</h2>
              </div>
              <p className="text-[#667085]">
                You may access, update, or delete your information. You can opt
                out of marketing communications at any time.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  6
                </div>
                <h2 className="text-[20px] font-semibold">Data Retention</h2>
              </div>
              <p className="text-[#667085]">
                We retain your data only as long as needed to provide services,
                satisfy legal obligations, or resolve disputes.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  7
                </div>
                <h2 className="text-[20px] font-semibold">Updates</h2>
              </div>
              <p className="text-[#667085]">
                We may update this policy; significant changes will be
                communicated to you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-20">
          <div className="flex items-center space-x-3">
            <UpdatedIcon />
            <h2 className="text-[20px] font-semibold">
              Last Updated: August 25, 2025.
            </h2>
          </div>
          <p className="text-[#667085] lg:px-0 px-6 mt-4">
            For questions about these terms, please contact Goatclouds Hosting
            support.
          </p>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default PrivacyPolicy;
