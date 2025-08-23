import Container from "../../../components/defaults/Container";
import FAQs from "../../../components/defaults/FAQs";
import Footer from "../../../components/defaults/Footer";
import DomainExtensionPricing from "../../../components/domains/DomainExtensionPricing";
import Qualifications from "../../../components/domains/Qualifications";
import Testimonials from "../../../components/home/Testimonials";
import { DiagArrow, SearchIcon } from "../../../components/svgs/Icons";

const TransferDomain = () => {
  const items = [
    {
      id: 1,
      title: "Get the Authorization Code (EPP Code)",
      desc: "Request the transfer code from your current provider—it’s needed to verify ownership.",
    },
    {
      id: 2,
      title: "Start the Transfer",
      desc: "Enter your domain name and authorization code on our transfer page.",
    },
    {
      id: 3,
      title: "Confirm Ownership",
      desc: "Approve the transfer request sent to your email to verify domain ownership.",
    },
    {
      id: 4,
      title: "Complete the Transfer",
      desc: "The transfer is processed within a few days. Once done, your domain is fully managed under your new account.",
    },
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] pt-20 bg-no-repeat lg:min-h-[80vh]">
        <div className="w-[90vw] mx-auto">
          <div className="flex flex-col lg:items-center items-start space-y-3">
            <div className="bg-[#12214D] text-[#fff] font-semibold py-2 px-4 rounded-full">
              <span>Transfer Domain</span>
            </div>
            <h2 className="lg:text-[60px] text-[30px] lg:text-center lg:w-[60%] font-semibold">
              Move your domain with ease—fast, secure, and hassle-free.
            </h2>
            <p className="lg:text-[20px] text-gray-600 lg:w-[60%] mx-auto lg:text-center">
              Transferring your domain is quick and reliable with zero downtime,
              clear pricing, and full control—making it easier to enjoy better
              support, lower costs, and advanced tools.
            </p>

            <div className="lg:bg-[#fff] lg:w-[60vw] w-[90vw] p-3 rounded-xl mt-4 flex lg:flex-row flex-col justify-between">
              <div className="flex items-center space-x-3 w-[100%] lg:w-[80%] lg:bg-inherit bg-[#fff] p-3 lg:p-0 rounded-lg lg:rounded-none">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Enter domain name you want to transfer"
                  className="bg-inherit outline-none border-nones w-[100%]"
                />
              </div>
              <button className="bg-[#182A62] text-white px-6 lg:py-4 py-3 mt-4 lg:mt-0 text-[16px] font-semibold rounded-lg">
                Search domain
              </button>
            </div>

            <div className="flex items-center justify-center mx-auto lg:mt-14 my-6">
              <div className="bg-[#EFF4FF] text-[#05038E] lg:text-[15px] text-[13px] flex items-center justify-center lg:flex-row flex-col space-x-4 p-4 lg:p-3 rounded-lg lg:rounded-full">
                <p className="">Looking for a new domain name?</p>
                <button className="bg-[#fff] flex items-center space-x-2 lg:p-3 p-2 mt-4 lg:mt-0 rounded-full">
                  <span>Register a domain</span>
                  <DiagArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff] pt-10">
        <div className="w-[90vw] mx-auto flex flex-col">
          <h2 className="lg:text-[36px] text-[20px] font-semibold">
            How to Transfer Your Domain
          </h2>
          <p className="text-gray-700 lg;py-4 py-3 lg:text-[20px]">
            A clear step-by-step guide for transferring a domain:
          </p>

          <div className="lg:my-10 my-6 flex lg:flex-row flex-col justify-between items-center">
            <div className="lg:w-[45%] flex flex-col">
              <div className="lg:border-l-6 border-l-4 border-[#182A62] p-4 flex flex-col space-y-3">
                <h2 className="lg:text-[20px] text-[18px] font-semibold">
                  Unlock Your Domain
                </h2>
                <p className="text-[#667085] lg:text-[16px] text-[14px]">
                  Log in to your current registrar and unlock the domain you
                  want to transfer.
                </p>
              </div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="lg:border-l-6 border-l-4 border-[#ccc] p-4 flex flex-col space-y-3"
                >
                  <h2 className="lg:text-[20px] text-[18px] font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-[#667085] lg:text-[16px] text-[14px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:w-[45%]">
              <img
                src="/assets/gifs/transfer-domain.gif"
                alt="transfer-domain"
              />
            </div>
          </div>
        </div>
      </div>

      <DomainExtensionPricing />
      <Qualifications />
      <Testimonials />
      <FAQs />
      <Footer />
    </Container>
  );
};

export default TransferDomain;
