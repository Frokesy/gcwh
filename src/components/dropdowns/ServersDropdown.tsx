import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  CloudIcon,
  DedicatedServerIcon,
  LinuxIcon,
  VPSIcon,
  WindowsIcon,
} from "../svgs/Icons";

const ServersDropdown = () => {
  const items = [
    {
      id: 1,
      title: "Dedicated Servers",
      link: "/servers/dedicated-servers",
      desc: "Get full control, unmatched performance, and top-level security.",
      icon: <DedicatedServerIcon />,
    },
    {
      id: 2,
      title: "Windows cloud server",
      link: "/servers/windows-cloud-server",
      desc: "Run your applications on a secure Windows cloud server with flexible resources and high performance.",
      icon: <CloudIcon />,
    },
    {
      id: 3,
      title: "Linux VPS Hosting",
      link: "/servers/linux-vps-hosting",
      desc: "Enjoy full root access, scalable resources, and the reliability of Linux-based servers.",
      icon: <LinuxIcon />,
    },
    {
      id: 4,
      title: "Windows VDS server",
      link: "/servers/windows-vds-server",
      desc: "Powerful Windows hosting made easy. Secure, fast, and flexible virtual servers you control. ",
      icon: <WindowsIcon />,
    },
    {
      id: 5,
      title: "Linux VDS Server",
      link: "/servers/linux-vds-server",
      desc: "Linux VDS Server – Secure, high-performance hosting with full control.",
      icon: <LinuxIcon />,
    },
    {
      id: 6,
      title: "Managed VPS hosting",
      link: "/servers/managed-vps-server",
      desc: "We manage updates, security, and performance so your VPS runs smoothly.",
      icon: <VPSIcon />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      key={"page"}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="lg:absolute bg-[#fff] w-[50vw] text-[#333] z-50 lg:rounded-xl left-[20%] lg:shadow-3xl lg:top-[12vh] lg:p-10 p-3 mt-4 lg:mt-0"
    >
      <h2 className="text-[14px] lg:block hidden text-[#1F3887] font-semibold mb-6">
        Servers
      </h2>
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-2">
        {items.map((item) => (
          <NavLink key={item.id} to={item.link} className="flex space-x-3">
            <div className="">{item.icon}</div>
            <div className="">
              <h2 className="">{item.title}</h2>
              <p className="text-[#5D5E5F]">{item.desc}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default ServersDropdown;
