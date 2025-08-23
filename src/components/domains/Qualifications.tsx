import { MeritIconFive, MeritIconFour, MeritIconSix } from "../svgs/Icons";

const Qualifications = () => {
  const qualificationItems = [
    {
      id: 1,
      title: "Wide Range of Domains",
      desc: "From .com to country-specific extensions, we give you the perfect name to match your brand.",
      icon: <MeritIconFour />,
      img: "/assets/merit-img-four.png",
      imgTheme: "#06AED4",
    },
    {
      id: 2,
      title: "Easy Management Tools",
      desc: "Manage, renew, or transfer your domains seamlessly with our simple control panel.",
      icon: <MeritIconFive />,
      img: "/assets/merit-img-two.png",
      imgTheme: "#7A5AF8",
    },
    {
      id: 3,
      title: "Affordable & Transparent Pricing",
      desc: "No hidden costs, just clear and competitive rates for all your domain needs.",
      icon: <MeritIconSix />,
      img: "/assets/merit-img-five.png",
      imgTheme: "#6172F3",
    },
  ];
  return (
    <div className="py-20 bg-[#fff]">
      <div className="flex flex-col items-center justify-center  px-4 lg:px-0 space-y-3 text-center">
        <h2 className="lg:text-[48px] text-[24px] font-semibold text-gray-900">
          Why get domains at Goatclouds hosting?
        </h2>
        <p className="lg:text-[20px] text-[#667085]">
          Join thousands of satisfied customers who trust us with their online
          presence.
        </p>
      </div>

      <div className="mt-10 flex flex-col space-y-10">
        {qualificationItems.map((item) => (
          <div
            key={item.id}
            className={`${item.id % 2 === 0 ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"} flex justify-between items-center`}
          >
            <div className="flex flex-col space-y-4 lg:w-[50%] lg:px-20 pl-4">
              <div className="">{item.icon}</div>
              <h2 className="text-gray-900 text-[18px] lg:text-[30px] font-semibold">
                {item.title}
              </h2>
              <p className="lg:text-[18px] text-[14px] text-[#667085]">
                {item.desc}
              </p>
            </div>

            <div
              className={`${item.id % 2 === 0 ? "items-end justify-start mr-4 lg:mr-0" : "items-end justify-end ml-4 lg:ml-0"} flex lg;w-[50%] h-[370px] lg:mt-0 mt-10`}
              style={{ backgroundColor: item.imgTheme }}
            >
              <img
                src={item.img}
                alt={item.title}
                className={`${item.id % 2 === 0 ? "rounded-tr-2xl" : "rounded-tl-2xl"} w-[90%] h-[85%] object-cover`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
