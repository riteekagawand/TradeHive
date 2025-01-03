import React from 'react';
import step2Image from '../../public/Images/Hero2.png';
import step3Image from '../../public/Images/Explore1.png';

function FeaturesSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto  w-[1252px]">
        {/* Border line */}
        <div className="w-[1252px] h-[3px] bg-[#d3d3d3] mx-auto mb-8"></div>
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-semibold font-roboto w-[1252px]">Explore TradeHive features</h2>
        </div>
        <div className="w-[1252px] h-[3px] bg-[#d3d3d3] mx-auto mt-8"></div>

        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start text-left w-[300px]">
            <img src={step2Image} alt="Step 1 Illustration" className="w-[280px] mb-6" />
            <h3 className="text-[32px] font-bold font-roboto text-left mb-2">Step 1</h3>
            <p className='text-[20px] font-roboto'>Enter your campus location. Pin it or type in your address for accurate listings.</p>
          </div>

          {/* Divider Line */}
          <div className="w-[3px] h-[550px] bg-[#d3d3d3] "></div>

          <div className="flex flex-col items-start text-left w-[300px]">
            <img src={step3Image} alt="Step 2 Illustration" className="w-[280px] mb-6" />
            <h3 className="text-[32px] font-bold font-roboto mb-2">Step 2</h3>
            <p className='text-[20px] font-roboto'>Browse items and chat with sellers. Find what you need in a few clicks.</p>
          </div>

          {/* Divider Line */}
          <div className="w-[3px] h-[550px] bg-[#d3d3d3]"></div>

          <div className="flex flex-col items-start text-left w-[300px]">
            <img src={step3Image} alt="Step 3 Illustration" className="w-[280px] mb-6" />
            <h3 className="text-[32px] font-bold font-roboto mb-2">Step 3</h3>
            <p className='text-[20px] font-roboto'>Complete your purchase securely. Sit back and relax while we process your order.</p>
          </div>
        </div>
        <div className="w-[1252px] h-[3px] bg-[#d3d3d3] mx-auto mb-8"></div>
      </div>
    </section>
  );
}

export default FeaturesSection;
