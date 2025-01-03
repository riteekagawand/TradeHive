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
            <img src="/Images/Logo.png" alt="Logo" className="w-[220px] h-auto" />
          </a>
          <p className="mt-[8px] text-[14px] font-roboto">Quick and secure transactions</p>
        </div>
        {/* Right-align the 'Need Help?' section */}
        <div className="ml-auto mr-[70px]">
          <h4 className="text-[12px] mb-[4px] font-roboto">Need Help?</h4>
          <p className='text-[16px] font-roboto'>Our support is here for you 24/7</p>
          <p className="mt-[28px] flex items-center">
            <FaPhoneAlt className="mr-2 w-[24px] h-[24px]" />
            <a href="tel:(123)456-7890" className="hover:underline text-[20px] font-roboto">
              (123) 456-7890
            </a>
          </p>
          <p className="mt-[8px] flex items-center">
            <CgMail className="mr-2 w-[24px] h-[24px]" />
            <a href="mailto:support@TradeHive.com" className="hover:underline text-[20px] font-roboto">
              support@TradeHive.com
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
