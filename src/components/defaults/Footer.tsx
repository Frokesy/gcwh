import { Facebook, GitHub, LinkedIn, Twitter } from "../svgs/Icons";

const Footer = () => {
  return (
    <div className="pt-20 bg-[#0B132D] text-[#fff]">
      <div className="w-[90vw] mx-auto">
        <div className="flex justify-between lg:flex-row flex-col lg:space-x-10 space-y-10 lg:space-y-0">
          <div className="flex flex-col space-y-2 lg:w-[30%]">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <img
                src="/assets/logo.svg"
                alt="Logo"
                className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
              />
              <h2 className="lg:text-[20px] text-[15px]">
                GOATClouds technologies
              </h2>
            </div>
            <span className="mt-4">
              Design amazing digital experiences that create more satisfaction
              in the world
            </span>

            <div className="flex flex-col mt-4">
              <h2>Website builder</h2>
              <div className="mt-4">
                <button className="bg-[#182A62] text-white px-6 py-2 text-[16px] font-semibold rounded-lg">
                  Build your website now
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[60%] flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between">
            {/* <div className="flex flex-col space-y-4">
              <h2 className="text-[#98A2B3] text-[14px]">Server</h2>
              {[
                "Dedicated server",
                "Linux VPS Hosting",
                "Linux VPS server",
                "Windows cloud server",
                "Windows VDS server",
                "Manage VPS hosting",
              ].map((item, index) => (
                <span key={index} className="text-[16px] font-semibold">
                  {item}
                </span>
              ))}
            </div> */}

            <div className="flex flex-col space-y-4">
              <h2 className="text-[#98A2B3] text-[14px]">Hosting</h2>
              {["DirectAdmin Shared Hosting"].map((item, index) => (
                <span key={index} className="text-[16px] font-semibold">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="text-[#98A2B3] text-[14px]">Domain</h2>
              {[
                "Register domain",
                "Transfer domain",
                "WHOIS Lookup",
                "Domain prices",
              ].map((item, index) => (
                <span key={index} className="text-[16px] font-semibold">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="text-[#98A2B3] text-[14px]">Legal</h2>
              {["Terms", "Privacy", "Cookies", "Contact"].map((item, index) => (
                <span key={index} className="text-[16px] font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex lg:flex-row flex-col-reverse justify-between border-t-2 border-[#404040] py-6 lg:items-center">
          <p className="lg:text-[16px] mt-6">
            © 2025 Goatclouds. All rights reserved.
          </p>
          <div className="flex space-x-6 items-center">
            <Twitter />
            <LinkedIn />
            <Facebook />
            <GitHub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
