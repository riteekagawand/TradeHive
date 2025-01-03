import React, { useState, useEffect } from 'react';
import leftImage from '../../public/Images/Hero1.png'; // Replace with actual image path
import rightImage from '../../public/Images/Hero2.png'; // Replace with actual image path
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white w-full py-4 px-6 fixed top-0 left-0 right-0 flex justify-between items-center shadow-md z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <img src="/Images/Logo.png" alt="Campus Marketplace Logo" className="h-[70px] ml-10" />
      <div className="flex space-x-4 text-xl font-roboto mr-36">
        <button className="shadow-xl text-gray-700 font-medium text-lg py-2 px-4 rounded-3xl w-[130px] h-[52px]">
          Log in
        </button>
        <button className="bg-[#e01d00] hover:bg-[#e01e00] text-white font-medium py-2 px-4 rounded-3xl w-[130px]">
          Sign up
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [campusAddress, setCampusAddress] = useState('');

  const handleAddressChange = (event) => {
    setCampusAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Campus Address:', campusAddress);
  };

  return (
    <section className="bg-white h-screen flex flex-col items-center justify-center mt-[70px]">
      <Navbar />
      <div className="container mx-auto max-w-screen-xl px-4 flex items-center justify-between gap-12">
        <div className="flex-1 flex justify-center">
          <img
            src={leftImage}
            alt="Left Image"
            className="w-[192px] mb-[200px] ml-20 animate-slow-bounce"
          />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-[72px] w-[791px] h-[175px] font-bold mb-8">Discover student deals near you</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="relative mt-20">
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="text"
                placeholder="Campus address"
                value={campusAddress}
                onChange={handleAddressChange}
                className="w-full px-4 py-3 rounded-3xl border border-gray-200 focus:outline-none focus:border-indigo-500 shadow-xl"
              />
              <button
                type="submit"
                className="absolute bg-[#e01d00] text-white font-bold py-3 px-4 rounded-3xl ml-5 w-[130px] h-[52px]"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={rightImage}
            alt="Right Image"
            className="w-[192px] mr-20 mt-[130px] animate-slow-bounce"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
