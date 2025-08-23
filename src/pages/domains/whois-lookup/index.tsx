import Container from "../../../components/defaults/Container";
import FAQs from "../../../components/defaults/FAQs";
import Footer from "../../../components/defaults/Footer";
import DomainExtensionPricing from "../../../components/domains/DomainExtensionPricing";
import Qualifications from "../../../components/domains/Qualifications";
import Testimonials from "../../../components/home/Testimonials";
import { DiagArrow, SearchIcon } from "../../../components/svgs/Icons";

const WhoisLookup = () => {
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] pt-20 bg-no-repeat lg:min-h-[80vh]">
        <div className="w-[90vw] mx-auto">
          <div className="flex flex-col lg:items-center items-start space-y-3">
            <div className="bg-[#12214D] text-[#fff] font-semibold py-2 px-4 rounded-full">
              <span>WHOIS Lookup</span>
            </div>
            <h2 className="lg:text-[60px] text-[30px] lg:text-center lg:w-[70%] font-semibold">
              WHOIS Lookup to quickly find domain ownership and registration
              details.
            </h2>
            <p className="lg:text-[20px] text-gray-600 lg:w-[60%] mx-auto lg:text-center">
              Quickly find domain ownership, registration, and expiry details.
              Simple, fast, and reliable for smarter domain decisions.
            </p>

            <div className="lg:bg-[#fff] lg:w-[60vw] w-[90vw] p-3 rounded-xl mt-4 flex lg:flex-row flex-col justify-between">
              <div className="flex items-center space-x-3 w-[100%] lg:w-[80%] lg:bg-inherit bg-[#fff] p-3 lg:p-0 rounded-lg lg:rounded-none">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Enter domain name or IP address"
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

      <DomainExtensionPricing />
      <Qualifications />
      <Testimonials />
      <FAQs />
      <Footer />
    </Container>
  );
};

export default WhoisLookup;
