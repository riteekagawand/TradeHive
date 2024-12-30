import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";

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
    <nav className={`bg-gray-200 fixed top-0 left-0 w-full ${isVisible ? "transition-transform transform-none" : "transition-transform transform -translate-y-full"} z-50`}>
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold ml-20">
          <ImBooks className="size-[40px]" />
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={handleToggleDropdown} className="text-3xl">
            &#9776;
          </button>
        </div>

        {/* Navigation Links */}
        <div
          ref={dropdownRef}
          className={`lg:flex lg:flex-1 lg:justify-center lg:space-x-8 text-[19px] font-medium font-roboto ${isOpen ? "block" : "hidden"} absolute lg:static top-[60px] left-0 w-full lg:w-auto bg-gray-200 lg:bg-transparent`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-gray-500 px-4 py-2 lg:px-0">
              HOME
            </Link>
            <Link to="/Textbooks" className="text-gray-900 hover:text-gray-500 px-4 py-2 lg:px-0">
              TEXTBOOKS
            </Link>
            <Link to="/Gadg" className="text-gray-900 hover:text-gray-500 px-4 py-2 lg:px-0">
              GADG
            </Link>
            <Link to="/Notes" className="text-gray-900 hover:text-gray-500 px-4 py-2 lg:px-0">
              NOTES
            </Link>
          </div>
        </div>

        {/* Icons on the Right Side */}
        <div className="flex space-x-4 lg:space-x-6 text-[18px] lg:text-[22px] font-semibold mr-20">
          <FaSearch className="hover:text-gray-500" />
          <FaShoppingCart className="hover:text-gray-500" />
          <FaUser className="hover:text-gray-500" />
        </div>
      </div>

      {/* Line below the navbar with margin */}
      <div className="ml-20 mr-20 border-t-[3px] border-gray-300 rounded-full"></div>
    </nav>
  );
};

export default Navbar;
