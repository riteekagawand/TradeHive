import React from "react";
import { ImBooks } from "react-icons/im";
import LimitedTimeOffer from "./LimitedTimeOffer"; // Import the timer component
import Cat from "./UpperCat"; // Import the new Cat component
import SpecialOfferCard from "./SpecialOfferCard"; // Import the new SpecialOfferCard component
import TrendingItems from "./TrendingItems"; // Import the TrendingItems component

const Categories = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="ml-[70px] mr-[50px]">
        {/* Header */}
        <h2 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] font-roboto font-medium text-gray-800 mb-4 text-center">
          Categories
        </h2>

        {/* Categories Section */}
        <Cat /> {/* Use the new Cat component for specific categories */}

        {/* Special Offers and Trending Items Section */}
        <div className="container mx-auto mt-10">
          <div className="flex flex-col lg:flex-row justify-between gap-[10%]">
            {/* Special Offers */}
            <div className="lg:w-[25%] w-full bg-white mt-10">
              <div className="bg-[#d9dfe6] rounded-xl flex items-center px-4 h-[48px]">
                <ImBooks className="text-2xl" />
                <h2 className="text-lg sm:text-2xl sm:px-2 font-bold font-roboto text-gray-800 px-4">Special Offers</h2>
              </div>
              <SpecialOfferCard title="Textbook" />
              <SpecialOfferCard title="Gadget" />
              {/* Limited Time Offer Below Gadget */}
              <LimitedTimeOffer />
            </div>

            {/* Trending Items */}
            <div className="lg:w-[75%] w-full bg-white mt-10">
            <div className="bg-[#d9dfe6] rounded-xl flex items-center px-4 h-[48px]">
                <ImBooks className="text-2xl" />
                <h2 className="text-lg sm:text-2xl sm:px-2 font-bold font-roboto text-gray-800 px-4">Trending items</h2>
              </div>
              <TrendingItems /> {/* Use the new TrendingItems component */}

              <div className="bg-[#d9dfe6] rounded-xl flex items-center px-4 h-[48px] mt-20">
                <ImBooks className="text-2xl" />
                <h2 className="text-lg sm:text-2xl sm:px-2 font-bold font-roboto text-gray-800 px-4">Popular Categories</h2>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
