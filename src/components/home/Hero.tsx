import { GreenTick } from "../svgs/Icons";
import ContactRequestForm from "./ContactRequestForm";

const Hero = () => {
  const bottomBarItems = [
    "Fast & expert support",
    "24/7 monitoring",
    "99.9% uptime guaranteed",
    "After-hours support",
    "30-Day Money Back",
    "Fast & expert support",
    "24/7 monitoring",
    "99.9% uptime guaranteed",
    "After-hours support",
    "30-Day Money Back",
  ];
  return (
    <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] pt-20 bg-no-repeat min-h-screen">
      <div className="text-gray-900 flex lg:flex-row flex-col justify-between w-[90vw] mx-auto">
        <div className="lg:w-[45%] flex flex-col space-y-4">
          <h2
            data-aos="fade-down"
            className="lg:text-[60px] text-[30px] font-semibold"
          >
            Do you need a website or app for your{" "}
            <span className="text-[#003EFF]">product?</span>
          </h2>
          <p data-aos="fade-down" className="text-gray-900 lg:text-[20px]">
            We create fast, user-friendly digital solutions tailored to your
            brand and goals.
          </p>

          <ContactRequestForm />
        </div>
        <div data-aos="fade-left" className="lg:w-[45%] lg:mt-0 mt-10">
          <img
            src="/assets/hero-img.png"
            alt="hero-img"
            className="lg:h-[720px] h-[370px] lg:max-h-[720px] w-[100%] object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="relative mt-20 scrollbar-hide w-[95vw] mx-auto lg:text-[16px] text-[14px] py-3 lg:py-6 px-10 rounded-full bg-[#fff] overflow-x-auto">
        <div className="flex space-x-10 animate-marquee">
          {bottomBarItems.concat(bottomBarItems).map((item, index) => (
            <div key={index} className="flex items-center space-x-3 min-w-max">
              <GreenTick />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
