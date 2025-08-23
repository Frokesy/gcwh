import { NavLink } from "react-router-dom";
import { CaretDown, HamburgerIcon } from "../svgs/Icons";
import { useState } from "react";
import ServersDropdown from "../dropdowns/ServersDropdown";
import HostingDropdown from "../dropdowns/HostingDropdown";
import DomainDropdown from "../dropdowns/DomainDropdown";
import { AnimatePresence, motion } from "framer-motion";
import Drawer from "./Drawer";

const StickyTopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { label: "Build website", href: "/build-website" },
    { label: "Servers" },
    { label: "Hosting" },
    { label: "Domain" },
    { label: "Cart", href: "/cart" },
    { label: "Log in", href: "/login" },
    { label: "Sign up", href: "/signup", button: true },
  ];
  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };
  return (
    <div className="fixed w-full z-50">
      <div className="lg:w-[90vw] mx-auto bg-[#fff] px-6 lg:px-10 lg:py-4 py-3 flex items-center justify-between lg:rounded-full shadow-lg lg:mt-6">
        <NavLink to="/" className="flex items-center space-x-2 lg:space-x-3">
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
          />
          <h2 className="lg:text-[20px] text-[15px]">
            GOATClouds technologies
          </h2>
        </NavLink>

        <div className="lg:flex hidden items-center space-x-10">
          {navItems.map((item, index) => {
            if (item.button) {
              return (
                <NavLink
                  key={index}
                  to={item.href ?? "#"}
                  className="bg-[#182A62] text-white px-6 py-2 rounded-lg"
                >
                  {item.label}
                </NavLink>
              );
            }

            if (item.href) {
              return (
                <NavLink
                  key={index}
                  to={item.href}
                  className="text-[#667085] text-[16px]"
                >
                  {item.label}
                </NavLink>
              );
            }

            return (
              <div className="">
                <button
                  key={index}
                  onClick={() => toggleDropdown(item.label)}
                  className="text-[#667085] text-[16px] flex items-center cursor-pointer space-x-3"
                >
                  <span>{item.label}</span>
                  <CaretDown />
                </button>
                {item.label === "Servers" && activeDropdown === "Servers" && (
                  <ServersDropdown />
                )}
                {item.label === "Hosting" && activeDropdown === "Hosting" && (
                  <HostingDropdown />
                )}
                {item.label === "Domain" && activeDropdown === "Domain" && (
                  <DomainDropdown />
                )}
              </div>
            );
          })}
        </div>

        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        >
          <HamburgerIcon />
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className=""
        >
          <Drawer
            isOpen={isDrawerOpen}
            closeDrawer={() => setIsDrawerOpen(false)}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StickyTopNav;
