import { GreenTick } from "../svgs/Icons";

const ScrollFeatures = () => {
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
    <div className="relative mt-20 scrollbar-hide w-[95vw] mx-auto py-3 lg:text-[16px] text-[14px] lg:py-6 px-10 rounded-full bg-[#fff] overflow-x-auto">
      <div className="flex space-x-10 animate-marquee">
        {bottomBarItems.concat(bottomBarItems).map((item, index) => (
          <div key={index} className="flex items-center space-x-3 min-w-max">
            <GreenTick />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollFeatures;
