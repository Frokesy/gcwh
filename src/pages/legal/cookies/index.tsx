import { useState } from "react";
import Container from "../../../components/defaults/Container";
import { UpdatedIcon } from "../../../components/svgs/Icons";
import Footer from "../../../components/defaults/Footer";

const CookiesPolicy = () => {
  const [activeToc, setActiveToc] = useState<string>("Services provided");
  const toc = [
    "What are Cookies?",
    "Types of Cookies we use",
    "Third-Party Cookies",
    "Managing Cookies",
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] py-20 bg-no-repeat min-h-[60vh] relative">
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
            Cookies Policy
          </h2>
          <p data-aos="fade-up" className="text-gray-900 lg:text-[24px]">
            We use cookies to enhance your experience. Here’s what you need to
            know:{" "}
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
                <h2 className="text-[20px] font-semibold">What Are Cookies</h2>
              </div>
              <p className="text-[#667085]">
                Small files stored on your device that help us recognize your
                preferences and improve navigation.{" "}
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  2
                </div>
                <h2 className="text-[20px] font-semibold">
                  Types of Cookies we use
                </h2>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-[#667085]">
                  - Essential: Necessary for login and account access.
                </p>
                <p className="text-[#667085]">
                  - Performance: Help us analyze site usage and improve
                  features.
                </p>
                <p className="text-[#667085]">
                  - Functional: Remember preferences like language or timezone.
                </p>
                <p className="text-[#667085]">
                  - Marketing: Manage and personalize advertising initiatives.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  3
                </div>
                <h2 className="text-[20px] font-semibold">
                  Third-Party Cookies
                </h2>
              </div>
              <p className="text-[#667085]">
                We may allow third-party cookies (e.g., analytics tools) to help
                us understand and optimize site usage.
              </p>
            </div>
            <div className="flex flex-col space-y-3 p-4 border border-[#ccc] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="text-[#fff] bg-[#1A2E6C] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[20px] font-semibold">
                  4
                </div>
                <h2 className="text-[20px] font-semibold">Managing Cookies</h2>
              </div>
              <p className="text-[#667085]">
                You can manage or block cookies via browser settings. Disabling
                certain cookies may impair website functionality.
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

export default CookiesPolicy;
