import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImBooks } from "react-icons/im";
import LimitedTimeOffer from "./LimitedTimeOffer";
import Cat from "./UpperCat";
import SpecialOfferCard from "./SpecialOfferCard";
import TrendingItems from "./TrendingItems";

const Categories = () => {
  const [specialOffers, setSpecialOffers] = useState([]);
  const [visibleOffers, setVisibleOffers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend every time the page reloads
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/specialoffers");
        setSpecialOffers(response.data); // Set state with fetched data
        localStorage.setItem("specialOffers", JSON.stringify(response.data)); // Optionally store it in localStorage
      } catch (error) {
        console.error("Error fetching special offers:", error);
      }
    };

    fetchOffers(); // Fetch offers from the backend on component mount
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  useEffect(() => {
    if (specialOffers.length > 0) {
      let index = 0;

      const updateVisibleOffers = () => {
        const nextOffers = [
          specialOffers[index % specialOffers.length],
          specialOffers[(index + 1) % specialOffers.length],
        ];
        setVisibleOffers(nextOffers);
        index += 2;
      };

      updateVisibleOffers(); // Initial call
      const intervalId = setInterval(updateVisibleOffers, 30000); // Update every minute

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [specialOffers]);

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="ml-[70px] mr-[50px]">
        <h2 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] font-roboto font-medium text-gray-800 mb-4 text-center">
          Categories
        </h2>
        <Cat />

        <div className="container mx-auto mt-10">
          <div className="flex flex-col lg:flex-row justify-between gap-[10%]">
            <div className="lg:w-[25%] w-full bg-white mt-10">
              <div className="bg-[#d9dfe6] rounded-xl flex items-center px-4 h-[48px]">
                <ImBooks className="text-2xl" />
                <h2 className="text-lg sm:text-2xl sm:px-2 font-bold font-roboto text-gray-800 px-4">Special Offers</h2>
              </div>
              {visibleOffers.map((offer) => (
                <SpecialOfferCard
                  key={offer._id}
                  title={offer.title}
                  discount={offer.discount}
                  imageUrl={offer.imageUrl} // Pass the image URL to the component
                />
              ))}
              <LimitedTimeOffer />
            </div>

            <div className="lg:w-[75%] w-full bg-white mt-10">
              <div className="bg-[#d9dfe6] rounded-xl flex items-center px-4 h-[48px]">
                <ImBooks className="text-2xl" />
                <h2 className="text-lg sm:text-2xl sm:px-2 font-bold font-roboto text-gray-800 px-4">Trending items</h2>
              </div>
              <TrendingItems />
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
