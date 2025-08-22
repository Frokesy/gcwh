import { GreenTick } from "../svgs/Icons";

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
          <h2 className="lg:text-[60px] text-[30px] font-semibold">
            Do you need a website or app for your{" "}
            <span className="text-[#003EFF]">product?</span>
          </h2>
          <p className="text-gray-900 lg:text-[20px]">
            We create fast, user-friendly digital solutions tailored to your
            brand and goals.
          </p>

          <div className="lg:mt-10 mt-4 bg-[#fff] rounded-2xl border border-[#ccc] p-4 lg:p-6 w-full">
            <h2 className="text-[14px] text-gray-900">
              Give us information on what you want to build and we&apos;ll give
              you a call!
            </h2>
            <div className="mt-4 w-[100%] flex justify-between lg:text-[16px] text-[14px]">
              <div className="flex flex-col space-y-2 w-[45%] text-gray-900">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="px-4 py-2 border border-[#ccc] rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex flex-col space-y-2 w-[45%] text-gray-900">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="number"
                  className="px-4 py-2 border border-[#ccc] rounded-lg outline-none w-full"
                />
              </div>
            </div>
            <textarea
              name="request"
              id="request"
              className="px-4 py-2 mt-4 border border-[#ccc] rounded-lg outline-none w-full"
              placeholder="Describe your request in 10-20 words..."
            ></textarea>

            <div className="flex justify-end mt-4">
              <button className="bg-[#182A62] text-white px-6 py-2 rounded-lg font-semibold">
                Submit details
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] lg:mt-0 mt-10">
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
