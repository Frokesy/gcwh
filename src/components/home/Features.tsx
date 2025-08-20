import {
  AdvancedSecurity,
  DotCom,
  HostingIcon,
  ServersIcon,
} from "../svgs/Icons";

const Features = () => {
  const featureItems = [
    {
      id: 1,
      title: "Hosting",
      desc: "Lightning-fast SSD hosting with shared, cloud, and VPS options. Powered by African data centers for optimal local performance.",
      bgColor: "#E8EAF0",
      icon: <HostingIcon />,
    },
    {
      id: 2,
      title: "Domain Registration",
      desc: "Search, register, and manage domains with ease. Free domain included with hosting plans plus local African extensions.",
      bgColor: "#F5FBEE",
      icon: <DotCom />,
    },
    {
      id: 3,
      title: "Servers",
      desc: "Powerful dedicated and VPS servers with full root access, scalable resources, and enterprise-grade performance monitoring.",
      bgColor: "#F4F3FF",
      icon: <ServersIcon />,
    },
    {
      id: 4,
      title: "Advanced Security",
      desc: "Free SSL certificates, DDoS protection, malware scanning, and daily backups keep your site secure 24/7.",
      bgColor: "#EFF4FF",
      icon: <AdvancedSecurity />,
    },
  ];
  return (
    <div className="bg-[#fff] text-[#101828]">
      <div className="mt-10 w-[90vw] mx-auto py-20 flex flex-col lg:space-y-6 space-y-3 items-center justify-center">
        <div className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full">
          <span>Features</span>
        </div>
        <h2 className="lg:text-[48px] text-[20px] text-center font-semibold">
          Everything you need to success online
        </h2>
        <p className="lg:text-[20px]">
          From hosting to domains, we've got you covered with enterprise-grade
          features at affordable prices.
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-4">
          {featureItems.map((item) => (
            <div
              className="p-6 rounded-lg flex flex-col items-center justify-center"
              key={item.id}
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="">{item.icon}</div>
              <div className="space-y-3 text-center mt-10 text-gray-900">
                <h2 className="text-[20px] font-semibold">{item.title}</h2>
                <p className="">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
