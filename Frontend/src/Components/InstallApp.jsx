import React from 'react'
import step1Image from '../../public/Images/Hero1.png'
import step3Image from '../../public/Images/Hero2.png';
import step2Image from '../../public/Images/comunity1.png';

const InstallApp = () => {
  return (
    <section className="bg-white">
          <div className="container mx-auto w-[1252px]">
            {/* Title and Border */}
            <div className="flex justify-center items-center">
              <h2 className="text-[32px] font-semibold font-roboto w-[1252px]">Install our web app</h2>
            </div>
            <div className="w-full h-[3px] bg-[#d3d3d3] mx-auto mt-8"></div>
    
            {/* Steps */}
            <div className="flex flex-col gap-12 mt-12">
              {/* Step 1 */}
              <div className="flex items-center " style={{ gap: '194px' }}>
                
                <div className="text-left">
                  <h3 className="text-[32px] font-bold font-roboto mb-2">Shop hassle-free!</h3>
                  <p className="text-[20px] font-roboto mt-[20px] w-[445px]">
                  Explore student listings on TradeHive. Find what you need from fellow students within your campus.
                  </p>
                  <button className="shadow-xl text-white bg-[#e01d00] font-roboto font-medium text-lg py-2 px-4 rounded-3xl w-[192px] h-[62px] mt-[32px]">
                  Install
                  </button>
                </div>
                <img src={step1Image} alt="Step 1 Illustration" className="w-[360px] " />
              </div>
              <div className="w-full h-[3px] bg-[#d3d3d3] mx-auto mt-8"></div>
    
              </div>
          </div>
          <div className='mt-[239px]'>

          </div>
        </section>
  )
}

export default InstallApp
