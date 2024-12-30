import React from "react";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed
import logo from "../assets/Images/logo2.png"; // Corrected import statement
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaUser } from "react-icons/fa6"; // Import desired icons
import { ImBooks } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold ml-20">
          {/* <img
            src={logo}
            alt="TradeHive Logo"
            className="h-16" // Adjust size of logo (you can tweak the height value)
          /> */}
          <ImBooks className="size-[40px]"/>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-1 mr-[650px] justify-center space-x-8 text-[19px] font-medium font-roboto">
          <Link to="/" className="text-gray-900 hover:text-gray-500">
            HOME
          </Link>
          <Link to="/Textbooks" className="text-gray-900 hover:text-gray-500">
            TEXTBOOKS
          </Link>
          <Link to="/Gadg" className="text-gray-900 hover:text-gray-500">
            GADG
          </Link>
          <Link to="/Notes" className="text-gray-900 hover:text-gray-500">
            NOTES
          </Link>
        </div>

        {/* Icons on the Right Side */}
        <div className="flex space-x-6 text-[22px] font-semibold mr-20">
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
