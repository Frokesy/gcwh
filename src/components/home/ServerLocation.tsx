import { Africa, Asia, Australia, Europe, SouthAmerica } from "../svgs/Icons";

const ServerLocation = () => {
  const locationItems = [
    {
      id: 1,
      location: "Asia",
      icon: <Asia />,
      desc: "Reliable servers across major tech hubs, ensuring fast connections for growing businesses and users.",
    },
    {
      id: 2,
      location: "South America",
      icon: <SouthAmerica />,
      desc: "Optimized infrastructure to deliver smooth, low-latency access across the region.",
    },
    {
      id: 3,
      location: "Africa",
      icon: <Africa />,
      desc: "Localized hosting that brings websites closer to audiences, improving speed and accessibility.",
    },
    {
      id: 4,
      location: "Europe",
      icon: <Europe />,
      desc: "High-performance servers with strong security and compliance for businesses of all sizes.",
    },
    {
      id: 5,
      location: "Australia",
      icon: <Australia />,
      desc: "Robust servers designed for speed and stability, keeping sites online around the clock.",
    },
  ];
  return (
    <div className="bg-[#fff] lg:py-20 py-10">
      <div className=" w-[90vw] mx-auto">
        <div className="flex flex-col items-center justify-center  px-4 lg:px-0 space-y-3 text-center">
          <h2
            data-aos="fade-down"
            className="lg:text-[48px] text-[24px] font-semibold text-gray-900"
          >
            Server Location
          </h2>
          <p data-aos="fade-up" className="lg:text-[20px] text-[#667085]">
            See where our servers are strategically located to deliver fast,
            secure, and reliable connections—no matter where your visitors are.
          </p>
          <div className="lg:w-[100%] w-[95vw] mt-10 lg:bg-[#fff] bg-[#ccc] lg:p-0 p-3">
            <img
              src="/assets/map.png"
              alt="map"
              className="w-[100%] lg:h-[552px] h-[220px]"
            />
          </div>
        </div>
      </div>
      <div className="py-20 mt-10 bg-[#1A2E6C] text-[#fff]">
        <div className="w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {locationItems.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-duration={item.id + 1500}
              className="flex flex-col items-center text-center"
            >
              <div className="">{item.icon}</div>
              <h2 className="text-[20px] font-semibold mt-2">
                {item.location}
              </h2>
              <p className="mt-3 text-[16px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerLocation;
