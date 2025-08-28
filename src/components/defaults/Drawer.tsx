import { NavLink } from "react-router-dom";
// import { CaretDown } from "../svgs/Icons";
// import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import ServersDropdown from "../dropdowns/ServersDropdown";
// import HostingDropdown from "../dropdowns/HostingDropdown";
// import DomainDropdown from "../dropdowns/DomainDropdown";

const Drawer = ({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
}) => {
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // const toggleDropdown = (name: string) => {
  //   setActiveDropdown((prev) => (prev === name ? null : name));
  // };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="bg-[#fff] text-[#333] fixed top-0 left-0 w-full max-h-screen z-[100] px-6 py-10 space-y-6 lg:hidden overflow-y-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex justify-end">
            <button
              onClick={closeDrawer}
              className="text-[#333] text-3xl font-bold hover:text-red-500"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <nav className="space-y-6 mt-4">
            <NavLink to="/" onClick={closeDrawer} className="block">
              Home
            </NavLink>
            <NavLink
              to="/build-website"
              onClick={closeDrawer}
              className="block"
            >
              Build website
            </NavLink>

            {/* <div>
              <div
                onClick={() => toggleDropdown("Servers")}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>Servers</span>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeDropdown === "Servers" ? "rotate-180" : ""
                  }`}
                >
                  <CaretDown />
                </div>
              </div>
              <AnimatePresence>
                {activeDropdown === "Servers" && <ServersDropdown />}
              </AnimatePresence>
            </div> */}

            {/* <div>
              <div
                onClick={() => toggleDropdown("Hosting")}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>Hosting</span>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeDropdown === "Hosting" ? "rotate-180" : ""
                  }`}
                >
                  <CaretDown />
                </div>
              </div>
              <AnimatePresence>
                {activeDropdown === "Hosting" && <HostingDropdown />}
              </AnimatePresence>
            </div> */}

            {/* <div>
              <div
                onClick={() => toggleDropdown("Domain")}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>Domain</span>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeDropdown === "Domain" ? "rotate-180" : ""
                  }`}
                >
                  <CaretDown />
                </div>
              </div>
              <AnimatePresence>
                {activeDropdown === "Domain" && <DomainDropdown />}
              </AnimatePresence>
            </div> */}

            <NavLink to="/hosting/shared-hosting" className="block">
              Hosting
            </NavLink>
            <NavLink
              to="https://clients.goatclouds.com/order/config/index/DirectAdmin-Shared-hosting"
              className="block"
            >
              Domain
            </NavLink>
            <NavLink
              to="https://clients.goatclouds.com/order/cart/index/DirectAdmin-Shared-hosting"
              className="block"
            >
              Cart
            </NavLink>
            <NavLink
              to="https://clients.goatclouds.com/client/login/"
              className="block"
            >
              Log in
            </NavLink>

            <NavLink
              to="https://clients.goatclouds.com/order/main/index/register"
              className="bg-[#182A62] text-[#fff] px-6 py-3 text-center rounded-xl block hover:bg-[#c0050f]"
            >
              Sign up
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
