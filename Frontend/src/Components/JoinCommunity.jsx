import React from 'react';
import step1Image from '../../public/Images/Hero1.png'
import step3Image from '../../public/Images/Hero2.png';
import step2Image from '../../public/Images/comunity1.png';

function JoinCommunity() {
  return (
    <section className="bg-white">
      <div className="container mx-auto w-[1252px]">
        {/* Title and Border */}
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-semibold font-roboto w-[1252px]">Join the TradeHive community</h2>
        </div>
        <div className="w-full h-[3px] bg-[#d3d3d3] mx-auto mt-8"></div>

        {/* Steps */}
        <div className="flex flex-col gap-12 mt-12">
          {/* Step 1 */}
          <div className="flex items-center " style={{ gap: '328px' }}>
            <img src={step1Image} alt="Step 1 Illustration" className="w-[280px] ml-[160px] " />
            <div className="text-left">
              <h3 className="text-[32px] font-bold font-roboto mb-2">Become a seller</h3>
              <p className="text-[20px] font-roboto mt-[20px] w-[312px]">
                Sell items on TradeHive. All you need is an account and a listing.
              </p>
              <button className="shadow-xl text-gray-700 font-roboto font-medium text-lg py-2 px-4 rounded-3xl w-[192px] h-[62px] mt-[32px]">
                Sell now
              </button>
            </div>
          </div>
          <div className="w-full h-[3px] bg-[#d3d3d3] mx-auto mt-4"></div>

          {/* Step 2 */}
          <div className="flex items-center " style={{ gap: '328px' }}>
            <img src={step2Image} alt="Step 1 Illustration" className="w-[280px] ml-[160px] " />
            <div className="text-left">
              <h3 className="text-[32px] font-bold font-roboto mb-2">Become a partner</h3>
              <p className="text-[20px] font-roboto mt-[20px] w-[312px]">
                Collaborate with TradeHive to enhance sales through online tools and promotions.
              </p>
              <button className="shadow-xl text-gray-700 font-roboto font-medium text-lg py-2 px-4 rounded-3xl w-[192px] h-[62px] mt-[32px]">
                Partner now
              </button>
            </div>
          </div>

          <div className="w-full h-[3px] bg-[#d3d3d3] mx-auto mt-4"></div>

          {/* Step 3 */}
          <div className="flex items-center " style={{ gap: '328px' }}>
            <img src={step3Image} alt="Step 1 Illustration" className="w-[280px] ml-[160px] " />
            <div className="text-left">
              <h3 className="text-[32px] font-bold font-roboto mb-2">Join our team</h3>
              <p className="text-[20px] font-roboto mt-[20px] w-[312px]">
                Work with us to create a seamless marketplace experience for students.
              </p>
              <button className="shadow-xl text-gray-700 font-roboto font-medium text-lg py-2 px-4 rounded-3xl w-[192px] h-[62px] mt-[32px]">
                Join us
              </button>
            </div>
          </div>
          <div className="w-full h-[3px] bg-[#d3d3d3] mx-auto mb-8"></div>
        </div>

        {/* Bottom Border */}
        {/* <div className="w-full h-[3px] bg-[#d3d3d3] mx-auto mt-12"></div> */}
      </div>
    </section>
  );
}

export default JoinCommunity;
