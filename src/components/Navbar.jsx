import { useState } from "react";
import Logo from "../assets/images/logos/logo2.png";
import Arrowdown from "../assets/images/icons/arrow-down.svg";
import Cart from "../assets/images/icons/cart.svg";
import Laptop from "../assets/images/icons/laptop.svg";
import Pen from "../assets/images/icons/pen.svg";
import Crown from "../assets/images/icons/crown.svg";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
  ];

  return (
    <nav className="w-full fixed top-0 bg-[#00000010] backdrop-blur-lg z-10">
      <div className="container max-w-[1130px] mx-auto flex items-center justify-between h-[74px]">
        {/* Logo */}
        <div className="flex items-center gap-[26px]">
          <a href="index.html" className="flex w-[40px] shrink-0 items-center">
            <img src={Logo} alt="logo" />
          </a>
          {/* Right Side */}
          <ul className="hidden md:flex gap-6 items-center">
            {/* Categories Dropdown */}
            <li className="text-belibang-grey hover:text-belibang-light-grey transition-all duration-300 relative list-none">
              <button
                id="menu-button"
                className="flex items-center gap-1 focus:text-belibang-light-grey"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <span>Categories</span>
                <img src={Arrowdown} alt="icon" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-[52px] grid grid-cols-2 p-4 gap-[10px] w-[526px] rounded-[20px] bg-[#1E1E1E] border border-[#414141] z-10">
                  <div className="col-span-2 flex justify-between items-center rounded-2xl p-[12px_16px] border border-[#414141] hover:bg-[#2A2A2A] transition-all duration-300">
                    <div className="flex items-center">
                      <a
                        href=""
                        className="w-[58px] h-[58px] flex shrink-0 items-center"
                      >
                        <img src={Cart} alt="icon" />
                      </a>
                      <a href="" className="flex flex-col">
                        <p className="font-bold text-sm text-white">
                          All I Can
                        </p>
                        <p className="text-xs text-belibang-grey">
                          Everything in One Place
                        </p>
                      </a>
                    </div>
                    <div className="w-6 h-6 flex shrink-0">
                      <img src={Crown} alt="icon" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center rounded-2xl p-[12px_16px] border border-[#414141] hover:bg-[#2A2A2A] transition-all duration-300">
                    <div className="flex items-center">
                      <a
                        href=""
                        className="w-[58px] h-[58px] flex shrink-0 items-center"
                      >
                        <img src={Laptop} alt="icon" />
                      </a>
                      <a href="" className="flex flex-col">
                        <p className="font-bold text-sm text-white">
                          Web Developer
                        </p>
                        <p className="text-xs text-belibang-grey">
                          Made a website best performance
                        </p>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-between items-center rounded-2xl p-[12px_16px] border border-[#414141] hover:bg-[#2A2A2A] transition-all duration-300">
                    <div className="flex items-center">
                      <a
                        href=""
                        className="w-[58px] h-[58px] flex shrink-0 items-center"
                      >
                        <img src={Pen} alt="icon" />
                      </a>
                      <a href="" className="flex flex-col">
                        <p className="font-bold text-sm text-white">
                          UI Designer
                        </p>
                        <p className="text-xs text-belibang-grey">
                          Build beautiful page
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        {/* Nav Items */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="text-belibang-grey hover:text-belibang-light-grey transition-all duration-300 list-none"
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-belibang-gray hover:text-belibang-light-grey transition-all duration-300 z-20"
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>

        {/* Overlay (gelap) */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)} // klik luar nutup menu
            className="fixed inset-0 bg-black/50 backdrop-blur-xl z-40 transition-opacity duration-300"
          ></div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`fixed top-0 right-0 h-screen w-[80%] max-w-xs bg-[#1E1E1E] p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out z-50 animate-navSlide
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Close Button di dalam drawer */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-white"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>

            {/* Nav Items */}
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg"
              >
                {item.name}
              </a>
            ))}

            {/* Categories */}
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-white flex items-center gap-2"
            >
              Categories
              <img src={Arrowdown} alt="icon" />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col gap-4 w-[90%] max-w-sm bg-[#2A2A2A] p-4 rounded-[20px] border border-[#414141]">
                <a
                  href=""
                  className="text-white rounded-2xl border border-[#414141] p-2"
                >
                  All I Can
                </a>
                <a
                  href=""
                  className="text-white rounded-2xl border border-[#414141] p-2"
                >
                  Web Developer
                </a>
                <a
                  href=""
                  className="text-white rounded-2xl border border-[#414141] p-2"
                >
                  UI Designer
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
