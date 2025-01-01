import React from 'react';
import { ImBooks } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className='ml-[90px]'>
          <a href="/" className="flex items-center">
            <ImBooks className='text-2xl' />
            <span className="ml-3 text-lg font-semibold">Campus Market</span>
          </a>
          <p className="mt-2 text-[13px]">Quick and secure transactions</p>
        </div>
        {/* Right-align the 'Need Help?' section */}
        <div className="ml-auto mr-[70px]">
          <h4 className="text-[13px] mb-2">Need Help?</h4>
          <p className='text-[15px]'>Our support is here for you 24/7</p>
          <p className="mt-2 flex items-center">
            <FaPhoneAlt className="mr-2" />
            <a href="tel:(123)456-7890" className="hover:underline">
              (123) 456-7890
            </a>
          </p>
          <p className="mt-2 flex items-center">
            <CgMail className="mr-2" />
            <a href="mailto:support@campusmarket.com" className="hover:underline">
              support@campusmarket.com
            </a>
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-400 hover:underline">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
