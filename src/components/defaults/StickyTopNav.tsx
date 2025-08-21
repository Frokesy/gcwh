import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "../svgs/Icons";

const StickyTopNav = () => {
  const navItems = [
    { label: "Build website", href: "/build-website" },
    { label: "Services" },
    { label: "Hosting" },
    { label: "Domain" },
    { label: "Cart", href: "/cart" },
    { label: "Log in", href: "/login" },
    { label: "Sign up", href: "/signup", button: true },
  ];

  return (
    <div className="fixed w-full z-50">
      <div className="w-[90vw] mx-auto bg-[#fff] px-6 lg:px-10 lg:py-4 py-3 flex items-center justify-between rounded-full shadow-lg mt-6">
        <div className="flex items-center space-x-2 lg:space-x-3">
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
          />
          <h2 className="lg:text-[20px] text-[15px]">
            GOATClouds technologies
          </h2>
        </div>

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
              <button key={index} className="text-[#667085] text-[16px]">
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="lg:hidden">
          <HamburgerIcon />
        </div>
      </div>
    </div>
  );
};

export default StickyTopNav;
