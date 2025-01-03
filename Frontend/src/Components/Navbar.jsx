import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const handleToggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`bg-white border border-black flex items-center w-full h-[120px] ${
        isVisible ? "transition-transform transform-none" : "transition-transform transform -translate-y-full"
      } z-50`}
    >
      <div className="flex justify-center items-center p-4">
        {/* Logo */}
        <img src="/Images/Logo.png" alt="Logo" className="w-[220px] h-auto ml-[50px]" />

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={handleToggleDropdown} className="text-3xl">
            &#9776;
          </button>
        </div>

        {/* Navigation Links */}
        <div
          ref={dropdownRef}
          className={`lg:flex lg:flex-1 lg:space-x-8 text-[19px] font-medium font-roboto ${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-[60px] left-0 w-full lg:w-auto bg-gray-200 lg:bg-transparent`}
        >
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:space-x-8 ml-[93px]" style={{ gap: "128px" }}>
            <Link to="/Buy" className="text-gray-900 text-[24px] font-roboto font-bold hover:text-gray-500 px-4 py-2 lg:px-0">
              Buy
            </Link>
            <Link to="/Sell" className="text-gray-900 text-[24px] font-roboto font-bold hover:text-gray-500 px-4 py-2 lg:px-0">
              Sell
            </Link>
            <Link to="/Trade" className="text-gray-900 text-[24px] font-roboto font-bold hover:text-gray-500 px-4 py-2 lg:px-0">
              Trade
            </Link>

            {/* Search Bar and Icon */}
            <div className="flex items-center space-x-2 relative">
              <input
                type="text"
                placeholder="Campus address"
                value="Search listings"
                className="w-[400px] h-[48px] font-thin px-4 py-3 rounded-3xl border border-gray-200 text-gray-500 shadow-xl font-roboto text-[20px]"
              />
              <IoMdSearch className="text-black h-[40px] w-[40px] mt-2 mr-10" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
