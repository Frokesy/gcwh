import { MeritIconOne, MeritIconThree, MeritIconTwo } from "../svgs/Icons";

const Merit = () => {
  const meritItems = [
    {
      id: 1,
      title: "Lightning Fast Setup",
      desc: "Get your website live in under 5 minutes with our streamlined onboarding process and instant provisioning.",
      icon: <MeritIconOne />,
      img: "/assets/merit-img-one.png",
      imgTheme: "#06AED4",
    },
    {
      id: 2,
      title: "99.9% Uptime Guarantee",
      desc: "Your website stays online with our robust infrastructure and proactive monitoring across data centers.",
      icon: <MeritIconTwo />,
      img: "/assets/merit-img-two.png",
      imgTheme: "#7A5AF8",
    },
    {
      id: 3,
      title: "Money-back guarantee",
      desc: "We stand behind the quality of our services. If you’re not completely satisfied, you’re protected by our 30-day money-back guarantee—no questions asked. Your trust and satisfaction are our highest priorities, and we’re confident you’ll value the results we deliver.",
      icon: <MeritIconThree />,
      img: "/assets/merit-img-three.png",
      imgTheme: "#6172F3",
    },
  ];
  return (
    <div className="py-20 bg-[#fff]">
      <div className="flex flex-col items-center justify-center  px-4 lg:px-0 space-y-3 text-center">
        <h2
          data-aos="fade-down"
          className="lg:text-[48px] text-[24px] font-semibold text-gray-900"
        >
          Why Choose Goatclouds hosting?
        </h2>
        <p data-aos="fade-up" className="lg:text-[20px] text-[#667085]">
          Join thousands of satisfied customers who trust us with their online
          presence.
        </p>
      </div>

      <div className="mt-10 flex flex-col space-y-10">
        {meritItems.map((item) => (
          <div
            key={item.id}
            className={`${item.id % 2 === 0 ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"} flex justify-between items-center`}
          >
            <div
              data-aos="fade-down"
              className="flex flex-col space-y-4 lg:w-[50%] lg:px-20 pl-4"
            >
              <div className="">{item.icon}</div>
              <h2 className="text-gray-900 text-[18px] lg:text-[30px] font-semibold">
                {item.title}
              </h2>
              <p className="lg:text-[18px] text-[14px] text-[#667085]">
                {item.desc}
              </p>
            </div>

            <div
              className={`${item.id % 2 === 0 ? "items-end justify-start mr-4 lg:mr-0" : "items-end justify-end ml-4 lg:ml-0"} flex lg:w-[50%] h-[370px] lg:mt-0 mt-10`}
              style={{ backgroundColor: item.imgTheme }}
            >
              <img
                data-aos={`${item.id % 2 === 0 ? "fade-right" : "fade-left"}`}
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

export default Merit;
