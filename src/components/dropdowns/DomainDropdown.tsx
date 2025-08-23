import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  DomainPricesIcon,
  DotComIcon,
  SearchIcon,
  TransferDomainIcon,
} from "../svgs/Icons";

const DomainDropdown = () => {
  const items = [
    {
      id: 1,
      title: "Register domain",
      link: "/domain/register-domain",
      desc: "Register your domain to secure your online identity quickly and easily.",
      icon: <DotComIcon />,
    },
    {
      id: 2,
      title: "Transfer domain",
      link: "/domain/transfer-domain",
      desc: "Transfer your domain easily for better management and seamless service.",
      icon: <TransferDomainIcon />,
    },
    {
      id: 3,
      title: "WHOIS Lookup",
      link: "/domain/whois-lookup",
      desc: "WHOIS Lookup to quickly find domain ownership and registration details.",
      icon: <SearchIcon />,
    },
    {
      id: 4,
      title: "Domain Prices",
      link: "/domain/domain-prices",
      desc: "Domain prices that are affordable, transparent, and competitive.",
      icon: <DomainPricesIcon />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      key={"page"}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="lg:absolute bg-[#fff] w-[50vw] text-[#333] z-50 lg:rounded-xl left-[25%] lg:shadow-3xl lg:top-[12vh] lg:p-10 p-3 mt-4 lg:mt-0"
    >
      <h2 className="text-[14px] lg:block hidden text-[#1F3887] font-semibold mb-6">
        Domain
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

export default DomainDropdown;
