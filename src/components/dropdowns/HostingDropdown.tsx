import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  EmailHostingIcon,
  LitespeedHostingIcon,
  WebHostingIcon,
  WordpressHostingIcon,
} from "../svgs/Icons";

const HostingDropdown = () => {
  const items = [
    {
      id: 1,
      title: "Web hosting",
      link: "/hosting/web-hosting",
      desc: "Fast, secure, and reliable hosting for your website. Get your site online with ease and keep it running smoothly.",
      icon: <WebHostingIcon />,
    },
    {
      id: 2,
      title: "Wordpress hosting",
      link: "/hosting/wordpress-hosting",
      desc: "WordPress hosting for fast, secure, and hassle-free websites.",
      icon: <WordpressHostingIcon />,
    },
    {
      id: 3,
      title: "Email hosting",
      link: "/hosting/email-hosting",
      desc: "Professional, secure, and reliable custom email for your business. ",
      icon: <EmailHostingIcon />,
    },
    {
      id: 4,
      title: "LiteSpeed hosting",
      link: "/hosting/litespeed-hosting",
      desc: "LiteSpeed hosting for faster, safer, and more efficient websites.",
      icon: <LitespeedHostingIcon />,
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
        Hosting
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

export default HostingDropdown;
