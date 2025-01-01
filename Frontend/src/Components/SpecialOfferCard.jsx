import React from "react";

const SpecialOfferCard = ({ title, discount, imageUrl }) => (
  <div className="bg-[#CDDEEE] rounded-xl mt-10 h-[390px] flex items-center justify-center hover:scale-105 transform transition-transform duration-300 relative">
    <div className="grid text-gray-800 items-center">
      <h2 className="font-roboto text-2xl text-center">{title}</h2>
      <p className="text-center text-md">by</p>
      <div className="relative">
        <img src={imageUrl} className="h-40 mx-auto" alt={`${title} icon`} />
        <div className="absolute top-[-28px] right-[-50px] h-[100px] w-[100px] bg-[#567594] rounded-full flex flex-col justify-center items-center">
          <h3 className="font-roboto font-bold text-white text-xl leading-tight">
            {discount}%
          </h3>
          <h3 className="font-roboto font-bold text-white text-xl leading-tight">OFF</h3>
        </div>
      </div>
      <div className="flex justify-center items-center h-10 w-30 rounded-xl bg-[#567594]">
        <h2 className="font-roboto font-bold text-lg text-white">Shop Now</h2>
      </div>
    </div>
  </div>
);

export default SpecialOfferCard;
