import { useState } from "react";
import Container from "../../../components/defaults/Container";
import { UpdatedIcon } from "../../../components/svgs/Icons";
import Footer from "../../../components/defaults/Footer";

const TermsOfService = () => {
  const [activeToc, setActiveToc] = useState<string>("Services provided");
  const toc = [
    "Services provided",
    "Eligibility & Account Security",
    "Acceptable Use",
    "Payments & Refunds",
    "Uptime & Performance",
    "Termination",
    "Governing Law & Arbitration",
    "Modifications",
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
                <h2 className="text-[20px] font-semibold">Services provided</h2>
              </div>
              <p className="text-[#667085]">
                We offer web hosting, domain registration, VPS, dedicated
                servers, email hosting, and related services. Goatclouds Hosting
                may modify or discontinue any service at its discretion.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  2
                </div>
                <h2 className="text-[20px] font-semibold">
                  Eligibility & Account Security
                </h2>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#667085]">
                  - You must be at least 18 years old to use our services.
                </p>
                <p className="text-[#667085]">
                  - You are responsible for protecting your account credentials
                  and all activity under your account.
                </p>
                <p className="text-[#667085]">
                  - Misuse or unauthorized access may result in termination.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  3
                </div>
                <h2 className="text-[20px] font-semibold">Acceptable Use</h2>
              </div>
              <p className="text-[#667085]">
                You agree not to use our services for illegal activities,
                distributing malware, spamming, or infringing copyrights.
                Goatclouds Hosting reserves the right to suspend or terminate
                services for any breach of this policy.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  4
                </div>
                <h2 className="text-[20px] font-semibold">Payment & Refunds</h2>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#667085]">
                  - Services are billed in advance.
                </p>
                <p className="text-[#667085]">
                  - Prices may change, but existing customers will receive
                  notice before changes take effect.
                </p>
                <p className="text-[#667085]">
                  - Refund eligibility is detailed in our Refund Policy
                  (integrated here by reference).
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  5
                </div>
                <h2 className="text-[20px] font-semibold">
                  Uptime & Performance
                </h2>
              </div>
              <p className="text-[#667085]">
                While we aim for high availability, we do not guarantee
                uninterrupted service. We are not liable for indirect,
                incidental, or consequential damages, including data loss or
                downtime.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  6
                </div>
                <h2 className="text-[20px] font-semibold">Termination</h2>
              </div>
              <p className="text-[#667085]">
                Goatclouds Hosting may suspend or terminate your account for
                violations of this agreement, policy breaches, or fraudulent
                activity.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  7
                </div>
                <h2 className="text-[20px] font-semibold">
                  Governing Law & Arbitration
                </h2>
              </div>
              <p className="text-[#667085]">
                This agreement is governed by the laws of Nigeria. Disputes may
                be resolved via binding arbitration if agreed upon at signup.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  8
                </div>
                <h2 className="text-[20px] font-semibold">Modifications</h2>
              </div>
              <p className="text-[#667085]">
                We may update these terms. The "Last Updated" date will reflect
                changes. Continued use after updates implies acceptance.
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

export default TermsOfService;
