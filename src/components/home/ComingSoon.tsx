import { AppStoreIcon, GooglePlayIcon } from "../svgs/Icons";

const ComingSoon = () => {
  return (
    <div className="w-[90vw] mx-auto my-10 lg:my-20 flex lg:flex-row flex-col justify-between">
      <div className="lg;w-[45%] flex flex-col">
        <div className="flex">
          <div className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full">
            <span>Coming soon</span>
          </div>
        </div>
        <h2 className="lg:text-[48px] text-[24px] text-gray-900 lg:mt-4 mt-2 font-semibold">
          Goatmail App
        </h2>
        <p className="lg:text-[20px] text-gray-800 lg:mt-6 mt-3">
          Choose a hosting plan that fits your needs and budget. Whether you're
          starting small or scaling big, we've got the right option for you.
        </p>
        <div className="flex items-center space-x-4 mt-10">
          <GooglePlayIcon />
          <AppStoreIcon />
        </div>
      </div>
      <div className="lg:w-[45%] lg:mt-0 mt-10">
        <img src="/assets/phones.png" alt="phones" className="w-[100%]" />
      </div>
    </div>
  );
};

export default ComingSoon;
